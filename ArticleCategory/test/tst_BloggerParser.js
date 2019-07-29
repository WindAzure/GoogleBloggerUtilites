var assert = require('chai').assert;
var bloggerParser = require('../Js/BloggerParser.js');

describe('BloggerParser', function () {
  it('parseEntryCategoryInfo', function () {
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

    var categoryDataInfo = bloggerParser.parseEntryCategoryInfo(entry);

    assert.deepEqual(categoryDataInfo.length, 1);
    assert.deepEqual(categoryDataInfo[0], "UVa");
  });

  it('parseEntryCategoryInfo_entryNotExist', function () {
    assert.deepEqual(bloggerParser.parseEntryCategoryInfo({}).length, 0);
    assert.deepEqual(bloggerParser.parseEntryCategoryInfo(undefined).length, 0);
  });

  it('parseEntryCategoryInfo_noCategoryFieldExist', function () {
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

    var categoryDataInfo = bloggerParser.parseEntryCategoryInfo(entry);

    assert.deepEqual(categoryDataInfo.length, 0);
  });

  it('parseEntryCategoryInfo_noCategoryTermFieldExist', function () {
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

    var categoryDataInfo = bloggerParser.parseEntryCategoryInfo(entry);

    assert.deepEqual(categoryDataInfo.length, 0);
  });

  it('parseEntryArticleInfo', function () {
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

    var articleInfo = bloggerParser.parseEntryArticleInfo(entry);

    assert.deepEqual(articleInfo, { "href": "https://windazure.blogspot.com/2019/07/priorityqueue.html", "title": "Uva 1593" });
  });


  it('parseEntryArticleInfo_EntryNotExist', function () {
    assert.deepEqual(bloggerParser.parseEntryArticleInfo({}), undefined);
    assert.deepEqual(bloggerParser.parseEntryArticleInfo(undefined), undefined);
  });

  it('parseEntryArticleInfo_relAlternateFieldNotExist', function () {
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

    var articleInfo = bloggerParser.parseEntryArticleInfo(entry);

    assert.deepEqual(articleInfo, undefined);
  });


  it('parseEntryArticleInfo_dataFieldNotExist', function () {
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

    var articleInfo = bloggerParser.parseEntryArticleInfo(entry);

    assert.deepEqual(articleInfo, undefined);
  });


  it('parseSeedCategoryInfo', function () {
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

    var categoryInfo = bloggerParser.parseFeedCategoryInfo(feed);

    assert.deepEqual(categoryInfo, ["UVa", "Qt"]);
  });

  it('parseSeedCategoryInfo_termNotExist', function () {
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

    var categoryInfo = bloggerParser.parseFeedCategoryInfo(feed);

    assert.deepEqual(categoryInfo, []);
  });

  it('parseSeedCategoryInfo_feedNotExist', function () {
    assert.deepEqual(bloggerParser.parseFeedCategoryInfo({}), []);
    assert.deepEqual(bloggerParser.parseFeedCategoryInfo(undefined), []);
  });

  it('parseBloggerData', function () {
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

    var categoryInfo = bloggerParser.parseBloggerData(simpleData);
    assert.deepEqual(categoryInfo["UVa"], [{
      "href": "https://windazure.blogspot.com/2019/07/priorityqueue.html",
      "title": "Uva 1593"
    },
    {
      "href": "https://windazure.blogspot.com/2019/07/priorityqueue.html",
      "title": "Qt Uva 1593"
    }]);
  });

  it('parseBloggerData_categoryAndEntryIsEmpty', function () {
    var simpleData = {
      "feed": {
        "category": [
        ],
        "entry": [
        ]
      }
    };

    var categoryInfo = bloggerParser.parseBloggerData(simpleData);
    assert.deepEqual(categoryInfo, {});
  });

  it('parseBloggerData_categoryAndEntryNotExist', function () {
    var simpleData = {
      "feed": {
      }
    };

    var categoryInfo = bloggerParser.parseBloggerData(simpleData);
    assert.deepEqual(categoryInfo, {});
  });

  it('parseBloggerData_bloggerDataNotExist', function () {
    assert.deepEqual(bloggerParser.parseBloggerData({}), {});
    assert.deepEqual(bloggerParser.parseBloggerData(undefined), {});
  });
});