function test_showParseResultWithRealJSONData() {
    var bloggerData = {
        "version": "1.0",
        "encoding": "UTF-8",
        "feed": {
            "xmlns": "http://www.w3.org/2005/Atom",
            "xmlns$openSearch": "http://a9.com/-/spec/opensearchrss/1.0/",
            "xmlns$blogger": "http://schemas.google.com/blogger/2008",
            "xmlns$georss": "http://www.georss.org/georss",
            "xmlns$gd": "http://schemas.google.com/g/2005",
            "xmlns$thr": "http://purl.org/syndication/thread/1.0",
            "id": {
                "$t": "tag:blogger.com,1999:blog-5383900323330797772"
            },
            "updated": {
                "$t": "2019-07-21T23:23:04.590+08:00"
            },
            "category": [
                {
                    "term": "UVa"
                },
                {
                    "term": "小技巧"
                },
                {
                    "term": "演算法小練習"
                },
                {
                    "term": "個人反省"
                },
                {
                    "term": "Suitable for TDD ( ★★★★★ )"
                },
                {
                    "term": "Docker"
                },
                {
                    "term": "Qt"
                },
                {
                    "term": "Suitable for TDD ( ★★★☆☆ )"
                },
                {
                    "term": "Suitable for TDD ( ★★☆☆☆ )"
                },
                {
                    "term": "演算法研究"
                }
            ],
            "title": {
                "type": "text",
                "$t": "蔚藍筆記"
            },
            "subtitle": {
                "type": "html",
                "$t": ""
            },
            "link": [
                {
                    "rel": "http://schemas.google.com/g/2005#feed",
                    "type": "application/atom+xml",
                    "href": "https://windazure.blogspot.com/feeds/posts/default"
                },
                {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default?alt=json-in-script"
                },
                {
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "https://windazure.blogspot.com/"
                },
                {
                    "rel": "hub",
                    "href": "http://pubsubhubbub.appspot.com/"
                },
                {
                    "rel": "next",
                    "type": "application/atom+xml",
                    "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default?alt=json-in-script&start-index=26&max-results=25"
                }
            ],
            "author": [
                {
                    "name": {
                        "$t": "Azure"
                    },
                    "uri": {
                        "$t": "http://www.blogger.com/profile/01814232287067730332"
                    },
                    "email": {
                        "$t": "noreply@blogger.com"
                    },
                    "gd$image": {
                        "rel": "http://schemas.google.com/g/2005#thumbnail",
                        "width": "32",
                        "height": "32",
                        "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                    }
                }
            ],
            "generator": {
                "version": "7.00",
                "uri": "http://www.blogger.com",
                "$t": "Blogger"
            },
            "openSearch$totalResults": {
                "$t": "49"
            },
            "openSearch$startIndex": {
                "$t": "1"
            },
            "openSearch$itemsPerPage": {
                "$t": "25"
            },
            "entry": [
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-356042424318268556"
                    },
                    "published": {
                        "$t": "2019-07-20T18:38:00.002+08:00"
                    },
                    "updated": {
                        "$t": "2019-07-20T18:38:59.166+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "小技巧"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "自訂 priority_queue"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br />priority_queue 是 C++ 內建的 heap，基本上可以把原生型態都拿來裝，如要更改排序方向，就要教它怎麼排，也就是多給個 lambda 或是 operator overloading。如果是要放自訂的型態，也是透過類似的方法，教它要根據哪個欄位排就好。更多的宣告的方法，可以參考這篇<a href=\"https://blog.csdn.net/lijiang1991/article/details/52727478\" target=\"_blank\"><span style=\"color: #3d85c6;\">文章</span></a>。<br /><br /><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://1.bp.blogspot.com/-vbt7mqPKHts/XTLuOoquxzI/AAAAAAAABBI/SW1LurGpW2kDeiNo4vypmeCk6IxKfsXIACEwYBhgL/s1600/9.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"475\" data-original-width=\"738\" height=\"409\" src=\"https://1.bp.blogspot.com/-vbt7mqPKHts/XTLuOoquxzI/AAAAAAAABBI/SW1LurGpW2kDeiNo4vypmeCk6IxKfsXIACEwYBhgL/s640/9.png\" width=\"640\" /></a></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/356042424318268556/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/07/priorityqueue.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/356042424318268556"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/356042424318268556"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/07/priorityqueue.html",
                            "title": "自訂 priority_queue"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "media$thumbnail": {
                        "xmlns$media": "http://search.yahoo.com/mrss/",
                        "url": "https://1.bp.blogspot.com/-vbt7mqPKHts/XTLuOoquxzI/AAAAAAAABBI/SW1LurGpW2kDeiNo4vypmeCk6IxKfsXIACEwYBhgL/s72-c/9.png",
                        "height": "72",
                        "width": "72"
                    },
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-8382816951708656198"
                    },
                    "published": {
                        "$t": "2019-07-20T18:02:00.000+08:00"
                    },
                    "updated": {
                        "$t": "2019-07-20T18:11:18.775+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "Suitable for TDD ( ★★☆☆☆ )"
                        },
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 12108"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">給定若干個學生的醒睡周期 ( a, b, c ) ( 醒多久、睡多久、起始狀態 )，滿足<u>當前睡著的學生數量必須嚴格大於醒著的學生數量</u>的條件時，該學生才能睡；若不滿足，該學生就繼續撐著不可以睡，撐到過新的周期 a，待 a 結束後，再看那個時候能不能睡，不能睡就又繼續撐著，依此類推。求在哪個時間點時，所有的學生都會醒著，如果永遠都不可能有學生醒著，就輸出 -1。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">3</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">2 4 1</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">1 5 2</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">1 4 3</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">3</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">1 2 1</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">1 2 2</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">1 2 3</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">0</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">Case 1: 18</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">Case 2: -1</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入一整數 n \\( (1 ≤ n ≤ 10) \\) 代表學生總數，接下來有 n 筆學生的醒睡週期 ( a, b, c )，\\( 1 ≤ a, b&nbsp;≤ 5、1&nbsp;≤ c&nbsp;≤ a+b \\)。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">以測試資料為例，學生 1 是醒醒睡睡睡睡，初始狀態從第一個開始，因此就有兩個醒四個睡；</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">學生 2 是醒睡睡睡睡睡，初始狀態從第二個開始，因此一開始的醒就被跳過了，直接就是五個睡；</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">學生 3 是醒睡睡睡睡，初始狀態從第三個開始，故第一個醒和第二個睡就備跳過，只有三個醒，如下圖所示:</span><br /><br /><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://1.bp.blogspot.com/-Cx-AB5xdHLo/XTLJeVtlzlI/AAAAAAAAA_0/JoYGZubvnEMx2DvemLEGYlomzDw3XgbOwCEwYBhgL/s1600/1.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"173\" data-original-width=\"1049\" height=\"105\" src=\"https://1.bp.blogspot.com/-Cx-AB5xdHLo/XTLJeVtlzlI/AAAAAAAAA_0/JoYGZubvnEMx2DvemLEGYlomzDw3XgbOwCEwYBhgL/s640/1.png\" width=\"640\" /></a></div><br /><ul><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">第 4 分鐘時，學生 3 要決定下一分鐘是否可以睡，目前學生 1 和學生 2 都是睡的，所以學生 3 在下一分鐘可以睡，因此第 5 - 8 分鐘學生 3 都是睡的，第 9 分鐘醒來。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">第 6 分鐘時，學生 2 要決定下一分鐘是否可以睡，目前學生 1 和學生 3 都是睡的，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">所以學生 2</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;在下一分鐘可以睡，因此第 7 - 11 分鐘學生 2 都是睡的，第 12 分鐘醒來。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">第 8 分鐘時，學生 1 要決定下一分鐘是否可以睡，目前學生 2 和學生 3 都是睡的，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">所以學生 1</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;在下一分鐘可以睡，因此第 9 - 12 分鐘學生 1 都是睡的，第 13 分鐘醒來，持續到第 14 分鐘也是醒的。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">第 9 分鐘時，學生 3 要決定下一分鐘是否可以睡，目前學生 1 和學生 2 都是睡的，所以學生 3 在下一分鐘可以睡，因此第 10 - 13 分鐘學生 3 都是睡的，第 14 分鐘醒來。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">第 12 分鐘時，學生 2 要決定下一分鐘是否可以睡，目前學生 1 和學生 3 都是睡的，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">所以學生 2</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;在下一分鐘可以睡，因此第 13 - 17 分鐘學生 2 都是睡的，第 18 分鐘醒來。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">第 14 分鐘時，學生 1 要決定下一分鐘是否可以睡，目前只有學生 2 是睡的，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">所以學生 1</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;不能睡，因此第 15 - 16 分鐘學生 1 都是醒的。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">第 14 分鐘時，學生 3 要決定下一分鐘是否可以睡，目前只有學生 2 是睡的，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">所以學生 3</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;不能睡，因此第 15 分鐘學生 3 是醒的。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">第 15 分鐘時，學生 3 要決定下一分鐘是否可以睡，目前只有學生 2 是睡的，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">所以學生 3</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;不能睡，因此第 16 分鐘學生 3 是醒的。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">到目前為止，因為學生 1 和學生 3 一直都會保持醒著的狀態，不可能再睡著，所以等到第 18 分鐘學生 2 醒了，全班都醒了，故 18 為解。</span></li></ul><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">先初始化盤面，讓每個學生都處於接下來要決定是否能睡的狀態，如下圖紅框所示:</span><br /><br /><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://1.bp.blogspot.com/-_1w0bzakRCE/XTLabwjJk2I/AAAAAAAABAc/qyim2bvl2WcaZDB0RsQA13-ST302tII8QCEwYBhgL/s1600/1.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"173\" data-original-width=\"1049\" height=\"104\" src=\"https://1.bp.blogspot.com/-_1w0bzakRCE/XTLabwjJk2I/AAAAAAAABAc/qyim2bvl2WcaZDB0RsQA13-ST302tII8QCEwYBhgL/s640/1.png\" width=\"640\" /></a></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">將初始化後的狀態透過 priority_queue 進行排序，如此一來，就可以每次都取出最快要決定是否要睡的學生，亦可保證該學生要做決定時，其他學生都做完決定了。決定完該學生的狀態後，再丟回 priority_queue 裡，反覆的進行下去，直到所有學生都是醒的。 ( 在決定學生的狀態時，順便把醒/睡的狀態紀錄累計在經過的每一分鐘裡，這樣就可以加速判斷所有學生醒了沒有。 )</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">透過觀察第二筆測試資料，可以發現在永遠不可能全班都醒的情況下，有一些規律可循 － 每個學生醒過來的時間，還有彼此的間隔，都會是一直循環下去的。因此，只要在初始化盤面後，把當前彼此的距離記下來，當作判斷的依據，<strike>等到下一輪每個人剛好都醒過來一次後</strike>，把這個時候的距離拿來與一開始的距離做比較。若是相同，就表示回到了原點進入了循環，則輸出 -1。</span><br /><br /><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://1.bp.blogspot.com/-Mo1zOAOk6AY/XTLYSbgimoI/AAAAAAAABAI/9MYaJ1duU5UUvIeSyrHGP44QwC_5lUMmwCEwYBhgL/s1600/3.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"210\" data-original-width=\"448\" height=\"187\" src=\"https://1.bp.blogspot.com/-Mo1zOAOk6AY/XTLYSbgimoI/AAAAAAAABAI/9MYaJ1duU5UUvIeSyrHGP44QwC_5lUMmwCEwYBhgL/s400/3.png\" width=\"400\" /></a></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">要特別注意的是，<u style=\"font-weight: bold;\">不能</u>等到下一輪每個人剛好都醒過來一次後判斷，以來自 uDebug 的測試資料並畫成圖片為例:</span><br /><br /><div style=\"text-align: center;\"><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">3</span></div><div style=\"text-align: center;\"><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">1 5 4</span></div><div style=\"text-align: center;\"><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">1 2 3</span></div><div style=\"text-align: center;\"><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">1 2 2</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\"><br /></span></div><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://1.bp.blogspot.com/-L3k3MYVPbSI/XTLfeXcgp7I/AAAAAAAABA0/8ljTrdRBXzQ9v6-5--zbFcLomlnqqp9egCEwYBhgL/s1600/5.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"177\" data-original-width=\"546\" height=\"127\" src=\"https://1.bp.blogspot.com/-L3k3MYVPbSI/XTLfeXcgp7I/AAAAAAAABA0/8ljTrdRBXzQ9v6-5--zbFcLomlnqqp9egCEwYBhgL/s400/5.png\" width=\"400\" /></a></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">由圖可知，下一輪</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">每個人剛好都醒過來一次</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">的距離，與初始盤面的距離不一樣，所以會被認為有解，但實際上是無解的，把時間拉長後可以發現:&nbsp;</span><br /><br /><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://1.bp.blogspot.com/-83PJCfWZwvg/XTLfedmj4KI/AAAAAAAABA4/G4SIQTYhoAIw8D3SjkGsTF-NVoRcHc69wCEwYBhgL/s1600/6.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"178\" data-original-width=\"872\" height=\"130\" src=\"https://1.bp.blogspot.com/-83PJCfWZwvg/XTLfedmj4KI/AAAAAAAABA4/G4SIQTYhoAIw8D3SjkGsTF-NVoRcHc69wCEwYBhgL/s640/6.png\" width=\"640\" /></a></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">重複的狀態並不會在下一輪</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">每個人剛好都醒過來一次的時候發生，中間可能會再隔一輪兩輪等。因此，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">不能</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">等到下一輪每個人剛好都醒過來一次後判斷，而是要在一有人醒過來後，就去把現在的盤面與</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">與初始盤面做比較。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">PS.&nbsp;&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">筆者的方法可以更多的改進，靈感來自</span><a href=\"https://blog.csdn.net/wcr1996/article/details/40709365\" style=\"font-family: arial, helvetica, sans-serif; text-align: justify;\" target=\"_blank\"><span style=\"color: #3d85c6;\">文章 1</span></a><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">、</span><a href=\"https://blog.csdn.net/to_be_better/article/details/50096669\" style=\"font-family: arial, helvetica, sans-serif; text-align: justify;\" target=\"_blank\"><span style=\"color: #3d85c6;\">文章 2</span></a><br /><ul><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">不需要計算距離，每個學生的狀態就是距離，直接記下來就好。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">不需要先做出初始盤面再來計算距離，直接檢查每個學生現在的狀態，是不是跟輸入的初始狀態一樣就好。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">既然不需要做出初始盤面，那就以分鐘為主體，直接判斷在這個時間點，這些學生處於周期的哪個階段，如此一來，也就不需要 priority_queue 了。</span></li></ul><br /><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span></div><div style=\"text-align: justify;\"><br /><script src=\"https://gist.github.com/WindAzure/fc66b89646e36739c35e5f1542271af5.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/8382816951708656198/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/07/uva-12108.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/8382816951708656198"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/8382816951708656198"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/07/uva-12108.html",
                            "title": "UVa 12108"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "media$thumbnail": {
                        "xmlns$media": "http://search.yahoo.com/mrss/",
                        "url": "https://1.bp.blogspot.com/-Cx-AB5xdHLo/XTLJeVtlzlI/AAAAAAAAA_0/JoYGZubvnEMx2DvemLEGYlomzDw3XgbOwCEwYBhgL/s72-c/1.png",
                        "height": "72",
                        "width": "72"
                    },
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-4810115154517963477"
                    },
                    "published": {
                        "$t": "2019-06-11T00:14:00.000+08:00"
                    },
                    "updated": {
                        "$t": "2019-06-11T00:18:27.743+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "Docker"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "Docker on Windows ( Hello World )"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">花時間研究 docker 是上個月的事情 ( 2019/05 )，沒有即時記錄研究的過程是最大的問題，導致現在只能用回想的方式列出做了什麼事情。或許會有遺漏，但因為接下來還是有安排學習計畫，因此陸陸續續有什麼發現還是會更新上來。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">docker on Windows，一開始剛出來的時候，功能不是說很齊全。在 Windows 10 要手動打開&nbsp; hyper-V 的選項，讓它可以模擬出 Linux 的環境，才能去跑 container。但對於筆者來說，想要跑的 Process ( 不管是不是自己寫的 )，抑或是各種 Server，全部都是 Windows Base 的，能跑 Linux Base 的東西對筆者來說一點意義都沒有。( 或許那個時候有方法可以做到，再請讀者指教 )</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">直到 2018 年底附近， docker hub 上 Microsoft 出了屬於 Windows 的 Image，所以終於可以把需要的 Process/Server 做成 Image 了，就像是個非常小型的 Windows 一樣。目前 Image 有兩種 :</span><br /><br /><ul><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><a href=\"https://hub.docker.com/_/microsoft-windows-nanoserver\" target=\"_blank\"><span style=\"color: #3d85c6;\">Nano Server</span></a> : 以 MB 為單位，較輕量。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><a href=\"https://hub.docker.com/_/microsoft-windows-servercore\" target=\"_blank\"><span style=\"color: #3d85c6;\">Server Core</span></a> : 以 GB 為單位，很肥包山包海，系統的東西比較不怕沒裝到。</span></li></ul><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">在剛出的時候似乎還有第三種，但現在已經被 Microsoft 拿掉了，就不進行討論。除了這兩種類型的 Image 外，個別都還有個 Insider 的版本。從文件來看，似乎是要參加他們的測試計畫，然後抓下來才能用。用途筆者不清楚，但保守起見，目前還是用 Server Core 進行測試，等目的達到後，再來研究用 Nano Server 進行瘦身。在 pull 的時候，需要注意抓下來的 Image 版本和本機</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">的 Windows 10 是有<a href=\"https://docs.microsoft.com/zh-tw/virtualization/windowscontainers/deploy-containers/version-compatibility\" target=\"_blank\"><span style=\"color: #3d85c6;\">相容性限制</span></a>的，比如本機是 1809，就只能跑 1809、1803、1709，不能跑 1903 的 Image，想了解這些版號怎麼來的，請參考這篇<a href=\"https://blog.miniasp.com/post/2019/04/02/Understanding-Windows-OS-versioning\" target=\"_blank\"><span style=\"color: #3d85c6;\">文章</span></a>。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">如何啟動 Windows 的 Container 並做一個 Hello World 出來，可以參考 <a href=\"https://docs.microsoft.com/en-us/virtualization/windowscontainers/quick-start/quick-start-windows-10\" target=\"_blank\"><span style=\"color: #3d85c6;\">MSDN</span></a> 上的教學，抑或是這篇<a href=\"https://skychang.github.io/2017/01/06/Docker-Docker_for_Windows_10_First/\" target=\"_blank\"><span style=\"color: #3d85c6;\">文章</span></a>。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/4810115154517963477/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/06/docker-on-windows-hello-world.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/4810115154517963477"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/4810115154517963477"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/06/docker-on-windows-hello-world.html",
                            "title": "Docker on Windows ( Hello World )"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-456138223009883959"
                    },
                    "published": {
                        "$t": "2019-06-07T00:35:00.000+08:00"
                    },
                    "updated": {
                        "$t": "2019-06-09T22:51:28.874+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "Qt"
                        },
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "個人反省"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "個人反省，2019/05 - 2019/06 ( Qt Silent Install )"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">這段時間突然心血來潮，在研究 Docker。希望透過一些小實驗，看能不能把工作開發的軟體放到上面來跑，讓工作流程盡量的更順暢一些。過程中雜七雜八試了不少東西，雖然不一定能夠真的套到工作流程上，但是很多東西蠻有趣的，會再陸陸續續整理出來。由於公司是用 Qt 進行開發，因此也特別去研究 Qt 的 Silent Install。  </span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><a href=\"https://doc.qt.io/qtinstallerframework/ifw-overview.html\" target=\"_blank\"><span style=\"color: #3d85c6;\">Qt Installer Framework</span></a> 是 Qt 提供用來做 Installer 的套件，其中的 <a href=\"https://doc.qt.io/qtinstallerframework/noninteractive.html\" target=\"_blank\"><span style=\"color: #3d85c6;\">Controller Scripting</span></a>&nbsp;可以假裝是 User 並對 Installer 進行操作，意即自動幫忙按下一步，按到最後等他自己裝完，就是 Silent Install 了。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">把 installer 跟 qs 放一起，打開 cmd，下 <u>qt-opensource-windows-x86-5.11.1.exe --verbose --script install.qs</u>，他就會裝到結束了。</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">安裝完成後，要多按個任意鍵，因為他的 HANDLE 不會自己結束還回去。另外筆者的參考資料來自 <a href=\"https://stackoverflow.com/questions/25105269/silent-install-qt-run-installer-on-ubuntu-server/34032216#34032216\" target=\"_blank\"><span style=\"color: #3d85c6;\">stack overflow</span></a> 和<span style=\"color: #3d85c6;\"> <a href=\"https://forum.qt.io/topic/93706/unable-to-install-qt-5-10-1-non-interactively-in-docker-container\" target=\"_blank\"><span style=\"color: #3d85c6;\">Qt Forum</span></a></span>，多加了自己 debug 用的 console log，以及選擇安裝的內容不一樣。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">PS.&nbsp; --verbose 是叫它在裝的時候多吐一點訊息出來，讓我們方便 debug。另外由於是 online install，所以放在 docker 裡面跑時，需要特別注意 container 連不連的到外面。</span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><script src=\"https://gist.github.com/WindAzure/f3bed9e058cdc81eaa357414610c9125.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/456138223009883959/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/06/201905-201906-qt-silent-install.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/456138223009883959"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/456138223009883959"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/06/201905-201906-qt-silent-install.html",
                            "title": "個人反省，2019/05 - 2019/06 ( Qt Silent Install )"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-5589876683562296230"
                    },
                    "published": {
                        "$t": "2019-06-03T00:20:00.000+08:00"
                    },
                    "updated": {
                        "$t": "2019-06-09T22:50:15.498+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "Suitable for TDD ( ★★★☆☆ )"
                        },
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 509"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入一個模擬 RAID 結構的陣列，依據奇/偶同位的規則，將檢查碼與資料位元做 Exclusive OR 運算，檢查該硬碟是否合法。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">5 2 5</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">E</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">0001011111</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">0110111011</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">1011011111</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">1110101100</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">0010010111</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">3 2 5</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">E</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">0001111111</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">0111111011</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">xx11011111</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">3 5 1</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">O</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">11111</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">11xxx</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">x1111</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">0</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">Disk set 1 is valid, contents are: 6C7A79EDFC</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">Disk set 2 is invalid.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">Disk set 3 is valid, contents are: FFC</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">每組 RAID 結構的輸入有三個部分:</span></span><br /><br /><ul><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">第一部分 =&gt; 三個整數，分別代表硬碟數 ( d )、位元數 ( s )、區間數 ( b )。</span></span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">第二部分 =&gt; 使用奇同位還是偶同位檢查。</span></span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">第三部分 =&gt; 共有 d 筆的硬碟資料，分別是編號 0 ~ d-1 的硬碟資料，長度是 s x b。</span></span></li></ul><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">求該組 RAID 結構是否合法，如若合法，以十六進制輸出不含同位檢查碼的資料位元。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">輸入資料與題目描述的資料結構剛好是反轉的，可以把輸入轉成題目敘述的那樣比較好做 ( 迴圈看起來比較舒服 )；當然也可以不需要，依照個人喜好即可。需要特別注意題目只提到資料位元</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">Exclusive OR 後的結果</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">與檢查位元不一樣，以及兩個資料位元以上損毀時，才滿足非合法的情況。單純檢查位元損毀要假裝沒看到，算合法。&nbsp;</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">另外題目中的範例運算有一點讓人 confuse:&nbsp;</span>\\begin{aligned}0\\ ⊕\\ 0\\ ⊕\\ ?\\ ⊕\\ 1\\ ⊕\\ 0\\ =\\ 0\\end{aligned} 應該列成:\\begin{aligned}0\\ ⊕\\ ?\\ ⊕\\ 1\\ ⊕\\ 0\\ =\\ 0\\end{aligned} 由於使用的是偶同位檢查，因此左邊算出來的結果一定是 0，因此 ? = 1。( 在偶同位檢查的情況下，檢查位元為 0，即代表資料位元算出來的結果為 0 )<br /><br />PS.&nbsp; 從讀完題目後，很難想像到最後其實只要 Handle 一串字串和處理 parity 這個參數 ( 意即做出 <b>getExclusiveOrResult</b> )，然後再把該要組的東西寫出來就好。至少當下筆者沒有想到，也來來回回的改了好幾次，因此適合用 TDD 解題給 3 分。<br /><br /><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span></div><div style=\"text-align: justify;\"><br /><script src=\"https://gist.github.com/WindAzure/eb8a6d7ce963776a5233c34b92e73577.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/5589876683562296230/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/06/uva-509.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/5589876683562296230"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/5589876683562296230"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/06/uva-509.html",
                            "title": "UVa 509"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-2286681854520721645"
                    },
                    "published": {
                        "$t": "2019-05-03T23:39:00.000+08:00"
                    },
                    "updated": {
                        "$t": "2019-05-03T23:57:54.429+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "個人反省"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "個人反省，2009/01 - 2019/04 ( ACM 結論 )"
                    },
                    "content": {
                        "type": "html",
                        "$t": "在閱讀這篇之前的讀者，可以參考<a href=\"https://windazure.blogspot.com/2019/05/201201-201904.html\" target=\"_blank\"><span style=\"color: #3d85c6;\">前篇</span></a>與<a href=\"https://windazure.blogspot.com/2019/05/200901-201904-acm.html\" target=\"_blank\"><span style=\"color: #3d85c6;\">後篇</span></a>，理解筆者為什麼會有這樣的結論。那些身在困境的讀者們，我必須要說，你們不是孤單的。身為平凡人的前輩的我，繞了一圈的結論，或許可以幫助你們度過困境。<br /><br />這幾年我一直在想，一直在想，為什麼或多或少，我還是會沒來由的開始做在電腦前，解著題目，哼著歌，寫個 blog 做個紀錄? 那些年我到底做錯了什麼，才會變成這樣? 直到上個月，我突然想通了。我錯把努力就一定會有回報，當成是真理。反而，這是傲慢。怎麼保證那些成績比你好的人，沒有比你更努力? 我的勝負心隨著每場比賽的結果開始被磨平，最終失去了韌性然後折斷。開始以天分阿，資源分配不均什麼的，當成是自我滿足的藉口。打從一開始，我應該就要知道，我能夠有資格與這些人站在同一個殿堂底下，比一場光明正大的比賽，這就是驕傲，這是屬於我的榮耀。<br /><br />心態擺正之後，來討論一下技巧方面，有沒有哪些地方可以更好的，或許做了有不一樣的結果? 不管<a href=\"https://windazure.blogspot.com/2019/05/201201-201904.html\" target=\"_blank\"><span style=\"color: #3d85c6;\">前篇</span></a>還是<a href=\"https://windazure.blogspot.com/2019/05/200901-201904-acm.html\" target=\"_blank\"><span style=\"color: #3d85c6;\">後篇</span></a>，很明顯的都陷入了技術瓶頸，沒辦法完全吸收題解，或是第三人的 AC 做法，最後迷失了。現在想起來，好像要不迷失還真的有點困難。仙俠小說中，主角練功練到最後，都是要走自己的路，武功祕笈什麼的只能借鏡，互相印證，而不是照著練。頂尖的籃球運動員都有自己打球的風格、投籃的姿勢。可以參加其他上個世代的球星的籃球營，學習技術，但最後要拿來成為自己成長的養分。<br /><br />是，就算了解了要走出自己的路，但要怎麼走? 回歸到做題目，很多時候根本就不知道為什麼會有人能夠想到在這邊要用這個方法，就算當下我記住了，兩個月後我還是做不到。這個時候可以書店、圖書館，閱讀比較有學習脈絡的書，學習人家在什麼 Context 下，所用的分析方法、實作技巧背後的原因是什麼。遇到 WA，盡可能的堅持下去，試著慢慢修正自己的做法，讓它朝好的方向走。有時候做法整個都不是對的，沒關係再來一次。重要的是堅持 \"自己的\" 的做法，相信自己遲早有一天會是對的。雖然看起來有點抽象，甚至有可能不讓人能夠認同。沒關係，我也正在這條路上走，待我神功有成或是有所進境時，我會回過頭來檢討方法用的對不對，這也是我為什麼要寫 blog 的原因。<br /><br />最後是團隊，在某種程度上及早反應已無意願，或許結局不會那麼難看，但好像也不是一個最好的方法。因為當下我自己都不清楚我要的是什麼，正處於一個進退無路的狀態，更遑論要快刀斬亂麻。但即使如此，我依然可以盡可能及早向隊友們反應我當前的狀態，找他們談談自己的感覺。也許當下沒有緩解情緒的方法，但是在彼此都坦誠相見時，團隊的共鳴可以到另一個境界也說不定，而且也可以透過這個討論，調整團隊的訓練模式。現在想來，一周寫題隔一周討論的模式也可以進行調整。因為在這個模式下，大家都是先單兵作戰，最後再回來討論，但這個討論很常流於 AC 的人分享他的解法，其他人就算聽懂了也不一定是自己的東西。<br /><br />在工作上我們大量的使用 pair programming，我們相信兩個人一起寫 code 可以提升品質，也可以讓雙方都獲得一些東西。或許這個地方也可以借鏡一二，可以嚐試三人一起看這道題，都看懂之後，來個 triple programming，輪流執掌鍵盤，眼睛盯著大螢幕，遇到不懂成員想要幹嘛時，就叫停；抑或是覺得這地方這樣寫簡直是神來一筆，詢問當下的原因，在這場混鬥中獲得的東西可能更多也不一定。當然，triple programming 不一定能夠完全解決這些問題，可能套下去之後，又會衍伸新的問題。但我認為不管怎麼樣，應該都不會比什麼都沒試，團隊直接解散還來的好，而且彼此願意嚐試新的東西進行磨合，某種程度上彼此內心深處應該還是存有一絲希望才是。<br /><br />最後的最後的最後，我重新出發了，踏上追尋記憶中的那塊綠寶石、那片綠地，有著同樣困擾的讀者、迷茫的讀者、放棄的讀者，我們遇到的困難一定都不一樣，但在題目面前我們都是平等的，我們希望到達的地方，應該是一樣的。擺正心態、磨利武器，雖然不一定是戰場上最耀眼的人，但自己應該是自己的主角，共勉之。"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/2286681854520721645/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/05/200901-201904-acm_3.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/2286681854520721645"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/2286681854520721645"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/05/200901-201904-acm_3.html",
                            "title": "個人反省，2009/01 - 2019/04 ( ACM 結論 )"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-6033557599169534748"
                    },
                    "published": {
                        "$t": "2019-05-02T23:15:00.001+08:00"
                    },
                    "updated": {
                        "$t": "2019-05-02T23:20:10.986+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "個人反省"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "個人反省，2009/01 - 2019/04 ( ACM 後篇 )"
                    },
                    "content": {
                        "type": "html",
                        "$t": "上了大學後，由於多虧於高職時期的練習，大一程式設計課對我來說有壓倒性的優勢，我幾乎不需要任何的練習、讀書，就可以把所有課堂作業寫出來，期中期末考也不需要準備，就可以拿最高分，不知不覺我重回程式設計競賽的懷抱。我每個月開始參加 ITSA 線上賽，並找班上的有興趣的同學組隊，每周隊內分享題目，組織練習。每半年參加一次 ITSA 桂冠，每一年參加一次 NCPC、ACM-ICPC。<br /><br />現在回想起來，這段時間表面上風風火火，實際上卻是沉淪的開始。ITSA 線上賽能夠獨自破台，但 NCPC、ACM-ICPC 根本就連跟那些老牌隊伍掰掰手腕的資格都沒有，一次又一次的品嘗的以前的無力感。漸漸地，我開始懷疑自己只能做水題，遇到困難的題目，就看題解，得到了看似 AC 實際上是 WA 的結果。有段時間，透過網路認識的台大朋友協助，每個禮拜派題目讓我練習，隔一周再來檢討題目。雖然看起來討論有來有往，當下也覺得學習到什麼，但另一方面卻是一次又一次的打擊。有問題的地方越來越多，需要做出來所花的時間越來越長，我最後中止了這個活動，不再浪費彼此的時間。陷入瓶頸的我，覺得做了這麼多練習，但還是沒辦法達到想要的目標，最後放棄深度思考，在這看似華麗的長河中，載浮載沉。<br /><br />到了大二，有強力的新隊友加入，主導的棒子也逐漸的交付出去。看起來情況應該會好轉，畢竟有的好的隊友能夠從旁指導，理應當進步的很快速。情況有一度的好轉，雖然主力球員換了，但是綠葉能夠提供自己的意見，在該發揮的時候發揮，團隊慢慢的變厲害了，在 NCPC 上殺出了屬於我們的位置，雖然到舞台還有點距離，但似乎不再遙不可及。我以為我會再站起來，甚至起飛，可最後還是在一屆又一屆 ICPC 強風下，折斷了翅膀。認清現實的我，開始將力氣轉向軟體工程，學習怎麼樣做好軟體，多虧於系上充足的資源，從需求分析到實做到測試、開發流程、資料庫等，都有專門的課程能夠學習。大二的 OOP、大三的視窗程式設計，也因為當初準備工科賽的練習，讓我能夠以超出旁人數倍的速度吸收並成長。從這個軌道，我獲得了像是止痛藥的成就感，只是傷口一直在那裡，我以為會好，但沒有。<br /><br />止痛藥看似可以讓自己不痛，但其他人卻會因為這樣而受傷。我拿黃金般昂貴的暑假，去購買名為實習的商品，這項商品很昂貴，但是帶給我的成就感和因為歷練而大幅成長的能力，讓我忘記所有的痛。於是我更加的投入這一個軌道，與我原本想像的路線，漸行漸遠。最終在一次出國搶其他國家 ICPC 名額時，團隊奇異的平衡崩潰了。面對其他隊友指責的練習量太少，我無言以對。最後整個失敗收場，團隊也解散了。<br /><br />我斬斷所有的念想，不做夢了。為了累積更多的實務經驗，大四提前進入研究所實驗室，到新竹去體驗爆肝工程師，看魚肚白的天亮，頂著山峰般壓力前進。研究所時期，我修最重的課，壓榨自己的潛力，碩一的我，已經可以 solo 一個過半百的案子，談合約開規格擬計畫到實做最後驗收，甚至連分獎金老闆或多或少都要參考我的意見。從碩一開始我的薪水就已經頂天了，我很滿足，但同時我不知道我是不是真的滿足。"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/6033557599169534748/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/05/200901-201904-acm.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/6033557599169534748"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/6033557599169534748"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/05/200901-201904-acm.html",
                            "title": "個人反省，2009/01 - 2019/04 ( ACM 後篇 )"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-7556771814358738690"
                    },
                    "published": {
                        "$t": "2019-05-01T00:35:00.000+08:00"
                    },
                    "updated": {
                        "$t": "2019-05-01T01:08:06.014+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "個人反省"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "個人反省，2009/01 - 2019/04 ( ACM 前篇 )"
                    },
                    "content": {
                        "type": "html",
                        "$t": "仔細回想起來，寫程式這件事情，打從高職開始，到大學、研究所，我所有的求學階段所做的事情，都有他的身影，即使到現在出社會，依舊與他相伴。他始終都在那裡，對我不離不棄，但在這幾年中，我似乎未必當他是兄弟...<br /><br />我始終記得，剛開始用 zero judge 練習寫程式時，解了一題判斷是否是質數的題目。那道題目單純 loop 過 1 ~ sqrt 所有的數沒辦法 AC。那天晚上坐在電腦前，靈光一閃，想出了優化的方法，最後得到翠綠就像草地般的 AC。拿到那個 AC 的當下，就是我愛上寫程式的瞬間，一直到現在，我都還記得那天晚上因為太高興而睡不著的心情。從那以後，就開啟了我參加程式設計競賽的大門。<br /><br />在高職時期，我把所有的課餘時間都投了下去，下課後練習、放假練習、生病也練習，其他人在這個階段參加社團，期中考後看電影、逛街。但我不是，程式就是我最好的青春歲月，每天練習到 1, 2 點，隔天7點起床。到現在我還記得假日媽媽開車送我去學校練習時，在車上我真的有頭痛到想吐的感覺。不可否認，其中有一部分是因為能夠有另一個管道升學的關係，但我相信讓我繼續的動力，應該是那天就像綠寶石一樣翠綠的 AC，我無論如何都想再看見他一次，憑自己的力量。<br /><br />高一主要以 zero judge 為主，熟悉寫程式的邏輯、工具、方法。高二開始，為了升學，大部分的時間轉為投入準備工科賽的練習，即使如此，在學校的訓練時間結束後，回家還是有在寫 zero judge，為了能夠得到更多的 AC，慢慢開始看其他人的做法，看資料結構的書，學習更多的技巧。高職時期一共參加兩屆的 NPSC，其中一屆在學長的帶領下，有進 Final。但與其他隊伍的實力差距有如天塹，從結果來看，我的這些成就似乎不值一提，至少對於那時候的我來說是這樣。面對全台灣最厲害的高中生，人為刀俎我為魚肉，隨著比賽時間倒數，無力感在我心中種下名為妒忌的種子，也逐漸發芽。<br /><br />因為體系學制的關係，身為高職生的我，工科賽是唯一讓我能夠寫更多程式的路。無論如何我都必須拿下第一名，縱使粉身碎骨。只要能夠拿下，保送頂尖的科技大學就是板上錚錚的事實，這樣我就有近乎半年到一年完全空閒的時間，去追求更多的 AC。在這個過程中，北市賽、工科賽歷屆的考題我一共做過 5 輪。每個禮拜模擬賽一次，都可以在規定的時間內做出來，應屆的北市賽，在模擬賽的情況下，也有冠軍的水準。我犧牲了所有青春年華，帶著知識、鍵盤，挾著滿滿信心，踏上人生中最大比賽的征途。只是最後迎來的，不是歡聲雷動振臂拉弓，而是碎了一地的夢想，以及 \"那就回去讀書吧\" 充滿失望的安慰。<br /><br />我開始逃避我最愛的事物，放逐了幾個月，最後開始準備統測。或許也要歸功於那時候練就出來的毅力，專一專二的教科書，我記得寫過了 5 輪，課本讀了 10 遍應該也是有，最後我還是上了頂尖的科技大學。現在回想起來，至少當初為了升學的目的達到了，只不過走的路是我從沒想過的。在大學確定後的某個假日，不知道哪根筋不對的我，鼓起勇氣去撿那一地的碎片，想著能不能黏回去當初的樣子。顫抖的手指敲打著鍵盤，我不記得那天做過了什麼題目，只記得那血紅的鍵盤，以及再也回不去的雄心壯志。即使如此，每一條小小的迴圈、每一個變數、每一行程式碼，都在提醒著我，銘刻在靈魂中那天美好的光景以及對程式的熱愛。"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/7556771814358738690/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/05/201201-201904.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/7556771814358738690"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/7556771814358738690"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/05/201201-201904.html",
                            "title": "個人反省，2009/01 - 2019/04 ( ACM 前篇 )"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-417067843744556799"
                    },
                    "published": {
                        "$t": "2019-04-29T00:51:00.000+08:00"
                    },
                    "updated": {
                        "$t": "2019-06-03T00:22:24.119+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "Suitable for TDD ( ★★★★★ )"
                        },
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 508"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">在擁有各個字母與摩斯密碼的對應關係，以及可能的字典單字的前提下，輸入一連串的摩斯密碼，求可能對應的字典單字為何。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">A&nbsp; &nbsp; &nbsp;.-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">B&nbsp; &nbsp; &nbsp;-...</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">C&nbsp; &nbsp; &nbsp;-.-.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">D&nbsp; &nbsp; &nbsp;-..</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">E&nbsp; &nbsp; &nbsp;.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">F&nbsp; &nbsp; &nbsp;..-.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">G&nbsp; &nbsp; &nbsp;--.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">H&nbsp; &nbsp; &nbsp;....</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">I&nbsp; &nbsp; &nbsp;..</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">J&nbsp; &nbsp; &nbsp;.---</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">K&nbsp; &nbsp; &nbsp;-.-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">L&nbsp; &nbsp; &nbsp;.-..</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">M&nbsp; &nbsp; &nbsp;--</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">N&nbsp; &nbsp; &nbsp;-.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">O&nbsp; &nbsp; &nbsp;---</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">P&nbsp; &nbsp; &nbsp;.--.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">Q&nbsp; &nbsp; &nbsp;--.-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">R&nbsp; &nbsp; &nbsp;.-.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">S&nbsp; &nbsp; &nbsp;...</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">T&nbsp; &nbsp; &nbsp;-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">U&nbsp; &nbsp; &nbsp;..-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">V&nbsp; &nbsp; &nbsp;...-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">W&nbsp; &nbsp; &nbsp;.--</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">X&nbsp; &nbsp; &nbsp;-..-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">Y&nbsp; &nbsp; &nbsp;-.--</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">Z&nbsp; &nbsp; &nbsp;--..</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">0&nbsp; &nbsp; &nbsp;------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">1&nbsp; &nbsp; &nbsp;.-----</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">2&nbsp; &nbsp; &nbsp;..---</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">3&nbsp; &nbsp; &nbsp;...--</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">4&nbsp; &nbsp; &nbsp;....-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">5&nbsp; &nbsp; &nbsp;.....</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">6&nbsp; &nbsp; &nbsp;-....</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">7&nbsp; &nbsp; &nbsp;--...</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">8&nbsp; &nbsp; &nbsp;---..</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">9&nbsp; &nbsp; &nbsp;----.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">*</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AN</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">EARTHQUAKE</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">EAT</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">GOD</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">HATH</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">IM</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">READY</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">TO</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">WHAT</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">WROTH</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">*</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">.--.....--&nbsp; &nbsp; .....--....</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--.----..&nbsp; &nbsp; .--.-.----..</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">.--.....--&nbsp; &nbsp; .--.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">..-.-.-....--.-..-.--.-.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">..--&nbsp; &nbsp; &nbsp;.-...--..-.--</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">----&nbsp; &nbsp; ..--</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">*</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">WHAT</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">HATH</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">GOD</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">WROTH?</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">WHAT</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AN</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">EARTHQUAKE</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">EAT!</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">READY</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">TO</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">EAT!</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">筆者使用 string 進行處理，所以不在意字串長度的限制，使用字串的讀者需注意題目的字串長度限制。輸入分為三部份，每部份以</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">\"</span><b style=\"font-family: &quot;Courier New&quot;, Courier, monospace;\">*</b><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">\"</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">作為結尾，分別是字母與摩斯密碼的對應關係、字典單字、需要查詢的摩斯字母 :</span></span><br /><ul><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">第一部份，保證第一個出現的字一定是大寫的英文字母或是數字，接著是對應的摩斯密碼，兩者以空白隔開，具體個數未知，另外需注意當前輸入有可能是空行。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">第二部份，保證出現的字典單字 ( Context ) 是大寫英文字母或是數字，也需要處理</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">當前輸入有可能是空行。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">第三部份，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">需要查詢的摩斯字母以空白或是空行當作間隔，代表為一個問題，需要求得其可能字典單字為何。( 空白間隔與空行個數未知 )</span></li></ul><div style=\"text-align: justify;\">需根據若干條件而決定輸出答案 :</div><ul><li>若是只有一個字典單字的摩斯密碼，與查詢的摩斯密碼完全符合的話，輸出該字典單字。</li><li>若是有多個完全符合的字典單字，輸出字典序最小的字典單字，並加上\"<b>!</b>\"。原文中的 <b><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">If multiple context words match morse perfectly, then select the matching word with the fewest characters. If this still results in an ambiguous match, any of these matches may be displayed.</span></b> 是錯的，無視他。( 雖然有提到要最少單字數，勉強與字典序沾上邊，但是極其隱晦。)</li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">若沒有字典單字完全符合，選擇刪掉的摩斯字母或增加的摩斯字母最少的那個字典單字，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">若有兩個字典單字刪減量 / 增加量一樣，則輸出字典序最小的那個，輸出需加上 \"<b>?</b>\"。原文的&nbsp;</span><b><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">If multiple words in context match using these rules, any of these matches may be displayed.</span></b><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;是錯的，無視他。</span></li></ul><ol></ol><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">舉例來說，若有一字典單字的摩斯密碼是 </span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">..--</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">，欲查詢的摩斯密碼是 </span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">...-.-</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">，該字典單字一定不會是可能的字典單字。原因是字典單字的摩斯密碼與</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">欲查詢的摩斯密碼，必須是包含與被包含的關係。也就是說，滿足部份符合的關鍵，在於刪掉某一方的尾巴若干個摩斯密碼後，要與另外一方完全相等；反之也可以看成</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">，在某一方的尾巴</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">增加</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">若干個摩斯密碼後，要與另外一方完全相等，刪掉與增加對於不同的對象做操作剛好是相反的。</span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">..--</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;</span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">不管要塞什麼東西到尾巴，都不可能與</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;</span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">...-.-</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;</span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">相等，因為第三個字就不一樣了。在原文中的</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;</span><b><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">display the word from context that matches the longest prefix of morse, or has the fewest extra elements beyond those in morse.</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;</span></b></span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">有提到，但極其隱晦。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">PS.&nbsp; 題目的輸出之所以不是 IM 而是 EAT，是因為 EAT 的字典序比 IM 還小。另外在 uDebug 的第一道測試資料是錯的，以下是測試資料及其輸出。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">uDebug 測試資料 :</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">A -</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">B .</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">C -.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">D .-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\"><br /></span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">*</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\"><br /></span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AA</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">BB</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">C</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">D</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AB</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">BA</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\"><br /></span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">*</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\"><br /></span><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">-..--</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">.-.-.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">.....</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">-----</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">-.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">-..</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">...-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">.-.-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">..</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">.-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">-.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">...</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">..-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">.-.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">-..</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">.--</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">-.-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">---</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">.-.-</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">-.-.</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\"><br /></span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">*</span><br /><div><br /></div><div>正確輸出 :</div><div><br /></div><div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AB?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">BA?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">BB?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AA?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AB!</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AB?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">BB?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">BA?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">BA?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AA?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">BB</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AA</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">BA!</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AB!</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">BB?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">BB?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">BA?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AB?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">BA?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AB?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AA?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AA?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">BA?</span></div><div><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">AB?</span></div></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">這題要揣摩出題目的意思比較難，實作上並沒有什麼特別困難的地方。做出字典序的排序，可以使用 map，直接把 string 當成 key 丟進去，最後 iterate 去尋訪，就是字典序了。當然也可以使用 vector 再加上 sort 先整理過一次。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">PS. 除了每次都尋訪過一次所有字典的單字外，還可以先</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">把相同 prefix 的單字整理出來。每次要尋訪的先比左邊的整條行，抓到符合的 prefix 後，再尋找相符的列元素，簡單來說就是先找直的再找橫的。這樣的作法雖然在最差的狀況還是要找遍所有的字典單字，但在字典單字有很大的一部分都是相同 prefix 的情況下，可以有所節省。 <span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span></span><br /><div class=\"separator\" style=\"clear: both; text-align: center;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><a href=\"https://2.bp.blogspot.com/-mVkmEQcfUng/XMcU2Usxm8I/AAAAAAAAA98/Rt-H0eNbJ9cSzkeFd39SEzxR3-GRcNEvgCLcBGAs/s1600/%25E5%259C%2596%25E7%2589%25871.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"981\" data-original-width=\"860\" height=\"400\" src=\"https://2.bp.blogspot.com/-mVkmEQcfUng/XMcU2Usxm8I/AAAAAAAAA98/Rt-H0eNbJ9cSzkeFd39SEzxR3-GRcNEvgCLcBGAs/s400/%25E5%259C%2596%25E7%2589%25871.png\" width=\"350\" /></a></span></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"></span><br /><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span></div><div style=\"text-align: justify;\"><br /><script src=\"https://gist.github.com/WindAzure/189b6b6733b66d552245765039efcf82.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/417067843744556799/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/04/uva-508.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/417067843744556799"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/417067843744556799"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/04/uva-508.html",
                            "title": "UVa 508"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "media$thumbnail": {
                        "xmlns$media": "http://search.yahoo.com/mrss/",
                        "url": "https://2.bp.blogspot.com/-mVkmEQcfUng/XMcU2Usxm8I/AAAAAAAAA98/Rt-H0eNbJ9cSzkeFd39SEzxR3-GRcNEvgCLcBGAs/s72-c/%25E5%259C%2596%25E7%2589%25871.png",
                        "height": "72",
                        "width": "72"
                    },
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-3982819849287596888"
                    },
                    "published": {
                        "$t": "2019-04-01T00:32:00.001+08:00"
                    },
                    "updated": {
                        "$t": "2019-04-01T00:34:00.092+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "小技巧"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "字串分割 ( C++ regex )"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br />一直以來，當需要解析測試資料複雜的字串時，都習慣用 strotok 去解決。 <br /><br /><div style=\"text-align: justify;\"><script src=\"https://gist.github.com/WindAzure/32a8cd84bd644a77f24fb94b0821a67d.js\"></script></div>這個方法沒有說不好，反正想要什麼字元當作分界，就在 strotok 的第二個參數加上去。而且處理輸入的時候，理當知道現在的 temp 在這一次要轉成整數還是浮點數給後面的人做事。但心血來潮，花了一點時間找有沒有更漂亮的解法，而 C++ 11 出的 regex ( 正規表示式 ) 可以幫我們解決這個問題。 <br /><br /><div style=\"text-align: justify;\"><script src=\"https://gist.github.com/WindAzure/72309137d292c2398087d73125d86607.js\"></script></div>透過 copy 把 sregex_token_iterator 找到的滿足使用的正規表示式的答案，放到 result 這個 vector 裡，也可以透過 ostream_iterator 直接把答案接到 cout 去。如果看不太懂 copy 在做什麼，也可以用 for 走一輪 iterator，抓 *iterator 出來。<br /><br />PS.&nbsp; sregex_token_iterator 亦可反向選擇抓不 match 的結果出來，根據<a href=\"http://www.cplusplus.com/reference/regex/regex_token_iterator/regex_token_iterator/\" target=\"_blank\"><span style=\"color: #3d85c6;\">文件</span></a>，第四個參數 submatch 設成 -1，就是把不 match 的結果全部挑出來。"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/3982819849287596888/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/04/c-regex.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/3982819849287596888"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/3982819849287596888"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/04/c-regex.html",
                            "title": "字串分割 ( C++ regex )"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-4261333270189628600"
                    },
                    "published": {
                        "$t": "2019-03-31T23:42:00.001+08:00"
                    },
                    "updated": {
                        "$t": "2019-06-03T00:22:58.716+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "Suitable for TDD ( ★★★★★ )"
                        },
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 1590"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入一連串的 IP 位址，求一個最小能夠包覆所有 IP 的 IP，以及其使用的子網路遮罩。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">3</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">194.85.160.177</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">194.85.160.183</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">194.85.160.178</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">194.85.160.176</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">255.255.255.248</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">在這組測試資料中，194.85.160.177 最小，194.85.160.183 最大，兩者的二進制如下:</span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">\\begin{aligned}194.85.160.177 = 11000010 | 01010101 | 10100000 | 10110{\\color{Red}{001}} \\end{aligned}</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">\\begin{aligned}194.85.160.183 = 11000010 | 01010101 | 10100000 | 10110{\\color{Red}{111}} \\end{aligned}</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">觀察這兩組二進制的數字，前 29 位數都是一樣的。</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">去除右邊三個不相同的位元後，則為&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">\\(11000010 | 01010101 | 10100000 | 10110000\\)，還原成十進制就是&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><u>194.85.160.176</u>。</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">因為左邊數來 29 個位數都一樣，故子網路遮罩為 29 個 1 組成， \\(11111111 | 11111111 | 11111111 |11111000\\) ，還原成十進制就是&nbsp;</span></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><u>255.255.255.248</u>。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">因為一組 IP 資訊是 32 位元，剛好可以用一個 unsigned int 來儲存。先透過 XOR 計算子網路遮罩 ( XOR 特性是相同為零，不同為一，剛好可以從 MSB 開始把相同的位元化簡成零，只留下從 LSB 開始的不相同的位元數 )，再把子網路遮罩與最大或最小 IP 進行 AND 運算，就可以得到題目所要求的，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><u>一個最小能夠包覆所有 IP 的 IP</u></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">。</span><br /><br /><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span></div><div style=\"text-align: justify;\"><br /><script src=\"https://gist.github.com/WindAzure/7048736fafcb2e169f5cc3714a1c027c.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/4261333270189628600/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/03/uva-1590.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/4261333270189628600"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/4261333270189628600"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/03/uva-1590.html",
                            "title": "UVa 1590"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-6850863664101239686"
                    },
                    "published": {
                        "$t": "2019-03-24T23:56:00.001+08:00"
                    },
                    "updated": {
                        "$t": "2019-06-03T00:23:09.054+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "Suitable for TDD ( ★★★★★ )"
                        },
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 253"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入兩個骰子上面的面，判斷兩骰子是否一致。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">rbgggrrggbgr</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">rrrbbbrrbbbr</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">rbgrbgrrrrrg</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">TRUE</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">FALSE</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">FALSE</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入為一字串，前六個為骰子 A 的面，後六個為骰子 B 的面，字串的順序依照下圖貼在骰子上。</span><br /><br /><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://1.bp.blogspot.com/-6wi8zK2zDrE/XJetTyS7BYI/AAAAAAAAA80/IYQYNhO1AFoVPWL4USdgoITEAfd0lX4UgCLcBGAs/s1600/2.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"287\" data-original-width=\"321\" height=\"286\" src=\"https://1.bp.blogspot.com/-6wi8zK2zDrE/XJetTyS7BYI/AAAAAAAAA80/IYQYNhO1AFoVPWL4USdgoITEAfd0lX4UgCLcBGAs/s320/2.png\" width=\"320\" /></a></div><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">一個骰子轉，另一個不轉，把要轉的骰子每面都轉轉看，轉完後就判斷兩者是否一樣，即為解。以面 1 在上來說，其實只要轉動面 2, 4, 5, 3 這個平面四次 ( 也可以是三次，因為剛把面 1 轉上來的這次，和轉第四次的狀態是一樣的&nbsp; )，就可以把這個組合給轉完。接下來只要把每個面先轉到上面，再轉動剛剛的平面四次，就把所有的組合轉完了。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">以三維空間來看，骰子轉動方向如下圖所示 : ( 筆者這裡的 y, z 定義跟平常的三維空間剛好相反，這裡的 x 代表長，y 代表寬，z 代表深，而平常的三維空間則是長 (x) 寬 (y) 高 (</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">z)，但這並不影響接下來的操作，只要知道現在是轉哪邊就好了。)</span><br /><br /><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://2.bp.blogspot.com/-4Df3TmJFxCU/XJeiiUEVaAI/AAAAAAAAA8U/Yqcyrx_1FwI9oRZp6qXICmHxzPynMlvxQCLcBGAs/s1600/1.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"519\" data-original-width=\"608\" height=\"273\" src=\"https://2.bp.blogspot.com/-4Df3TmJFxCU/XJeiiUEVaAI/AAAAAAAAA8U/Yqcyrx_1FwI9oRZp6qXICmHxzPynMlvxQCLcBGAs/s320/1.jpg\" width=\"320\" /></a></div><div class=\"separator\" style=\"clear: both; text-align: center;\"></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">因此，剛剛提的轉動面 2, 4, 5, 3 的操作，其實可以看成 XZ 平面的轉動。把面 2, 6, 5 轉到上面的操作，可以看成 YZ 平面的轉動；把面 3, 4 轉到上面的操作，可以看成 XY 平面的轉動。把</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">面 2, 6, 5</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">&nbsp;轉到上面，其實只是轉 YZ 平面的次數不一樣而已，反之面 3, 4 亦是轉動 XY 平面的次數不一樣。</span><br /><br /><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span></div><div style=\"text-align: justify;\"><br /><script src=\"https://gist.github.com/WindAzure/1924ddc4c1a3cce0c7cc1b92f530a6e4.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/6850863664101239686/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/03/uva-253.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/6850863664101239686"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/6850863664101239686"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/03/uva-253.html",
                            "title": "UVa 253"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "media$thumbnail": {
                        "xmlns$media": "http://search.yahoo.com/mrss/",
                        "url": "https://1.bp.blogspot.com/-6wi8zK2zDrE/XJetTyS7BYI/AAAAAAAAA80/IYQYNhO1AFoVPWL4USdgoITEAfd0lX4UgCLcBGAs/s72-c/2.png",
                        "height": "72",
                        "width": "72"
                    },
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-7322041258943274766"
                    },
                    "published": {
                        "$t": "2019-03-24T00:49:00.000+08:00"
                    },
                    "updated": {
                        "$t": "2019-03-24T00:49:25.625+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "小技巧"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "cout 花招"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br />printf 定格式輸出時，可以在 <b>%型態</b> 動一些手腳，如 %3d 就是以三位數輸出，不足位補空白。以 cout 來說，則可以透過 cout.width(3) 設置下一次輸出的長度。其他相關的設定可以參考<a href=\"https://blog.csdn.net/why850901938/article/details/50545783\" target=\"_blank\"><span style=\"color: #3d85c6;\">這裡</span></a>。"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/7322041258943274766/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/03/cout.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/7322041258943274766"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/7322041258943274766"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/03/cout.html",
                            "title": "cout 花招"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-8770160967753459463"
                    },
                    "published": {
                        "$t": "2019-03-24T00:40:00.002+08:00"
                    },
                    "updated": {
                        "$t": "2019-03-25T00:28:28.802+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 220"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入一保證為有效輸入的黑白棋的盤面，求進行指定的操作後之盤面狀態。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">2</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">---WB---</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">---BW---</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">W</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">L</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">M35</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">L</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">Q</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">WWWWB---</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">WWWB----</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">WWB-----</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">WB------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">B</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">L</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">M25</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">L</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">Q</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">(3,5) (4,6) (5,3) (6,4)</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">Black - 1 White - 4</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">(3,4) (3,6) (5,6)</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">----W---</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">---WW---</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">---BW---</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">No legal move.</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">Black - 3 White - 12</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">(3,5)</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">WWWWB---</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">WWWWW---</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">WWB-----</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">WB------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><span style=\"font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;\">--------</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入黑白棋之盤面與先手為何，接下來有三種操作，分別為 List、Move、Quit。</span><br /><br /><ul><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">List 是列出當前輪到的玩家可以下的位置，意即落子後可以將對方吃掉的位置。輸出先以 Row 再以 Column 排，若當前玩家沒有可以下的位置，則輸出&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><b>No legal move.</b>。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">Move 則是當前的玩家下在指定的位置上，輸出盤面改變後的黑白子個數，並且下一次輪到對方落子。若是當前玩家並無可落子的地方，則自動切換至對方進行落子。( 輸入保證會有人一定可以下 )</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">Quit 是離開遊戲，列出當前盤面為何。</span></li></ul><br />PS.&nbsp; Move 後輸出的黑白子個數以三位數呈現，不足位補空白。輸入含有好幾組不同的起始盤面，以該盤面進行遊戲，輸出對應的操作結果，針對不同組的起始盤面，輸出以空行間隔。<br /><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">以每一個可以下的地方進行八方向的搜尋，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">配合當前是白棋還是黑棋下，判斷該方向是否有對手的棋子可以吃掉。若有才真的去吃，意即改變盤面，反之則跳過該方向。因為一個點可能會有很多的方向的棋子可以吃，所以吃完一路後，要問其他方向有沒有棋子可以吃。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">當然可以選擇另外一種做法，判斷可不可以吃的時候，把走過的路記下來，最後如果真的可以吃，那麼就把走過的路全部改成自己的顏色就好，可以參考這篇<a href=\"https://www.cnblogs.com/cumulonimbus/p/5375032.html\" target=\"_blank\"><span style=\"color: #3d85c6;\">文章</span></a>。</span><br /><br /><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span></div><div style=\"text-align: justify;\"><br /><script src=\"https://gist.github.com/WindAzure/b639e271dc92a4edc564ce072bb48e0c.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/8770160967753459463/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/03/uva-220.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/8770160967753459463"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/8770160967753459463"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/03/uva-220.html",
                            "title": "UVa 220"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-7159158828762363213"
                    },
                    "published": {
                        "$t": "2019-03-16T21:26:00.002+08:00"
                    },
                    "updated": {
                        "$t": "2019-03-25T00:28:35.656+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 201"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">在一個邊長為 n 的正方形上，有 \\(n^2\\) 個點所構成。輸入若干個水平和垂直且長度為一的邊，求這些邊可以組成多少個正方形?</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">4</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">16</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">H 1 1</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">H 1 3</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">H 2 1</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">H 2 2</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">H 2 3</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">H 3 2</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">H 4 2</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">H 4 3</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">V 1 1</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">V 2 1</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">V 2 2</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">V 2 3</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">V 3 2</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">V 4 1</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">V 4 2</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">V 4 3</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">2</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">3</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">H 1 1</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">H 2 1</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">V 2 1</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">Problem #1</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">2 square (s) of size 1</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">1 square (s) of size 2</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">**********************************</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">Problem #2</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">No completed squares can be found.</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入該正方形的邊長 n&nbsp;及 m 組邊，\\( 2 ≤n ≤ 9\\)，每一組邊內容為 ( A, B, C )。當 A = H 時，代表該邊為水平，且列 B 行 C 的點與列 B 行 C+1 的點相連；當 A = V 時，代表該邊為垂直，且列 C 行 B 與列 C+1 行 B 的點相連。把第一組測試資料轉換為圖形來看會是這樣 :</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><br /><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://3.bp.blogspot.com/-RYc0ebomXOA/XIzuX0aZC_I/AAAAAAAAA7o/u-LUNgF5UVc7v8Ud0NjoMAoi7jQdQz1lACLcBGAs/s1600/2.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"289\" data-original-width=\"363\" height=\"254\" src=\"https://3.bp.blogspot.com/-RYc0ebomXOA/XIzuX0aZC_I/AAAAAAAAA7o/u-LUNgF5UVc7v8Ud0NjoMAoi7jQdQz1lACLcBGAs/s320/2.png\" width=\"320\" /></a></div><div class=\"separator\" style=\"clear: both; text-align: center;\"></div><br />PS. 每組輸出中間由一空行、一星號行、一空行所組成。<br /><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">把二維座標進行壓縮，所有正方形裡的點改成以編號標記，紀錄哪些點連到哪些點，所以就可以將輸入的邊建成雙向圖。舉例來說， (H, 1, 1) 就會被建成點 1 可以連到點 2、點 2 可以連到點 1 的資料結構，且一個起點可以有多個終點。以測試資料為例，點 1 可以連到點 2，點 1 也可以連到點 5。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span>  <br /><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://3.bp.blogspot.com/-TRAOaxPNiPE/XIzv1ceofLI/AAAAAAAAA70/rkRH8MflzBIfjk6XotcWxughqgJDfXrYACLcBGAs/s1600/3.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"298\" data-original-width=\"318\" src=\"https://3.bp.blogspot.com/-TRAOaxPNiPE/XIzv1ceofLI/AAAAAAAAA70/rkRH8MflzBIfjk6XotcWxughqgJDfXrYACLcBGAs/s1600/3.png\" /></a></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">以編號 1 為起點，可以觀察到邊長為 1 的正方形分別由 1, 2, 6, 5, 1 所構成，把差值以數列列出來就會是 1, 4, -1, -4；以編號 1 為起點，邊長為 2 的正方形的差值數列為 1, 1, 4, 4, -1, -1, -4, -4。歸納可知，在這個盤面下，任何編號當起點，判斷是否存在各個邊長的正方形的手段，只要累加這個數列就可以知道了，這個累加的過程就等同於遍歷整張圖的手段。</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">因此，只要把每個編號當作起點，搭配與差值數列的運算，就可以得到構成正方形的下一個點的編號是什麼，只要回頭查這個編號的點有沒有跟上個點相連，就能得知現在的點能不能構成一個正方形。</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">原則上以 \\(n^2\\)個點為起點，找過邊長 1 - n 個正方形，就能夠知道每種邊長的正方形累計的數字為何，但其實還能夠再快一點，有一些剪枝的手段可以考慮進來:</span></div><div style=\"text-align: justify;\"><ol><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">最後一列的數字不需要被當起點找過，因為倒數第二列的數字當作起點的話，找到的正方形已經是邊長 1 了，是最小的正方形。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">同理，編號 3 的點當作起點，最多也只能找邊長 1 的正方形；編號 2 的點可以找邊長 1 和 2 的正方形。隨著起點的不同，能夠找的正方形的邊長也不同，不需要把邊長 1 到 4 的正方形都全找。</span></li></ol></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">PS. 差值數列會隨著給定的 n 改變</span></div><br /><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span></div><div style=\"text-align: justify;\"><br /><script src=\"https://gist.github.com/WindAzure/f025a24bec9c94818ec31884c08435e5.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/7159158828762363213/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/03/uva-201.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/7159158828762363213"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/7159158828762363213"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/03/uva-201.html",
                            "title": "UVa 201"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "media$thumbnail": {
                        "xmlns$media": "http://search.yahoo.com/mrss/",
                        "url": "https://3.bp.blogspot.com/-RYc0ebomXOA/XIzuX0aZC_I/AAAAAAAAA7o/u-LUNgF5UVc7v8Ud0NjoMAoi7jQdQz1lACLcBGAs/s72-c/2.png",
                        "height": "72",
                        "width": "72"
                    },
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-3388904766691956159"
                    },
                    "published": {
                        "$t": "2019-02-18T00:57:00.003+08:00"
                    },
                    "updated": {
                        "$t": "2019-02-18T00:58:54.764+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "個人反省"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "個人反省，2018/10 - 2019/03"
                    },
                    "content": {
                        "type": "html",
                        "$t": "在這段期間，主要的精力放在：<br /><ol><li>安排了與家人一起出國的行程。</li><li>開發了一個簡單的&nbsp;<a href=\"https://marketplace.visualstudio.com/items?itemName=WindAzure.deployplugintool\" target=\"_blank\"><span style=\"color: #3d85c6;\">VisualStudio Extension</span></a>，加快自己在工作上的開發流程。</li><li>製作了一支<span style=\"color: #3d85c6;\"><a href=\"https://www.youtube.com/watch?v=zaYQYHCpIMk\" target=\"_blank\"><span style=\"color: #3d85c6;\">籃球的影片</span></a>。</span></li></ol><br />為什麼會做這三件事?<br /><ul><li>這個旅行是自己從小便對自己的許下的承諾，這是夢想。</li><li>在沒有這個 Extension 之前，需要手動某個 Service 停掉，把編出來的東西丟進去，再打開 Service 進行驗證，這個過程不但重複而且還需要跟 Service 比手速，十分惱人；但在有了這個 Extension 之後，只需要按熱鍵就可以做好上面所有的事情，同時也支援使用者自定義熱鍵。每一次操作可以省下約 10 秒的時間，依據工作內容的不同，每天執行的次數不太一定。假設巔峰時期一天要做 10 次的話，一個人就可以省下 100 秒的時間，10 個人都用這個套件，一個月工作天 20 天，那就可以省下團隊近 5 個小時的時間。</li></ul><ul><li>一直以來都蠻喜歡打籃球的，每個禮拜的固定一天，下班後跟同事一起去投投球動一動。透過這支影片，也滿足了自己從小的籃球夢，哈哈。特別感謝擔任音效總監的同事，要滿足 A 導挑剔的耳朵。影片是由 Premiere 和 After Effect 做的，在製作的過程中，有兩個特別好用的網站推薦給大家。<a href=\"https://www.newcger.com/\" target=\"_blank\"><span style=\"color: #3d85c6;\">newcger</span></a> 的東西可以自行下載下來，但僅供試玩試看，<a href=\"https://elements.envato.com/\" target=\"_blank\"><span style=\"color: #3d85c6;\">envato element</span></a> 雖然需要付費，但是屬於吃到飽，十分划算。</li></ul><br />對於 ACM 的練習沒有做到，接下來會逐漸回歸練習。"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/3388904766691956159/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/02/201810-201903.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/3388904766691956159"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/3388904766691956159"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2019/02/201810-201903.html",
                            "title": "個人反省，2018/10 - 2019/03"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-6773784225118318072"
                    },
                    "published": {
                        "$t": "2018-12-08T23:39:00.003+08:00"
                    },
                    "updated": {
                        "$t": "2019-03-25T00:28:41.302+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 1589"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入一象棋的盤面，該盤面輸入完畢後，輪到黑棋走。判斷黑棋是否還有活路，如果有則輸出 YES，反之 NO。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">2 1 4</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">G 10 5</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">R 6 4</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">3 1 5</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">H 4 5</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">G 10 5</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">C 7 5</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">0 0 0</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">YES</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">NO</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入紅棋之總數及黑將軍座標 \\( N, R_b, C_b \\)，接下來有 N 筆輸入，每一筆輸入為紅棋的類型及座標 \\( T, R_r, C_r \\)，\\(T\\) 有可能是 G (&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">紅將軍</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;)、R&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">(&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">紅車</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;)</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">、C&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">(&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">紅</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">炮</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;)</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">、H&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">(&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">紅</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">馬</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;)</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">。</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">每組測試資料間隔一空行，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">\\(( N, R_b, C_b)&nbsp; = ( 0, 0, 0 )\\) 時，結束程式。</span><br /><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">判斷黑將軍移動後是否還有活路，如果有任一條活路則輸出 NO。由於需要考慮把紅方吃掉的情況，實作上要反覆的還原棋盤在吃之前的盤面。故將棋盤改成只記錄是否有障礙物，在黑將軍移動後，若是有任何紅棋與其座標一樣，則喪失攻擊能力 ( 形同被吃掉 )，如此一來就不需要在意要還原盤面了。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">如果輸入後的測試資料即為王見王，因為輪到黑方動，所以可以選擇直接把紅將軍吃掉，故輸出 NO。</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://4.bp.blogspot.com/-Dpt9GNgB0B8/XAvs1gSf0CI/AAAAAAAAA44/VBAYPlTHLeoV2FrBVyD0PcjJTHIZJurzwCLcBGAs/s1600/11.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"208\" data-original-width=\"530\" height=\"125\" src=\"https://4.bp.blogspot.com/-Dpt9GNgB0B8/XAvs1gSf0CI/AAAAAAAAA44/VBAYPlTHLeoV2FrBVyD0PcjJTHIZJurzwCLcBGAs/s320/11.png\" width=\"320\" /></a></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">另外這題的測試資料怪怪的，輸入紅棋類型時，T 前方有夾雜多餘的空白，而讓筆者原先的輸入讀到錯的資料導致 WA，</span>把讀字元改成讀字串就可以了。<br /><br /><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://4.bp.blogspot.com/-qxBbz9xpJx4/XAv1cvn38OI/AAAAAAAAA6c/9Z4IIVIph6guumk3V49KOLKb6mrBodY2gCLcBGAs/s1600/11.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"357\" data-original-width=\"877\" height=\"129\" src=\"https://4.bp.blogspot.com/-qxBbz9xpJx4/XAv1cvn38OI/AAAAAAAAA6c/9Z4IIVIph6guumk3V49KOLKb6mrBodY2gCLcBGAs/s320/11.png\" width=\"320\" /></a><a href=\"https://1.bp.blogspot.com/-BizSlopNXB4/XAv12iwdLjI/AAAAAAAAA6k/MG4_2UbbF702vzjHFKCj--wMa-p_n8TnACLcBGAs/s1600/11.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"359\" data-original-width=\"890\" height=\"128\" src=\"https://1.bp.blogspot.com/-BizSlopNXB4/XAv12iwdLjI/AAAAAAAAA6k/MG4_2UbbF702vzjHFKCj--wMa-p_n8TnACLcBGAs/s320/11.png\" width=\"320\" /></a></div><br /><div class=\"separator\" style=\"clear: both; text-align: center;\"></div><div class=\"separator\" style=\"clear: both; text-align: center;\"></div><div class=\"separator\" style=\"clear: both; text-align: center;\"></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">PS. scanf 雖然本來有跳過空白空行的功能，但是在輸入的格式使用字元時，就不會跳過 ( 字串則會跳過 )。</span><br /><br /><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span></div><div style=\"text-align: justify;\"><br /><script src=\"https://gist.github.com/WindAzure/29e439492cc6cdb9f82aa510ad7299f3.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/6773784225118318072/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/12/uva-1589.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/6773784225118318072"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/6773784225118318072"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/12/uva-1589.html",
                            "title": "UVa 1589"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "media$thumbnail": {
                        "xmlns$media": "http://search.yahoo.com/mrss/",
                        "url": "https://4.bp.blogspot.com/-Dpt9GNgB0B8/XAvs1gSf0CI/AAAAAAAAA44/VBAYPlTHLeoV2FrBVyD0PcjJTHIZJurzwCLcBGAs/s72-c/11.png",
                        "height": "72",
                        "width": "72"
                    },
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-7801333756353527054"
                    },
                    "published": {
                        "$t": "2018-10-27T13:22:00.000+08:00"
                    },
                    "updated": {
                        "$t": "2018-10-27T13:22:32.164+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "小技巧"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "memcpy 複製 array"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br />memcpy 可以把 array 的內容複製到另一個 array，但是如果 array 是二維的時候，會使用 loop 來呼叫 memcpy，複製的對象指定為該 array 的 row。<br />但是其實 memcpy 本質上就只認長度而已，因此直接把要複製的 array 的長度丟進去，它就會幫我們把整個 array 的資料貼過去了。<br /><br /><div class=\"separator\" style=\"clear: both; text-align: center;\"></div><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://3.bp.blogspot.com/-lj2slHlkMBc/W9P1nZEjdiI/AAAAAAAAA38/aac4gSpahzoFefBmpbRqgNe6gNRqJwV2gCLcBGAs/s1600/555.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"449\" data-original-width=\"293\" height=\"320\" src=\"https://3.bp.blogspot.com/-lj2slHlkMBc/W9P1nZEjdiI/AAAAAAAAA38/aac4gSpahzoFefBmpbRqgNe6gNRqJwV2gCLcBGAs/s320/555.png\" width=\"208\" /></a></div><div class=\"separator\" style=\"clear: both; text-align: justify;\"><br /></div><div class=\"separator\" style=\"clear: both; text-align: justify;\">透過 sizeof(bb)，我們就可以把 bb 的開頭到結尾一共 36 個 byte ，從 aa 的開頭往下貼。因此最後的 aa 就會是上圖所示。</div><div class=\"separator\" style=\"clear: both; text-align: justify;\"><br /></div><div class=\"separator\" style=\"clear: both; text-align: justify;\">PS. 使用的時候要特別注意目標的空間是不是足夠放現在要貼的長度，否則會發生 RE 的情況。</div><div class=\"separator\" style=\"clear: both; text-align: center;\"></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/7801333756353527054/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/10/memcpy-array.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/7801333756353527054"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/7801333756353527054"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/10/memcpy-array.html",
                            "title": "memcpy 複製 array"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "media$thumbnail": {
                        "xmlns$media": "http://search.yahoo.com/mrss/",
                        "url": "https://3.bp.blogspot.com/-lj2slHlkMBc/W9P1nZEjdiI/AAAAAAAAA38/aac4gSpahzoFefBmpbRqgNe6gNRqJwV2gCLcBGAs/s72-c/555.png",
                        "height": "72",
                        "width": "72"
                    },
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-8715111487546420157"
                    },
                    "published": {
                        "$t": "2018-10-27T11:38:00.001+08:00"
                    },
                    "updated": {
                        "$t": "2019-03-25T00:28:52.380+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 512"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">對二維陣列做一系列新增列及行、刪除列及行、交換 Element 的操作，給定一操作前的座標，求該座標的 Element 位於現在改變後的二維陣列之座標。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">7 9</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">5</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">DR 2 1 5</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">DC 4 3 6 7 9</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">IC 1 3</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">IR 2 2 4</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">EX 1 2 6 5</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">4</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">4 8</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">5 5</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">7 8</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">6 5</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">0 0</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">Spreadsheet #1</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">Cell data in (4,8) moved to (4,6)</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">Cell data in (5,5) GONE</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">Cell data in (7,8) moved to (7,6)</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">Cell data in (6,5) moved to (1,2)</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入此二維陣列的大小 ( R, C )，接下來是 n 個操作。DC 代表刪除行、DR 代表刪除列、IC 代表插入行、IR 代表插入列，每一個操作接續著 A，代表操作的對象的個數。舉例來說，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><u>DR 2 1 5</u>，代表現在要刪除列，刪除的對象一共有兩個，分別是要刪除第一列和第五列。</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><u>EX 1 2 6 5</u>，則是把第一列第二行和第六列第五行的 Element 做交換。</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">接續著 n 個操作的是 m 個 query，每個 query 由 ( r, c ) 組成，代表位於原陣列&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">r, c&nbsp; 上的 Element，現在在改變後的陣列的哪個位置。</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;</span><br /><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">PS.</span><br /><ul><li>此題測試資料之行列皆是 1-base。</li><li>插入的操作是插入一空白列 ( 行 ) 至目標列 ( 行 ) 的前面。</li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">不需處理</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">操作的對象列 ( 行 ) 超過該二維陣列的大小之情況。</span></li><li><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">每筆 Spreadsheet 間隔一空行。</span></li></ul><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">標準的模擬題，因為 std::vector 是每個 insert 或是 erase 都會改變大小，因此預先計算作用的對象在 insert/erase 後的位置，就可以放心地進行 insert/erase 的操作了。&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">( 因為要查詢變化後的座標為何，但是筆者又不想特地把兩個變數 call by reference 傳進 function，也不想要特地為此建一個 struct / class，故使用 std::tuple )</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">另外一種模擬的方式是將所有的操作先記錄起來，然後計算每個 query 套用這些操作後的座標為何。舉例來說，如果遇到的操作是 insert 一對象到該 Element 的前面，那對應的座標就加一；反之刪除也是，就把對應的座標減一，另外再判斷交換的情況即可。</span></div><br /><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span></div><div style=\"text-align: justify;\"><br /><script src=\"https://gist.github.com/WindAzure/46ad3eb3f953446c27e559b323fbe828.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/8715111487546420157/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/10/uva-512.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/8715111487546420157"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/8715111487546420157"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/10/uva-512.html",
                            "title": "UVa 512"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-4230205806203160248"
                    },
                    "published": {
                        "$t": "2018-10-07T16:17:00.003+08:00"
                    },
                    "updated": {
                        "$t": "2019-03-25T00:28:59.509+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 213"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">透過指定的加密方法，將輸入的明碼加密成密文，而後輸入一連串的密文，求解碼後轉換後的明文為何。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">TNM AEIOU</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">0010101100011</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">1010001001110110011</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">11000</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">$#**\\</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">0100000101101100011100101000</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">TAN ME</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">##*\\$</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入第一行為明文，加密方法為二進制，以測試資料 TNM AEIOU 來說，會得到下列之對應表 ( 不會有任何的字元對應到全部都是 1 的情況 ) :</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">T =&gt; 0</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">N =&gt; 00</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">M =&gt; 01</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">(空白) =&gt; 10&nbsp;</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">A =&gt; 000</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">E =&gt; 001</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">I =&gt; 010</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">O =&gt; 011</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">U =&gt; 100</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">之後輸入一連串的字串，代表著接下來要解碼的密文，遇到<u>換行要忽略</u>。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">前三個字元組成的二進制，轉成十進制後，代表接下來該密文在二進制裡要讀取的長度，若遇到該密文全部為 1 的情況，代表現階段的解碼結束，需重新讀取長度後再開始解碼。若是長度為 000 的時候，則結束解碼工作，下一次重新讀取明文再進行解碼。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">以測試資料來說 :</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">0010101100011</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">1010001001110110011</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">11000</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">001 =&gt; 讀取長度為 1 的二進制</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">0 =&gt; 對應的明碼為 T，因此輸出 <span style=\"color: #cc0000;\">T</span></span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">1 =&gt; 結束當前解碼</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">011 =&gt; 讀取長度為 3 的二進制</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">000 =&gt; 對應的明碼為 A，因此輸出 <span style=\"color: #cc0000;\">A</span></span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">111 =&gt; 結束當前解碼</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">010 =&gt; 讀取長度為 2 的二進制</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">00 =&gt; 對應的明碼為 N，因此輸出 <span style=\"color: #cc0000;\">N</span></span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">10 =&gt; 對應的明碼為空白，因此輸出<span style=\"color: #cc0000;\">空白</span></span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">01 =&gt; 對應的明碼為 M，因此輸出 <span style=\"color: #cc0000;\">M</span></span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">11 =&gt; 結束當前解碼</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">011 =&gt; 讀取長度為 3 的二進制</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">001 =&gt; 對應的明碼為 E，因此輸出 <span style=\"color: #cc0000;\">E</span></span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">111 =&gt; 結束當前解碼</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">000 =&gt; 結束解碼工作，進行新的解碼</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">讀取的二進制長度最多大是 7 位 ( 111 )，因此密文的對應表會建到 1111110。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">若明文中有重複字元出現的話，視為該字元有多種對應方式，即多組二進制的密文有可能對到同一個明文。</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">了解測試資料的運行模式後，在某種程度上也算解開了一半了，剩下的只是挑一個比較好一點的實作方式，讓自己能夠快速的做出來而已。</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">比較困難的地方有兩點 :</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">第一點是怎麼找一個好的輸入方式，能夠從一連串的字串中按部就班的提取正確的字元出來，與當初加密後的明文做比對。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">Ans1 : 由於字元是一個一個輸入的，筆者在做的時候順應了這種輸入方式，透過控制旗標變數和判斷當前已蒐集的字元數，花了不少時間在思考要怎麼樣在對的時候，抓到想要抓的東西，。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">第二點是，要怎麼樣建立跳過 1、11、111、1111、11111、111111、1111111 的表格。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">Ans2 : 筆者先建立 7 個位元的&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">list</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">1111110 ( 126 )</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;-</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;0000000 ( 0 )，然後把下半部的所有最高有效位元砍掉，這樣就是 6 個位元的長度結果，獲得 6 位元的結果後，再放入這個 list 裡面，重複動作直到獲得 1 個位元的結果。</span>透過這種直接砍掉 MSB 的方法，就不用每次重新計算二進制了，壞處就是實作上需要額外花很多時間在控制 list 的起始點的問題。<br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><u>可以再更好的地方 :</u></span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">筆者在做這題的時候，有想過把密文都轉成十進制下去算，這樣就不需要特地建一張很大然後是二進制的表格，在實作比對上也可以更為容易。但是中途想到字串 0、00、000、0000、00000、000000、000000，這些轉成十進制都是 0，沒有手段區別其中的差異，所以就放棄了。</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">其實這邊可以再堅持一下，只需要另外一個長度變數，來記錄現在這個十進制是幾位數的二進制轉換過來的，這樣就大功告成了。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入的方式也不需要順應字元是一個一個進來的模式，可以改成一次要多少個字元進來，反正輸入並不會故意少一個字元，然後將輸入後的結果轉成十進制，就可以配合剛剛的轉成十進制記錄明碼的表格了。</span></div><br /><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span></div><div style=\"text-align: justify;\"><br /><script src=\"https://gist.github.com/WindAzure/1f8e552b40cfa55d39ddb389b0cc7e3f.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/4230205806203160248/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/10/blog-post.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/4230205806203160248"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/4230205806203160248"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/10/blog-post.html",
                            "title": "UVa 213"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-8247130305234658307"
                    },
                    "published": {
                        "$t": "2018-10-01T23:11:00.001+08:00"
                    },
                    "updated": {
                        "$t": "2019-03-25T00:29:07.823+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 113"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">n 個人站成一圈，以逆時針由 1 ~ n 開始編號。官員 A 從編號 1 以逆時針開始數，數到第 k 個人 ( 假設答案為 C )；反之，官員 B 從編號 1 以順時針開始數，數到第 m 個人&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">( 假設答案為 D )</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">。輸出 C、D</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">，若 C、D 皆相等，則輸出一個即可。</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">C、D 皆以三位數輸出，不足位補空白。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">PS.&nbsp; 每一次輸出 C、D 後，要把這次的答案 C、D 從這個圈圈中拿掉。要特別注意的是，C、D 是同時從這個圈圈中被移除。意即在計算 D 的過程中，如果有數到 C 的話，則<u>不需要</u>跳過。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">10 4 3</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">0 0 0</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp; 4&nbsp; 8,&nbsp; 9&nbsp; 5,&nbsp; 3&nbsp; 1,&nbsp; 2&nbsp; 6, 10,&nbsp; 7</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">k, m &gt; 0, 0 &lt; N &lt; 20。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">以輸入資料來說，現在有 10 個人，以 1 - 10 逆時針編號。官員 A 要的是第四個人；官員 B 要的是第三個人。第一次從編號 1 的人開始數，所以官員 A 現在挑到的是編號 4 的人，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">官員 B 挑到的是編號 8 的人，4 不等於 8，因此輸出 4, 8。上一次官員 A 是挑到編號 4 的人，因此這次從編號 5 開始挑，一樣找第四個人；</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">上一次官員 B 是挑到編號 8 的人，因此這次從編號 7 開始挑，一樣找第三個人。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">官員 A 從編號 5 開始數 : 5, 6, 7, 9，因為 8&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">之前就被移除了，所以這次</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">被跳過，故這次挑的答案是 9。反之，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">官員 B 從編號 7 開始數 : 7, 6, 5，一共三個，第三個數到的人是 5，所以這次挑的答案是 5，依此類推…</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">這題是典型的模擬題，可以直接開二維陣列裡面放 1 - n，然後一個從頭迴另一個從尾巴迴，分別代表官員 A 跟 B，然後挑過的人插個旗子記綠一下，下次不要再挑就好。筆者認為這個方法有個最大的好處，那就是容易實作。因為在計算的時候，根本不需要在意下一個沒被移除的人起點是什麼，只需要記錄數到第幾個人就好 ( 反正插過旗子的人就跳過 )，因此就沒有起點和終點的概念，犯錯的機會也比較少。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">相反的，上述這個方法每一次都需要拜訪過每個人後，才知道有沒有它有沒有被插過旗子，某種程度上每一次搜尋都是線性。換個方式來看，我們改成紀錄<u>剩下哪些人還可以挑</u>，最多就是每次去拜訪過每個還能挑的人，而且這些會逐次遞減，所以就不必擔心每次都花線性的時間去拜訪了。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">由於</span>改成記錄剩下哪些人還可以挑，因此這個方法有兩個很大的缺點，第一個是</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">需要額外記錄上一次挑的人的位置，因為這個位置會是下一次的起點，然後需要處理從這些資料中移除 C、D 後，需要變更起點的問題。第二個問題其實是第一個問題的衍伸，為了做到動態變更起點和移除資料，程式碼變得複雜，且會有額外的要找到移除的對象的 Overhead ( 第 39&nbsp; 行 )，所以能不能賺回不用線性的時間還是個問題。至少就 N &lt;&nbsp; 20 這個範圍，筆者認為是不划算的。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">PS.&nbsp; 由於題目並未提到 k, m 一定比 N 小，所以輸入後最好做一下化簡 k, m 的動作，不然會有多餘的次數白找，舉例來說在 N = 10 的情況下，k = 1 和&nbsp; k = 11 都是挑到編號 1 的人，差別只是差在後者多找了 10 次而已。</span><br /><br /><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span></div><div style=\"text-align: justify;\"><br /><script src=\"https://gist.github.com/WindAzure/8b358d1a995f74758ca6254ddde77937.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/8247130305234658307/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/10/uva-113.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/8247130305234658307"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/8247130305234658307"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/10/uva-113.html",
                            "title": "UVa 113"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-1649912194821354330"
                    },
                    "published": {
                        "$t": "2018-09-17T23:48:00.002+08:00"
                    },
                    "updated": {
                        "$t": "2019-03-25T00:29:13.413+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 11809"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入十進制之數字 ( AeB )，代表該數字是 \\( A*10^B\\)，計算該十進制之數字轉為二進制後，最少所需要儲存的位元空間為多少。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">5.699141892149156e76</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">9.205357638345294e18</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">0e0</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">5 8</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">8 6</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">假設有一個二進位的數字為 \\(0.111111111_2*2^{111111_2}\\)，轉換為十進制後為 \\(0.998046875*2^{63}=920535763834529382410\\)，如果題目輸入&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">9.205357638345294e18，則答案為 8, 6 ( M, E )。因為&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">0.111111111 有 9 個 1 (有 9 個位元)，扣掉最左邊的 1 (最左邊的位元) 就是 8 個；</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">\\(2^{111111}\\)&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">有 6 個 1 ( 有 6 個位元 )，因此答案為 6，故答案 ( M, E )&nbsp; = ( 8, 6 )。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">0 &lt; A &lt; 10，B 的範圍題目未提到，但是題目有說&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">0 ≤&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">M</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;≤ 9，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">1 ≤&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">E</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;≤ 30，因此可以反推 B 不會太大，最多只有讓 E = 30 而已。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">PS. 題目有<strike>隱晦的</strike>提到， M 要扣一個 bit 是因為最左邊的 1 代表的權重是 0.5， Mantissa 最左邊的位元一定要是 1，才能保持 \\(\\frac{1}{2}≤m≤1\\)，因此這個 bit 可以不需要存，反正它都是 1。( 但是題目沒說 A 一定比 0.5 大，所以似乎有點小矛盾，但是先不管，當作有這回事，就減 1 吧。 )</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">由於 AeB 可以是一個很大的數字，例如 2.734479740168092e20201780，別懷疑，這是一個合法的輸入，答案是 ( 0, 26 )。筆者有想過用 double 來存，但是</span><a href=\"https://msdn.microsoft.com/zh-tw/library/s3f49ktz.aspx\" style=\"font-family: arial, helvetica, sans-serif; text-align: justify;\" target=\"_blank\"><span style=\"color: #3d85c6;\"> double 能表示的範圍&nbsp;</span></a><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">沒有辦法裝得下這個數字。而且最直接把一浮點數轉成二進制的方法，是把整數跟小數部分拆開，整數連除 10、小數連乘 2，最後收集答案。但是在這題小數部分有 15 位數，就算有個容器放得下，也要處理小數點在連乘的過程中，因為沒有辦法準確表達一數字，而導致該數字的小數數值遺失的問題。 ( 除非想要用大數下去算，但是這題秒數限制 1s，或許有點懸。)</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">其實 M, E 在某種程度上很像是二進制的科學記號，假設有個數字 \\(11.11_2\\)，那麼化簡之後就會是 \\(0.1111 * 2^2\\)，那麼 M 就是 4、E 就是 2 ( 因為 2 轉成二進制是 \\(10_2\\)，一共有 2 位數 )。那要怎麼樣才能快速地獲得這個十進制數字轉成二進制並化簡後，有幾個 2 呢? 這時候就輪到好幫手 Log 登場了。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">仔細想一下，如果給你一個十進制的數字 X，那要怎麼樣得到他是幾位數的數字? 很明顯的直接 \\(log_{10}{X}\\) 就是答案了，或許有讀者會好奇為什麼只要丟 log 就能知道位數? 其實可以換個方向想，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">\\(log_{10}{X}\\) 是在求 10 的<u>幾次方</u>會等於 X，也就是說有幾個 10 會等於 X，一個 10 代表一位數，那不就達到我們想要求的目標了?</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">相同的，現在要求這個數字在二進位時有幾個 2 堆出來，因此&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">\\(log_{2}{AeB}\\)</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;即為所求。舉例來說， \\(log_{2}{5.699141892149156e76} = 254.977280 \\)，因此有 255 個 2，255 轉成二進制有 8 位數，即為 E。</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">現在</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">知道</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;2 的個數有幾個了，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">我們</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">以 PE 來代替。( 這邊要特別注意，PE 是 2 的個數，E 是 PE 在二進制有幾位數) 那也就是說，在知道 PE 的情況下，如何求得 M? 先回到題目，用數學的方式列一下現在要求的目標，假設 AeB =&nbsp;9205357638345293824，於是可以得到下列的式子。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">\\begin{aligned}K*2^{63}&amp;=9205357638345293824\\\\\\\\K &amp;= \\frac{9205357638345293824}{2^{63}}\\\\\\\\K &amp;= 0.998046875\\end{aligned}</span>把 0.998046875 轉成二進制後，一共有 9 位數 \\(0.111111111_2\\)&nbsp;，減掉先前敘述說的 1 個位元後，是 8 位數，即 M = 8。但是 AeB 和 \\(2^{PE}\\) 都可能很大，單單 int 或是 double 是放不下的，所以沒辦法直接硬把 K 算出來。換個角度想，假設事先就準備好所有 K 的可能性，以及對應的位數 M ( 反正題目說&nbsp;<span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">0 ≤&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">M</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp;≤ 9</span>&nbsp;)，那麼有沒有機會算出哪個 M 才是現在的答案? 回到剛剛的式子 :<br />\\begin{aligned}K &amp;= \\frac{9205357638345293824}{2^{63}}\\\\\\\\K &amp;= \\frac{AeB}{2^{PE}}\\end{aligned}左右都 \\(log_{10}\\):\\begin{aligned}log_{10}{K} &amp;= log_{10}{\\frac{AeB}{2^{PE}}}\\\\\\\\log_{10}{K} &amp;= log_{10}{AeB} - log_{10}{2^{PE}}\\\\\\\\log_{10}{K} &amp;= log_{10}{A*10^B} - log_{10}{2^{PE}}\\\\\\\\log_{10}{K} &amp;= log_{10}{A}+log_{10}{10^B} - PElog_{10}{2}\\\\\\\\log_{10}{K} &amp;= log_{10}{A}+B-PE*log_{10}{2}\\end{aligned}因此，只要先把 \\(log_{10}{K}\\) 窮舉出來，把 A, B, PE 帶入上式後，與窮舉出來的 \\(log_{10}{K}\\) 相比，若是相等，則 K 對應的位數 M 即為所求。<br /><br />PS. 計算 PE 的時候，筆者沒有很詳細的展開算式，但是這邊需要把握 Log 的特性，可以化成為加、化除為減，因此就不需要硬是把整個數字算出來再丟到 Log 裡面。另外需要注意一點是，在計算 M 時，因為浮點數很難彼此相等，所以要特別注意精度問題，筆者這邊是差距在 0.00001 就算相等。<br /><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span></div><div style=\"text-align: justify;\"><br /><script src=\"https://gist.github.com/WindAzure/d251a236b465ac42812e0da954c1bb57.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/1649912194821354330/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/09/uva-11809.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/1649912194821354330"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/1649912194821354330"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/09/uva-11809.html",
                            "title": "UVa 11809"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-2671682409379308191"
                    },
                    "published": {
                        "$t": "2018-09-09T14:48:00.001+08:00"
                    },
                    "updated": {
                        "$t": "2019-03-25T00:29:20.911+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 1587"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入 6 個矩形的長寬，判斷能否用這些矩形組成長方體。( 正方體也算 )</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">1345 2584</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">2584 683</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">2584 1345</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">683 1345</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">683 1345</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">2584 683</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">1234 4567</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">1234 4567</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">4567 4321</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">4322 4567</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">4321 1234</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">4321 1234</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">POSSIBLE</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">IMPOSSIBLE</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入為每個矩形之長寬 ( w, h )，</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">( 1 ≤ w,h ≤ 10000 )，6 個矩形為一組，輸出是否能組成長方體。</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">能組成長方體的矩形必定可以被分成三組相同尺寸的矩形，</span><span style=\"text-align: justify;\">就算是 6 面都是相同尺寸的矩形，也可以被分成三組相同尺寸的矩形。</span><span style=\"text-align: justify;\">因此，若是不能被分成 3 組的時候，那必定不能用這些矩形組成長方體。</span><br /><span style=\"text-align: justify;\"><br /></span> <span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">舉例來說：</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">1345, 2584</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">2584,&nbsp; &nbsp;683</span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">2584, 1345</span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp; 683, 1345</span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp; 683, 1345</span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">2584,&nbsp; &nbsp;683</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"></span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">可以分為：</span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">1345, 2584 x2</span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">2584,&nbsp; &nbsp;683 x2</span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">&nbsp; 683, 1345 x2</span></div><div style=\"text-align: justify;\"><br />接下來就可以專注在如何判斷三種相同尺寸的矩形能否組成長方體了。判斷能不能把矩形相接的準則是，拿一個矩形 A 的一邊 (W) 去與其他兩個矩形 B, C 做比較，找到一個有這個邊的矩形，如果這個矩形的 W 跟 A 的 W 一樣，那麼如果要組成長方體，第三面矩形必定要由 A 的 H 和 B 的 H 所組成。反之，這個矩形的 H 跟 A 的 W 一樣，那麼如果要組成長方體，第三面矩形必定要由 A 的 H 和 B 的 W 所組成。因為拿一面去跟人家接在一起了，那就一定要有個人把還沒接的邊給用掉。<br /><br />由於長方體上下一樣、左右一樣、前後一樣，因此只需要考慮三個面能不能接得起來的情況。我們不需要事先知道哪個矩形要當上面、右邊、前面，因為這些都是相對位置，可以透過翻轉而得到不同的結果，所以可以隨便從三組尺寸的矩形挑一組當上下、挑一組當左右、挑一組當前後。以下面為例：<br /><br /><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://2.bp.blogspot.com/-F6dXpQe0Ryo/W5TGZXlVaII/AAAAAAAAA28/wI7vq4w3tVIwk04axU1muBdtAkmyqh01QCLcBGAs/s1600/asdf.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"181\" data-original-width=\"393\" height=\"147\" src=\"https://2.bp.blogspot.com/-F6dXpQe0Ryo/W5TGZXlVaII/AAAAAAAAA28/wI7vq4w3tVIwk04axU1muBdtAkmyqh01QCLcBGAs/s320/asdf.png\" width=\"320\" /></a></div><div class=\"separator\" style=\"clear: both; text-align: center;\"></div><br />現在有一組被挑出來當作上面 ( 7, 5 )、一組當作右面 ( 5, 2 )、一組當前面 ( 7, 2 )，矩形 R 沒有人跟 T 的 W 一樣大，所以跳過。矩形 F 的 W 跟 T 的 W 一樣都是 7，因此第三面的矩形必定要是 ( 5, 2 ) 或是 ( 2, 5 ) 的組合。矩形 R 剛好是這個組合，因此這 6 面矩形能夠組成一長方體。<br /><br />PS. 這題其實可以從出現的組數個數下手，有興趣的讀者可以看<a href=\"https://www.cnblogs.com/hadis-yuki/p/4896858.html\" target=\"_blank\"><span style=\"color: #3d85c6;\">這裡</span></a>。<br /><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span></div></div><div style=\"text-align: justify;\"><br /><script src=\"https://gist.github.com/WindAzure/3764754bb71e025becf7a79a77cfaccd.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/2671682409379308191/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/09/uva-1587.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/2671682409379308191"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/2671682409379308191"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/09/uva-1587.html",
                            "title": "UVa 1587"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "media$thumbnail": {
                        "xmlns$media": "http://search.yahoo.com/mrss/",
                        "url": "https://2.bp.blogspot.com/-F6dXpQe0Ryo/W5TGZXlVaII/AAAAAAAAA28/wI7vq4w3tVIwk04axU1muBdtAkmyqh01QCLcBGAs/s72-c/asdf.png",
                        "height": "72",
                        "width": "72"
                    },
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-179996453223435166"
                    },
                    "published": {
                        "$t": "2018-09-08T00:25:00.000+08:00"
                    },
                    "updated": {
                        "$t": "2019-03-25T00:29:26.421+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 202"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入 a, b 兩數，輸出 \\(\\frac{a}{b}\\) 的結果。該數值以小數點呈現，並將其循環小數之部分用 <span style=\"color: #cc0000;\">()</span> 標記出來，同時顯示該循環小數之長度。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">76 25</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">5 43</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">1 397</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">76/25 = 3.04(0)</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">1 = number of digits in repeating cycle</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">5/43 = 0.(116279069767441860465)</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">21 = number of digits in repeating cycle</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">1/397 = 0.(00251889168765743073047858942065491183879093198992...)</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">99 = number of digits in repeating cycle</span><br /><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">a, b 皆為非負整數且不超過 3000，輸出數值之循環小數部分若超過 50 位數，則只需顯示 50 位數，50 位數之後的數值皆以 ... 代替。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><u>PS. 輸出解答後，需多顯示一行空行。</u></span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">這題計算小數點後的位數的方法來自<a href=\"https://windazure.blogspot.com/2018/08/nm-frac1n2-frac1n12-cdots-frac1m2-input.html\" target=\"_blank\"><span style=\"color: #3d85c6;\">分數化指定位數之小數</span></a>，只是多了需要計算左右括號的位置而已。將每次計算完結果 ( 取完餘數 ) 的記錄下來，就能夠知道現在這個餘數之前出現在哪個位置上。如果沒出現過，那就記下來現在的數值跟位置，然後往下算；如果出現過，只需要在出現過的位置插一個左括號進去，然後現在這個位置擺右括號，這樣就可以求得</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">以小數呈現</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">\\(\\frac{a}{b}\\) 的</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">完整</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">樣子了。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">得到完整的循環小數的樣貌後，剩下的問題就只剩下&nbsp;</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">...</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">&nbsp;應該要放在這個字串的哪個位置了。依照題目的原意&nbsp;</span><u style=\"font-family: arial, helvetica, sans-serif; text-align: justify;\">If the entire repeating cycle does not occur within the first 50 places, place a left parenthesis where the cycle begins — it will begin within the first 50 places — <span style=\"color: #cc0000;\">and place ‘...)’ after the 50th digit</span>.</u><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">&nbsp;因此 ... 是要放在以左括號為起點，往後第 51 位數上 ( 前 50 位數皆為數字 )。由於先前就能夠把左括號放到該放的位置上，那以它為起點，往後數第 51 個換成 ... 自然就不是難事了。</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">PS.&nbsp; 筆者一開始也在猶豫說是否會出現循環小數永遠的算不出來的情況，導致無限迴圈拿到 TLE，但是根據<a href=\"https://zh.wikipedia.org/wiki/%E6%9C%89%E7%90%86%E6%95%B0\" target=\"_blank\"><span style=\"color: #3d85c6;\">有理數</span></a>的定義，其必定為有限小數或是循環小數，因此就不用擔心無限迴圈的情況了。</span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span><br /><br /><script src=\"https://gist.github.com/WindAzure/187c466953b2219d1db53477bf2a9665.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/179996453223435166/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/09/uva-202.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/179996453223435166"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/179996453223435166"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/09/uva-202.html",
                            "title": "UVa 202"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                },
                {
                    "id": {
                        "$t": "tag:blogger.com,1999:blog-5383900323330797772.post-654603204379138675"
                    },
                    "published": {
                        "$t": "2018-09-06T00:09:00.001+08:00"
                    },
                    "updated": {
                        "$t": "2019-03-25T00:29:33.462+08:00"
                    },
                    "category": [
                        {
                            "scheme": "http://www.blogger.com/atom/ns#",
                            "term": "UVa"
                        }
                    ],
                    "title": {
                        "type": "text",
                        "$t": "UVa 455"
                    },
                    "content": {
                        "type": "html",
                        "$t": "<br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>題目大意 :</b></span></div><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">輸入一字串，解析能夠製作出該</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">字串的最小</span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">子字串長度為何。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Input :</span></b><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">1</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">HoHo</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-size: large;\">Output :</span></b><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">2</span><br /><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>測試資料說明 :</b></span></div><div style=\"text-align: justify;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">字串長度不超過 80，輸入的第一個數字 N，代表接下來有幾筆測試資料 ( 字串 )，接續在 N 後的為一空行。每筆字串彼此間隔一空行，輸出之解答彼此也要間隔一空行。</span><br /><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;\">能夠組成 HoHo 的子字串有 Ho 和 HoHo，Ho 較短長度只有 2，因此為解。</span><br /><br /><b style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\">解題策略 :</span></b></div><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\"><br /></span><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; text-align: justify;\">這題其實直接暴力下去也可以解，最多就把每個長度都試過一輪，就知道答案了。但是仔細想一下，每個長度都試過，那假設總長度是 100，現在拿 3 下去試，多出來的 1 怎麼辦? 根據題目要求，<u>子字串必能做成要求的樣子</u>，只要一有多當然不可能是解答。因此，就可以事先透過判斷現在拿的子字串長度是否是要求的字串的因數，就不用每個長度都試過了。</span><br /><div style=\"text-align: justify;\"><br /></div><div style=\"text-align: justify;\"><span style=\"font-family: inherit;\"><span style=\"font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif; font-size: large;\"><b>Code :</b></span></span><br /><br /><script src=\"https://gist.github.com/WindAzure/d0107b7bb2416d71ee0b62d96861e4a1.js\"></script></div>"
                    },
                    "link": [
                        {
                            "rel": "replies",
                            "type": "application/atom+xml",
                            "href": "https://windazure.blogspot.com/feeds/654603204379138675/comments/default",
                            "title": "張貼留言"
                        },
                        {
                            "rel": "replies",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/09/uva-455.html#comment-form",
                            "title": "0 個意見"
                        },
                        {
                            "rel": "edit",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/654603204379138675"
                        },
                        {
                            "rel": "self",
                            "type": "application/atom+xml",
                            "href": "https://www.blogger.com/feeds/5383900323330797772/posts/default/654603204379138675"
                        },
                        {
                            "rel": "alternate",
                            "type": "text/html",
                            "href": "https://windazure.blogspot.com/2018/09/uva-455.html",
                            "title": "UVa 455"
                        }
                    ],
                    "author": [
                        {
                            "name": {
                                "$t": "Azure"
                            },
                            "uri": {
                                "$t": "http://www.blogger.com/profile/01814232287067730332"
                            },
                            "email": {
                                "$t": "noreply@blogger.com"
                            },
                            "gd$image": {
                                "rel": "http://schemas.google.com/g/2005#thumbnail",
                                "width": "32",
                                "height": "32",
                                "src": "//2.bp.blogspot.com/-_ouiPYSeAVc/W3G2v4UXdFI/AAAAAAAAA0Y/BIvCjvDWyI8kX-NYxqmLhNVzENTgb9OhACK4BGAYYCw/s113/777.png"
                            }
                        }
                    ],
                    "thr$total": {
                        "$t": "0"
                    }
                }
            ]
        }
    };
 
    var result = parseBloggerData(bloggerData);
    console.log(JSON.stringify(result));
}