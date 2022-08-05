/*\
title: $:/plugins/ahanniga/toggle-split-view.js
type: application/javascript
module-type: macro
Toggle a $:/tags/Stylesheet tag on a CSS tiddler
\*/
(function () {
    "use strict";
    var numChanges = 0;
    exports.name = "toggle-split-view";
    exports.params = [{}];
    exports.run = function (a, b) {
        try {
            numChanges = $tw.saverHandler.numChanges;
            if ($tw.wiki.getTiddler("$:/plugins/ahanniga/storyriver/css").hasTag("$:/tags/Stylesheet")) {
                $tw.rootWidget.invokeActionsByTag("$:/tags/action/unsplit");
            }
            else {
                $tw.rootWidget.invokeActionsByTag("$:/tags/action/split");
            }
            setTimeout(function () {
                if (numChanges == 0) {
                    $tw.saverHandler.numChanges = 0;
                    $tw.saverHandler.updateDirtyStatus();
                }
            }, 0);
        } catch (err) {
            console.error(err.stack);
        }
    };
})();