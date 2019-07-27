function parseEntryCategoryInfo(entry) {
    if (entry === undefined) {
        return [];
    }

    var categoryList = [];
    var categoryItemList = entry["category"];
    for (var i = 0; (categoryItemList !== undefined) && i < categoryItemList.length; i++) {
        var category = categoryItemList[i]["term"];
        if (category !== undefined) {
            categoryList.push(category);
        }
    }
    return categoryList;
}

function parseEntryArticleInfo(entry) {
    if (entry === undefined) {
        return undefined;
    }

    var linkList = entry["link"];
    for (var i = 0; (linkList !== undefined) && i < linkList.length; i++) {
        if (linkList[i]["rel"] === "alternate") {
            var href = linkList[i]["href"];
            var title = linkList[i]["title"];
            return (href !== undefined && title !== undefined) ? { "href": href, "title": title } : undefined;
        }
    }
    return undefined;
}

function parseFeedCategoryInfo(feed) {
    if (feed === undefined) {
        return [];
    }

    var categoryList = [];
    var category = feed["category"];
    for (var i = 0; (category !== undefined) && i < category.length; i++) {
        var term = category[i]["term"];
        if (term !== undefined) {
            categoryList.push(term);
        }
    }
    return categoryList;
}

function parseBloggerData(data) {
    if (data === undefined || data["feed"] === undefined) {
        return {};
    }

    var result = {};
    var totalCategoryList = parseFeedCategoryInfo(data["feed"]);
    if (totalCategoryList !== undefined) {
        totalCategoryList.forEach(function (category) {
            result[category] = [];
        });
    }

    var entryList = data["feed"]["entry"];
    if (entryList !== undefined) {
        entryList.forEach(function (entry) {
            var articleInfo = parseEntryArticleInfo(entry);
            var articleCategoryList = parseEntryCategoryInfo(entry);

            for (var i = 0; i < totalCategoryList.length; i++) {
                var targetCategory = totalCategoryList[i];
                for (var j = 0; j < articleCategoryList.length; j++) {
                    if (articleCategoryList[j] === targetCategory) {
                        result[targetCategory].push(articleInfo);
                    }
                }
            }
        });
    }

    return result;
}