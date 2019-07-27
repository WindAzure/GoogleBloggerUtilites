function composeArticle(articleList) {
    var nestString = "";
    articleList.forEach(function (article) {
        var hrefLinkString = "<a href='" + article["href"] + "'>";
        nestString += "<li>" + hrefLinkString + article["title"] + "</a></li>";
    })
    return "<ul class='nest'>" + nestString + "</ul>";
}

function composeHierarchyTagString(bloggerData) {
    var composeHierarchyTagString = "";
    Object.keys(bloggerData).forEach(function (category) {
        var categoryTitle = category + " (" + bloggerData[category].length + ")";
        var categoryContents = "<li class='category'><span class='categoryTag'>&#9660;&#160;</span>" + "<span>" + categoryTitle + "</span>";
        categoryContents = categoryContents + composeArticle(bloggerData[category]) + "</li>";
        composeHierarchyTagString += categoryContents;
    });
    return "<ul>" + composeHierarchyTagString + "</ul>";
}