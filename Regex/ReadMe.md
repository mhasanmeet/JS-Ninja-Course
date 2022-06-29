
### Regex - Regular Expression

### Pattern 

text@text.com

regexr.com

g ---> global
i ---> case insensitive, default case sensitive
m ---> multiline
s ---> single line
u ---> unicode
y ---> sticky
, ---> many or mutiple

/character or number/ ---> Select Character or number for matching
. ---> any character
* ---> (Match 0 or more of preceding token)
? ---> (match 0 or 1 of preceding token)
+ ---> (match 1 or more of preceding token)
\. ---> (escaping with .)
() ---> grouping
(){number,} ---> match any group number
/ anything | anything / ---> or
/\d/i ---- /\d{5}i ----> Matching digit
/\D/gi ----> Do not match any digit
/\w/gi ----> word, number, _ matching
/\W/gi ----> Do not match word, number, _
/\s/gi ----> space, tabs, line break matching
/\S/gi ----> Do not match space, tabs, line break
/[]/gi -----> Range, Matching range
/[a-z]/gi ----> Matching range a to z
/[a-zA-Z0-9_]/gi ----> Matching range a to z, A to Z, 0 to 9 & _

/[a-zA-Z0-9_]{6}/gi
/[a-z0-9_]{3}/gi
/[A-Z_]{7}/gi
/[0-9_]{2}/gi
/[\w]{4}/gi  ----> Matching range flexible character and quantity

/[^\w]/gi ----> Not Word
/[\W]/gi ----> Word

/[^\D]/gi ----> not Digit 
/[0-9]/gi ----> 0 - 9 digit
/[\D]/gi ----> all Digit

/yy(xx)\2zz/gim ----> capturing group in middle of the word
/yy(xx)(mm)\1\2/gim ----> capturing multiple group in middle of the word
/xxx(mm)?yy/gi ----> optional grouping 
/XXX(?=gg)/gim ----> exact look like group matching
/xx(?!gg)/gim ----> select not exact look like group matching

/a.+b/im ----> select all total in between a and b 
/a.+?b/im ----> 

### email validation with Regex 
Problem Define: Start with character (word, number, underscore) with 1 or more. Then @ . Then domain name word with 1 or 10 charcater. We limiting domain name to 10 charcater from 1 to 10. Character will be word, number or dash(-). Then dot(.) . Then And then finally domain extension wit word of 1 or more chacter. 

### the email validating regex code here, 

/\w{2,}@\w{2,20}\.\w{2,10}/gim


### Bangladesh phone number validation with Regex 
Problem Define: Start with + character with optional. Then 88 country code with optional. Then 01 fixed dial number for all oprator. Then single digit number operator. Then 8 digit any number. 

### the phone number validating regex code here,

/\+?(88)?01\d\{8}/gim ----> all Bangladeshi phone number validating
/\+?(88)?01\[7-9]\{8}/gim ----> Specific operator number range Bangladeshi phone number validating
/\+?(88)?01\(3|7]\{8}/gim ----> Specific operator number OR way Bangladeshi phone number validating
/\+?(88)?01\([2-4]|7]\{8}/gim ----> others way with range and OR


## Regular Express Language specific

### JS offer regex method
    - search
    - test
    - match
    - exec
    


