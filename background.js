// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var notId = 0;

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({color: '#3aa757'}, function () {
        console.log("The color is green.");
    });


    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message) {
            chrome.notifications.create({
                type: "basic",
                title: "Basic Notification",
                message: request.message,
                iconUrl: chrome.runtime.getURL('/images/get_started128.png')
            }, function (notificationId) {
                console.log("Last error:", chrome.runtime.lastError);
            });
            sendResponse({result: "success"});
        }
        else
            sendResponse({result: "error"});
    });


