/*    By how many ways we can access elements in the DOM and write about them in brief?
Ans:- There are 5 ways to access elements in the DOM they are-
      1] by Id:- (getElementBYId())  This method returns the elemnt that has ID attribute that is specified.
                 This method is the most common in the HTML DOM , and is used every where, every time you ahve to do manipulation.
                 And also used to get info , an element on your docs.
                 Returns 'null' if there is not the specified Id present.
                 An ID must be unique within the page. If more than one element of same ID present then it returns only the first ID.
                 ElementID takes String type argument.

      2] by class:- The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s). 
                    When called on the document object, the complete document is searched, including the root node.
                    You may also call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element with the given class name(s).
      
      3] by HTML Tag Name:- The tagName property returns the tag name of the element.
                            In HTML, the returned value of the tagName property is always in UPPERCASE.
                            This property is read-only.
      
      4] by CSS Selector:-The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
                          The querySelector() method only returns the first element that matches the specified selectors. To return all the matches, use the querySelectorAll() method instead.
                          If the selector matches an ID in document that is used several times (Note that an "id" should be unique within a page and should not be used more than once),
                          it returns the first matching element.
      
      
      5] by Object Collection:- In the HTML DOM, the Element object represents an HTML element, like P, DIV, A, TABLE, or any other HTML element.
                              DOM collections are accessed as properties of DOM objects such as the document object or a DOM node.
                              The document object has properties containing the images collection, links collection, forms collection and anchors collection.
                              These collections contain all the elements of the corresponding type on the page. */



function addBy(){
      var num1 = parseInt(document.getElementById("firstNumber").value);
      var num2 = parseInt(document.getElementById("secondNumber").value);
      var addition = num1+num2;
      console.log(addition);
      document.getElementById("result").outerHTML=addition;
}