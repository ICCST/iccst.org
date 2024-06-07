/*
 * (c) 2024 Leibniz Institute of Plant Biochemistry
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
let currentPage = Number.MAX_SAFE_INTEGER;
let lightDeskCurrentImage = 0;
let lightDeskData = [ ];

function lightDesk(index, delta) {
    if (delta === 0) {
        lightDeskCurrentImage = index;
        $('#lightdeskImage').html("<img src='" + lightDeskData[index].image + "' />");
        $('#lightdeskCaption').html(lightDeskData[index].caption);
        $('#lightdesk').css('display', 'block');
    } else {
        let next = lightDeskCurrentImage + delta;
        if (next < 0) {
            next = lightDeskData.length - 1;
        }
        if (next >= lightDeskData.length) {
            next = 0;
        }
        lightDesk(next, 0);
    }
}

function setPage(index, delta, title) {
    let maxPage = pageNames.length - 1;
    if ((index >= 0) && (index < pageNames.length)) {
        currentPage = index;
    } 
    if ((delta > -2) && (delta < 2)) {
        currentPage = currentPage + delta;
    }
    if (currentPage <= 0) {
        currentPage = 0;
        $("#linkEarlier").addClass("disabledLink");
        $("#linkNewer").removeClass("disabledLink");
        $("#pinnedContent").html("");
    }  else if (currentPage >= maxPage) {
        currentPage = maxPage;
        $("#linkEarlier").removeClass("disabledLink");
        $("#linkNewer").addClass("disabledLink");
        $.get("messages/pinned_content.html", function (data, status) { 
            $("#pinnedContent").html(data);
        });
    } else {
        $("#linkEarlier").removeClass("disabledLink");
        $("#linkNewer").removeClass("disabledLink");
        $("#pinnedContent").html("");
    }

    $.get("messages/" + pageNames[currentPage], function (data, status) {
        $("#CONTENT").html(data);
    });
    window.history.pushState(currentPage, "iccst.org", "?" + currentPage);
}

$(document).ready(function() {
    let page = document.location.search;
    if (page === "") {
        page = pageNames.length - 1;
    } else {
        page = page.substring(1) - 0;
    }
    setPage(page, 0);
});
