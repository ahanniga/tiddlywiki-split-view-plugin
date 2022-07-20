/*\
title: $:/plugins/ahanniga/toggle-split-view.js
type: application/javascript
module-type: macro
Toggle a $:/tags/Stylesheet tag on a CSS tiddler
\*/
(function() {
    "use strict";
    exports.name = "toggle-split-view";
    exports.params = [{}];
    exports.run = function() {
        try {
					   if($tw.wiki.getTiddler("$:/plugins/ahanniga/storyriver/css").hasTag("$:/tags/Stylesheet")) {
						     $tw.rootWidget.invokeActionsByTag("$:/tags/action/unsplit");
				     } 
				     else { 
						     $tw.rootWidget.invokeActionsByTag("$:/tags/action/split");
				     }
        } catch (err) {
            console.error(err.stack);
        }
    };
})();