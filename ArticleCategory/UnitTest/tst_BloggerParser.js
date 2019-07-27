function test_parseEntryCategoryInfo() {
    var entry = {
        "category": [
            {
                "scheme": "http://www.blogger.com/atom/ns#",
                "term": "UVa"
            }
        ],
        "link": [
            {
                "rel": "alternate",
                "type": "text/html",
                "href": "https://windazure.blogspot.com/2019/07/priorityqueue.html",
                "title": "Uva 1593"
            }
        ]
    };

    var categoryDataInfo = parseEntryCategoryInfo(entry);

    compare(categoryDataInfo.length, 1);
    compare(categoryDataInfo[0], "UVa");
}

function test_parseEntryCategoryInfo_entryNotExist() {
    compare(parseEntryCategoryInfo({}).length, 0);
    compare(parseEntryCategoryInfo(undefined).length, 0);
}

function test_parseEntryCategoryInfo_noCategoryFieldExist() {
    var entry = {
        "link": [
            {
                "rel": "alternate",
                "type": "text/html",
                "href": "https://windazure.blogspot.com/2019/07/priorityqueue.html",
                "title": "Uva 1593"
            }
        ]
    };

    var categoryDataInfo = parseEntryCategoryInfo(entry);

    compare(categoryDataInfo.length, 0);
}

function test_parseEntryCategoryInfo_noCategoryTermFieldExist() {
    var entry = {
        "category": [
            {
                "scheme": "http://www.blogger.com/atom/ns#",
            }
        ],
        "link": [
            {
                "rel": "alternate",
                "type": "text/html",
                "href": "https://windazure.blogspot.com/2019/07/priorityqueue.html",
                "title": "Uva 1593"
            }
        ]
    };

    var categoryDataInfo = parseEntryCategoryInfo(entry);

    compare(categoryDataInfo.length, 0);
}

function test_parseEntryArticleInfo() {
    var entry = {
        "category": [
            {
                "scheme": "http://www.blogger.com/atom/ns#",
                "term": "UVa"
            }
        ],
        "link": [
            {
                "rel": "alternate",
                "type": "text/html",
                "href": "https://windazure.blogspot.com/2019/07/priorityqueue.html",
                "title": "Uva 1593"
            }
        ]
    };

    var articleInfo = parseEntryArticleInfo(entry);

    compare(articleInfo, { "href": "https://windazure.blogspot.com/2019/07/priorityqueue.html", "title": "Uva 1593" });
}

function test_parseEntryArticleInfo_EntryNotExist() {
    compare(parseEntryArticleInfo({}), undefined);
    compare(parseEntryArticleInfo(undefined), undefined);
}

function test_parseEntryArticleInfo_relAlternateFieldNotExist() {
    var entry = {
        "category": [
            {
                "scheme": "http://www.blogger.com/atom/ns#",
                "term": "UVa"
            }
        ],
        "link": [
            {
            }
        ]
    };

    var articleInfo = parseEntryArticleInfo(entry);

    compare(articleInfo, undefined);
}

function test_parseEntryArticleInfo_dataFieldNotExist() {
    var entry = {
        "category": [
            {
                "scheme": "http://www.blogger.com/atom/ns#",
                "term": "UVa"
            }
        ],
        "link": [
            {
                "rel": "alternate",
                "type": "text/html",
            }
        ]
    };

    var articleInfo = parseEntryArticleInfo(entry);

    compare(articleInfo, undefined);
}

function test_parseSeedCategoryInfo() {
    var feed = {
        "category": [
            {
                "term": "UVa"
            },
            {
                "term": "Qt"
            }
        ]
    };

    var categoryInfo = parseFeedCategoryInfo(feed);

    compare(categoryInfo, ["UVa", "Qt"]);
}

function test_parseSeedCategoryInfo_termNotExist() {
    var feed = {
        "category": [
            {
                "apple": "UVa"
            },
            {
                "apple": "Qt"
            }
        ]
    };

    var categoryInfo = parseFeedCategoryInfo(feed);

    compare(categoryInfo, []);
}

function test_parseSeedCategoryInfo_feedNotExist() {
    compare(parseFeedCategoryInfo({}), []);
    compare(parseFeedCategoryInfo(undefined), []);
}

function test_parseBloggerData() {
    var simpleData = {
        "feed": {
            "category": [
                {
                    "term": "UVa"
                },
                {
                    "term": "Qt"
                }
            ],
            "entry": [
                {
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "link": [
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/07/priorityqueue.html",
                            "title": "Uva 1593"
                        }
                    ]
                },
                {
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "Qt"
                        },
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "link": [
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/07/priorityqueue.html",
                            "title": "Qt Uva 1593"
                        }
                    ]
                }
            ]
        }
    };

    var categoryInfo = parseBloggerData(simpleData);
    compare(categoryInfo["UVa"], [{
        "href": "https://windazure.blogspot.com/2019/07/priorityqueue.html",
        "title": "Uva 1593"
    },
    {
        "href": "https://windazure.blogspot.com/2019/07/priorityqueue.html",
        "title": "Qt Uva 1593"
    }]);
}

function test_parseBloggerData_categoryAndEntryIsEmpty() {
    var simpleData = {
        "feed": {
            "category": [
            ],
            "entry": [
            ]
        }
    };

    var categoryInfo = parseBloggerData(simpleData);
    compare(categoryInfo, {});
}

function test_parseBloggerData_categoryAndEntryNotExist() {
    var simpleData = {
        "feed": {
        }
    };

    var categoryInfo = parseBloggerData(simpleData);
    compare(categoryInfo, {});
}

function test_parseBloggerData_bloggerDataNotExist() {
    compare(parseBloggerData({}), {});
    compare(parseBloggerData(undefined), {});
}
