import {loadHTMLFile} from "./common-func-for-tests.js";
import {TBL_TRACK_COLUMN, TABLE_NAME} from "../scripts/db-operations/constants/db-info.js";
import {TableProcessor} from "../scripts/db-operations/table-processors/table-processor.js";
import {HTML_ID, HTML_CLASS, CSS_PROPERTY, CSS_VALUE} from "../scripts/db-operations/constants/html-properties.js";

const expect = require("chai").expect;

describe(`GUI of querying DB data`, () => {
    //const file = "./scripts/db-operations/index.html";
    const file = "C:/Users/Joyce/Documents/GitRepo_HabitTracker/HabitTracker/scripts/db-operations/db-operations.html";
    let loadDoc;
    beforeEach(() => { loadDoc = loadHTMLFile(file) });
    
    it(`test jsdom`, () => {
        loadDoc.then(() => {
            console.log("loadDoc loaded");
            window.addEventListener("load", () => {
                console.log("window loaded");
                checkBeforeClickOnQueryTableTrack();
            }, false);
        });
    });
    
    /*it(`choose table "track", show:\n1. ${TBL_TRACK_COLUMN.userId}\n2. ${TBL_TRACK_COLUMN.habitId}\n3. ${TBL_TRACK_COLUMN.date}`, () => {
        loadDoc.then(() => {
            checkBeforeClickOnQueryTableTrack();
            console.log("pass checkBeforeClickOnQueryTableTrack()");
            
            const queryList = document.getElementById(HTML_ID.queryTableTrack);
            $(queryList).click();
            
            checkAfterClickOnQueryTableTrack();
            console.log("pass checkAfterClickOnQueryTableTrack()");
        });
    });*/
    
    function checkBeforeClickOnQueryTableTrack() {
        console.log("Enter checkBeforeClickOnQueryTableTrack()");
        const doms = Array.prototype.slice.call(document.getElementsByClassName(HTML_CLASS.queryForm));
        console.log("query-form length = " + doms.length);
        console.log("body = " + document.body.outerHTML);
        doms.forEach((dom) => {
            console.log("here 2");
            const style = window.getComputedStyle(dom, null);
            console.log("here 3");
            const display = style.getPropertyValue(CSS_PROPERTY.display);
            console.log("display = " + display);
            expect(display).to.eql(CSS_VALUE.none);
        })
    }
    
    function checkAfterClickOnQueryTableTrack() {
       
    }
})