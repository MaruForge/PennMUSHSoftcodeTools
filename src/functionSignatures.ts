import * as vscode from 'vscode';

export interface FunctionSignature {
  label: string;
  documentation?: string;
  params: string[];
}

export const functionSignatures: Record<string, FunctionSignature> = {
	if: {
		label: 'if(<condition>, <true expression>[, <false expression>])',
		documentation: 'Evaluates the <condition> and return <true expression> if the <condition> is true, or <false expression> (if provided) if the <condition> is false. Only the returned <expression> is evaluated.',
		params: ['condition', 'trueResult', 'falseResult?'],
	},
	ifelse: {
		label: 'ifelse(<condition>, <true expression>, <false expression>)',
		documentation: 'Evaluates the <condition> and return <true expression> if the <condition> is true, or <false expression> (if provided) if the <condition> is false. Only the returned <expression> is evaluated.',
		params: ['condition', 'trueResult', 'falseResult?'],
	},
	switch: {
		label: 'switch(<str>, <expr1>, <list1>[, ... , <exprN>, <listN>][, <default>])',
		documentation: 'Matches <string> against the <expr>essions, returning the corresponding <list>. If nothing is matched, the <default> is returned. switch() and case() return the <str> for the first matching <expr>, while switchall() and caseall() return the corresponding <list> for all <expr>s which match.',
		params: ['value', 'pattern1', 'result1', '...', 'default'],
	},
	switchall: {
		label: 'switchall(<str>, <expr1>, <list1>[, ... , <exprN>, <listN>][, <default>])',
		documentation: 'Matches <string> against the <expr>essions, returning the corresponding <list>. If nothing is matched, the <default> is returned. switch() and case() return the <str> for the first matching <expr>, while switchall() and caseall() return the corresponding <list> for all <expr>s which match.',
		params: ['value', 'pattern1', 'result1', '...', 'default'],
	},
	case: {
		label: 'case(<str>, <expr1>, <list1>[, ... , <exprN>, <listN>][, <default>])',
		documentation: 'Matches <string> against the <expr>essions, returning the corresponding <list>. If nothing is matched, the <default> is returned. switch() and case() return the <str> for the first matching <expr>, while switchall() and caseall() return the corresponding <list> for all <expr>s which match.',
		params: ['value', 'pattern1', 'result1', '...', 'default'],
	},
	caseall: {
		label: 'caseall(<str>, <expr1>, <list1>[, ... , <exprN>, <listN>][, <default>])',
		documentation: 'Matches <string> against the <expr>essions, returning the corresponding <list>. If nothing is matched, the <default> is returned. switch() and case() return the <str> for the first matching <expr>, while switchall() and caseall() return the corresponding <list> for all <expr>s which match.',
		params: ['value', 'pattern1', 'result1', '...', 'default'],
	},
	hasflag: {
		label: 'hasflag(<object>[/<attrib>], <flag>)',
		documentation: 'With no <attrib>, hasflag() returns 1 if <object> has the <flag> flag set. If <attrib> is specified, the attribute is checked for the <flag> attribute flag instead. If the flag is not present, 0 is returned. hasflag() will accept a full flag name ("Wizard") or a flag letter ("W"). You can check the flags of any object, whether you control them or not.',
		params: ['object', 'flag'],
	},
	add: {
		label: 'add(<number1>, <number2>[, ... , <numberN>])',
		documentation: 'Returns the sum of the given numbers.',
		params: ['x', 'y'],
	},
	sub: {
		label: 'sub(<number1>, <number>[, ... , <number>])',
		documentation: 'sub() subtracts <number> from <number1>. If more than one <number> argument is given, each is subtracted from the result of the previous subtraction in turn. The result of the final subtraction is returned.',
		params: ['x', 'y'],
	},
	mul: {
		label: 'mul(<number1>, <number2>[, ... , <numberN>])',
		documentation: 'Returns the product of some numbers.',
		params: ['x', 'y'],
	},
	div: {
		label: 'div(<number1>, <number2>[, ... , <numberN>])',
		documentation: 'Divides <number1> by <number2> (and, for each subsequent argument, divide the previous result by <numberN>) and return the final result.',
		params: ['x', 'y'],
	},
	fdiv: {
		label: 'fdiv(<number1>, <number2>[, ... , <numberN>])',
		documentation: 'fdiv() returns the floating-point quotient.',
		params: ['x', 'y'],
	},
	floordiv: {
		label: 'floordiv(<number1>, <number2>[, ... , <numberN>])',
		documentation: 'floordiv() returns the largest integer less than or equal to the quotient; for positive numbers, they are identical, but for negative numbers they may differ.',
		params: ['x', 'y'],
	},
	mod: {
		label: 'mod(<number>, <number>[, ..., <numberN>])',
		documentation: 'Returns the remainder of X divided by Y. Extra parameters can be added.',
		params: ['x', 'y'],
	},
	modulo: {
		label: 'modulo(<number>, <number>[, ..., <numberN>])',
		documentation: 'Returns the modulo of the given numbers (from calling floordiv() with the same arguments).',
		params: ['x', 'y'],
	},
	modulus: {
		label: 'modulus(<number>, <number>[, ..., <numberN>])',
		documentation: 'Returns the modulo of the given numbers (from calling floordiv() with the same arguments).',
		params: ['x', 'y'],
	},
	remainder: {
		label: 'remainder(<number>, <number>[, ..., <numberN>])',
		documentation: 'Returns the remainder of the integer division of the first number by the second (and subsequent) number(s) (ie, the remainder from calling div() with the same arguments).',
		params: ['x', 'y'],
	},
	eq: {
		label: 'eq(<number1>, <number2>[, ... , <numberN>])',
		documentation: 'Takes two or more <number>s, and returns 1 if they are all equal, and 0 otherwise.',
		params: ['x', 'y'],
	},
	neq: {
		label: 'neq(<number1>, <number2>[, ... , <numberN>])',
		documentation: 'Returns 0 if all the given <number>s are the same, and 1 otherwise. Basically the same as [not(eq(<number1>, <number2>[, ... , <numberN>]))] but more efficient.',
		params: ['x', 'y'],
	},
	lmath: {
		label: 'lmath(<op>, <list>[, <delim>])',
		documentation: 'This function performs generic math operations on <list>, returning the result. Each element of the list is treated as one argument to an operation, so that lmath(<op>, 1 2 3) is equivalent to <op>(1, 2, 3). Using @function, one can easily write ladd, lsub, etc as per TinyMUSH.',
		params: ['x', 'y'],
	},
	and: {
		label: 'and(<boolean1>, <boolean2>[, ... , <booleanN>])',
		documentation: 'Takes any number of boolean value, and returns 1 if all are true, and 0 otherwise. and() will always evaluate all its arguments (including side effects), while cand() stops evaluation after the first false argument.',
		params: ['x', 'y'],
	},
	cand: {
		label: 'cand(<boolean1>, <boolean2>[, ... , <booleanN>])',
		documentation: 'Stops evaluation after the first false argument. See and() for more details.',
		params: ['x', 'y'],
	},
	nand: {
		label: 'nand(<boolean1>[, ... , <booleanN>])',
		documentation: 'Returns 1 if at least one of the arguments are false, and 0 if all are true. nand() always evaluates all of its arguments.',
		params: ['x', 'y'],
	},
	ncand: {
		label: 'ncand(<boolean1>[, ... , <booleanN>])',
		documentation: 'Stops evaluating after the first false value. See nand() for more details.',
		params: ['x', 'y'],
	},
	or: {
		label: 'or(<boolean1>, <boolean2>[, ... , <booleanN>])',
		documentation: 'Takes a number of boolean values, and returns 1 if any of them are true, and 0 if all are false. or() always evaluates all of its arguments, while cor() stops evaluating as soon as one is true.',
		params: ['x', 'y'],
	},
	cor: {
		label: 'cor(<boolean1>, <boolean2>[, ... , <booleanN>])',
		documentation: 'Stops evaluating as soon as one is true. See or() for more details.',
		params: ['x', 'y'],
	},
	not: {
		label: 'not(<boolean>)',
		documentation: "Returns 1 if <boolean> is false, and 0 if it's true.",
		params: ['x'],
	},
	nor: {
		label: 'nor(<boolean1>[, ... , <booleanN>])',
		documentation: "Returns 1 if all arguments are false, and 0 if any are true. nor() always evaluates all arguments, while ncor() stops evaluating after the first true value.",
		params: ['x', 'y'],
	},
	ncor: {
		label: 'ncor(<boolean1>[, ... , <booleanN>])',
		documentation: "Stops evaluating after the first true value. See nor() for more details.",
		params: ['x', 'y'],
	},
	xor: {
		label: 'xor(<boolean1>, <boolean2>[, ... , <booleanN>])',
		documentation: "Takes two or more booleans and returns a 1 if one, and only one, of the inputs is equivalent to true(1).",
		params: ['x', 'y'],
	},
	words: {
		label: 'words(<list>[, <delimiter>])',
		documentation: "Returns the number of elements in <list>. Elements of <list> are separated by <delimiter>, which defaults to a space.",
		params: ['list, delimiter'],
	},
	strlen: {
		label: 'strlen(<string>)',
		documentation: "Returns the length of the string (the number of characters in it).",
		params: ['string'],
	},
	strfirstof: {
		label: 'strfirstof(<expr>[, ... , <exprN>], <default>)',
		documentation: "Returns the first <expr> which evaluates to a non-empty string (a string at least 1 character long). If all <expr>s evaluate empty, <default> is returned instead.",
		params: ['expression'],
	},
	strallof: {
		label: 'strallof(<expr>[, ... , <exprN>], <output separator>)',
		documentation: "Returns all <expr>s which evaluate to non-empty strings, with each expression separated by <output separator>.",
		params: ['expression', 'output separator'],
	},
	first: {
		label: 'first(<list>[, <delimiter>])',
		documentation: 'Returns the first element of a list.',
		params: ['list'],
	},
	before: {
		label: 'before(<string1>, <string2>)',
		documentation: "Returns the portion of <string1> that occurs before <string2>. If <string2> isn't in <string1>, <string1> is returned. This is case-sensitive.",
		params: ['string1', 'string2'],
	},
	after: {
		label: 'after(<string1>, <string2>)',
		documentation: "Returns the portion of <string1> that occurs after <string2>. If <string2> isn't in <string1>, the function returns nothing. This is case-sensitive.",
		params: ['string1', 'string2'],
	},
	rest: {
		label: 'rest(<list>[, <delimiter>])',
		documentation: "Returns a list minus its first element.",
		params: ['list'],
	},
	abs: {
		label: 'abs(<number>)',
		documentation: "Returns the absolute value of a number.",
		params: ['number'],
	},
	accent: {
		label: 'accent(<string>, <template>)',
		documentation: "The accent() function will return <string>, with characters in it possibly changed to accented ones according to <template>. Both arguments must be the same size.",
		params: ['string', 'template'],
	},
	accname: {
		label: 'accname(<object>)',
		documentation: "Returns the name of <object>, applying the object's @nameaccent, if any.",
		params: ['object'],
	},
	acos: {
		label: 'acos(<cosine>[, <angle type>])',
		documentation: "Returns the angle that has the given <cosine> (arc-cosine), with the angle expressed in the given <angle type>, or radians by default.",
		params: ['cosine', 'angle type'],
	},
	addrlog: {
		label: 'addrlog([count,], ip|hostname, <pattern>[, <output separator>)',
		documentation: "Searches the log of unique sites that have connected to the mush and returns a list of 'IPADDRESS HOSTNAME' pairs that match the given field with the given wildcard pattern, separated by <output separator>, which defaults to |. If 'count' is given, returns the total number of matches instead.",
		params: ['count', 'ip|hostname', 'pattern', 'output separator'],
	},
	alias: {
		label: 'alias(<object>[, <new alias>])',
		documentation: "Returns the first of <object>'s aliases. Note that, while any object can have an alias set, they are only meaningful for players and exits.",
		params: ['object', 'new alias'],
	},
	fullalias: {
		label: 'fullalias(<object>)',
		documentation: "Returns all the aliases set for <object>. Note that, while any object can have an alias set, they are only meaningful for players and exits.",
		params: ['object'],
	},
	align: {
		label: 'align(<widths>, <col>[, ... , <colN>[, <filler>[, <colsep>[, <rowsep>]]]])',
		documentation: `Creates columns of text, each column designated by <col> arguments. Each <col> is individually wrapped inside its own column, allowing for easy creation of book pages, newsletters, or the like. In lalign(), <colList> is a <delim>-separated list of the columns.

<widths> is a space-separated list of column widths. '10 10 10' for the widths argument specifies that there are 3 columns, each 10 spaces wide. You can alter the behavior of a column in multiple ways.

<filler> is a single character that, if given, is the character used to fill empty columns and remaining spaces. <colsep>, if given, is inserted between every column, on every row. <rowsep>, if given, is inserted between every line. By default, <filler> and <colsep> are a space, and <rowsep> is a newline.`,
		params: ['widths', 'col', 'filler', 'colsep', 'rowsep'],
	},
	lalign: {
		label: 'lalign(<widths>, <colList>[, <delim>[, <filler>[, <colsep>[, <rowsep>]]]])',
		documentation: `Creates columns of text, each column designated by <col> arguments. Each <col> is individually wrapped inside its own column, allowing for easy creation of book pages, newsletters, or the like. <colList> is a <delim>-separated list of the columns.

<widths> is a space-separated list of column widths. '10 10 10' for the widths argument specifies that there are 3 columns, each 10 spaces wide. You can alter the behavior of a column in multiple ways.

<filler> is a single character that, if given, is the character used to fill empty columns and remaining spaces. <colsep>, if given, is inserted between every column, on every row. <rowsep>, if given, is inserted between every line. By default, <filler> and <colsep> are a space, and <rowsep> is a newline.`,
		params: ['widths', 'col', 'filler', 'colsep', 'rowsep'],
	},
	allof: {
		label: 'allof(<expr>[, ... , <exprN>], <output separator>)',
		documentation: "Evaluates every <expr> argument (including side-effects) and returns the results of those which are true, in a list separated by <output separator>. The output separator argument is required, and can be a string of any length (including an empty string; use %b for a space).",
		params: ['expression', 'output separator'],
	},
	alphamax: {
		label: 'alphamax(<word>[, ... , <wordN>])',
		documentation: "Takes any number of <word> arguments, and returns the one which is lexicographically biggest. That is, the <word> would be last in alphabetical order.",
		params: ['word'],
	},
	alphamin: {
		label: 'alphamin(<word>[, ... , <wordN>])',
		documentation: "Takes any number of <word> arguments, and returns the one which is lexicographically smallest. That is, the word that would be first in alphabetical order.",
		params: ['word'],
	},
	andflags: {
		label: 'andflags(<object>, <string of flag letters>)',
		documentation: "Returns 1 if <object> has all of the given flags, and 0 if it does not. A ! before the flag means 'not flag'.",
		params: ['object', 'string of flag letters'],
	},
	andlflags: {
		label: 'andlflags(<object>, <list of flag names>)',
		documentation: "Takes a space-separated list of flag names. A ! before the flag means 'not flag'.",
		params: ['object', 'string of flag names'],
	},
	andlpowers: {
		label: 'andlpowers(<object>, <list of powers>)',
		documentation: `This function returns 1 if <object> has all the powers in a specified list, and 0 if it does not. The list is a space-separated list of power names. A '!' preceding a flag name means "not power".

Thus, ANDLPOWERS(me, no_quota no_pay) would return 1 if I was powered no_quota and no_pay. ANDLPOWERS(me, poll !guest) would return 1 if I had the poll power but not the guest power.

If there is a syntax error like a ! without a following flag, '#-1 INVALID POWER' is returned. Unknown powers are treated as being not set.`,
		params: ['object', 'string of power names'],
	},
	ansi: {
		label: 'ansi(<codes>[ ... <codesN>], <string>)',
		documentation: "This allows you to mark up a string using ANSI terminal effects, 16-color codes, and 256 XTERM colors (specified as color names or hex values).",
		params: ['codes', 'string'],
	},
	aposs: {
		label: 'aposs(<object>)',
		documentation: "Returns the absolute possessive pronoun - his/hers/its/theirs - for an object. The %a substitution returns the absolute possessive pronoun of the enactor.",
		params: ['object'],
	},
	art: {
		label: 'art(<string>)',
		documentation: 'This function returns the proper article, "a" or "an", based on whether or not <string> begins with a vowel.',
		params: ['string'],
	},
	asin: {
		label: 'asin(<sine>[, <angle type>])',
		documentation: "Returns the angle with the given <sine> (arc-sine), with the angle expressed in the given <angle type>, or radians by default.",
		params: ['sine', 'angle type'],
	},
	atan: {
		label: 'atan(<tangent>[, <angle type>])',
		documentation: "Returns the angle with the given <tangent> (arc-tangent), with the angle expressed in the given <angle type>, or radians by default.",
		params: ['tangent', 'angle type'],
	},
	atan2: {
		label: 'atan2(<number1>, <number2>[, <angle type>])',
		documentation: "atan2(x, y) is like atan(fdiv(x, y)), except y can be 0, and the signs of both arguments are used in determining the sign of the result. It is useful in converting between cartesian and polar coordinates.",
		params: ['number 1', 'number 2', 'angle type'],
	},
	atrlock: {
		label: 'atrlock(<object>/<attrib>[, [on|off]])',
		documentation: `When given a single <object>/<attribute> pair as an argument, returns 1 if the attribute is locked, 0 if unlocked, and #-1 if the attribute doesn't exist or can't be read by the function's caller.

When given a second argument of "on" (or "off"), attempts to lock (or unlock) the specified attribute, as per @atrlock.`,
		params: ['object/attribute', 'on|off'],
	},
	attrib_set: {
		label: 'attrib_set(<object>/<attrib>[, <value>])',
		documentation: `Sets or clears an attribute. With a <value>, it sets the attribute, without one, it clears the attribute. This is an easier-to-read replacement for the old set(<object>, <attrib>:<value>) notation, and a less destructive replacement for wipe() that won't destroy entire attribute trees in one shot.

If there is a second argument, then attrib_set() will create an attribute, even if the second argument is empty (in which case attrib_set() will create an empty attribute). If the empty_attrs configuration option is off, the attribute will be set to a single space. This means that attrib_set(me/foo,%0) will _always_ create an attribute.`,
		params: ['object/attribute', 'value'],
	},
	band: {
		label: 'band(<integer>, <integer>[, ... , <integerN>])',
		documentation: "Does a bitwise AND of all its arguments, returning the result (a number with only the bits set in every argument set in it).",
		params: ['number 1', 'number 2'],
	},
	baseconv: {
		label: 'baseconv(<number>, <from base>, <to base>)',
		documentation: "Converts <number>, which is in base <from base> into base <to base>. The bases can be between 2 (binary) and 64, inclusive.",
		params: ['number', 'from base', 'to base'],
	},
	beep: {
		label: 'beep([<number>])',
		documentation: "Returns <number> 'alert' bell characters. <number> must be in the range 1 to 5, or, if unspecified, defaults to 1. This function may only be used by royalty and wizards.",
		params: ['number'],
	},
	benchmark: {
		label: 'benchmark(<expression>, <number>[, <sendto>])',
		documentation: "Evaluates <expression> <number> times, and returns the average, minimum, and maximum time it took to evaluate <expression> in microseconds. If a <sendto> argument is given, benchmark() instead pemits the times to the object <sendto>, and returns the result of the last evaluation of <expression>.",
		params: ['expression', 'number', 'sendto'],
	},
	bnand: {
		label: 'bnand(<integer1>, <integer2>)',
		documentation: "Returns <integer1> with every bit that was set in <integer2> cleared.",
		params: ['number 1', 'number 2'],
	},
	bnot: {
		label: 'bnot(<integer>)',
		documentation: "Returns the bitwise complement of <integer>. Every bit set in it is cleared, and every clear bit is set.",
		params: ['number1'],
	},
	bor: {
		label: 'bor(<integer>, <integer>[, ... , <integerN>])',
		documentation: "Does a bitwise OR of all its arguments, returning the result. (A number with a bit set if that bit appears in any of its arguments).",
		params: ['number1', 'number2'],
	},
	bound: {
		label: 'bound(<number>, <lower bound>, <higher bound>)',
		documentation: `bound() returns <number> if it is between <lower bound> and <higher bound>. If it's lower than <lower bound>, <lower bound> is returned. If it's higher than <higher bound>, <higher bound> is returned.

If you just want to know whether <number> is within the range of <lower> to <higher>, consider using lte(<lower>, <number>, <higher>) instead to get a boolean result.`,
		params: ['number', 'lower bound', 'higher bound'],
	},
	brackets: {
		label: 'brackets(<string>)',
		documentation: "Returns a count of the number of left and right square brackets, parentheses, and curly braces in the string, in that order, as a space-separated list of numbers. This is useful for finding missing or extra brackets in MUSH code. <string> is evaluated.",
		params: ['string'],
	},
	bxor: {
		label: 'bxor(<integer>, <integer>[, ... , <integerN>])',
		documentation: "Does a bitwise XOR of all its arguments, returning the result. (A number with a bit set if it's set in only one of its arguments).",
		params: ['number1', 'number2'],
	},
	capstr: {
		label: 'capstr(<string>)',
		documentation: "Returns <string> with the first character capitalized.",
		params: ['string'],
	},
	cat: {
		label: 'cat(<string>[, ... , <stringN>])',
		documentation: "Concatenate multiple strings together. cat() adds a space between each string; strcat() does not.",
		params: ['string', '...', 'string'],
	},
	strcat: {
		label: 'strcat(<string1>[, ... , <stringN>])',
		documentation: "Concatenate multiple strings together. cat() adds a space between each string; strcat() does not.",
		params: ['string', '...', 'string'],
	},
	cbuffer: {
		label: 'cbuffer(<channel>)',
		documentation: "Return the description (@channel/describe), number of users, number of messages in the recall buffer, or buffer size of <channel>, respectively. This information is also displayed in @channel/list and @channel/what.",
		params: ['channel'],
	},
	cusers: {
		label: 'cusers(<channel>)',
		documentation: "Return the description (@channel/describe), number of users, number of messages in the recall buffer, or buffer size of <channel>, respectively. This information is also displayed in @channel/list and @channel/what.",
		params: ['channel'],
	},
	cdesc: {
		label: 'cdesc(<channel>)',
		documentation: "Return the description (@channel/describe), number of users, number of messages in the recall buffer, or buffer size of <channel>, respectively. This information is also displayed in @channel/list and @channel/what.",
		params: ['channel'],
	},
	cmsgs: {
		label: 'cmsgs(<channel>)',
		documentation: "Return the description (@channel/describe), number of users, number of messages in the recall buffer, or buffer size of <channel>, respectively. This information is also displayed in @channel/list and @channel/what.",
		params: ['channel'],
	},
	cbufferadd: {
		label: 'cbufferadd(<channel>, <text>[, <spoof>])',
		documentation: `Adds text to a channel buffer without broadcasting it to all people on the channel. If <spoof> is true, it will spoof the enactor (%#).

This function is only usable by objects that pass the channel's @clock/mod, and who can use the @cemit command (or @nscemit if <spoof> is true).`,
		params: ['channel'],
	},
	ceil: {
		label: 'ceil(<number>)',
		documentation: "Rounds <number> up.",
		params: ['number'],
	},
	round: {
		label: 'round(<number>, <places>[, <pad>])',
		documentation: "Rounds <number> to <places> decimal places. <places> must be between 0 and config(float_precision). If the optional <pad> argument is true, the result will be padded with 0s if it would otherwise have fewer than <places> digits after the decimal point.",
		params: ['number', 'places', 'pad'],
	},
	floor: {
		label: 'floor(<number>)',
		documentation: "Rounds <number> down",
		params: ['number'],
	},
	cemit: {
		label: 'cemit(<channel>, <message>[, <noisy>])',
		documentation: `@cemit emits <message> on <channel>. It does not include your name. The channel prefix is included if the /noisy switch is given, and omitted if /silent is given - if neither is given, the default behaviour is controlled by the noisy_cemit @config option. The /noeval switch prevents <message> from being evaluated.
  
You must be able to speak on the channel, or have the See_All and Pemit_All @powers, to @cemit on the channel.

@nscemit is exactly the same, but does not produce nospoof information when used by players with the Can_spoof @power.

cemit() and nscemit() work the same as @cemit/silent and @nscemit/silent, respectively. If <noisy> is given as a true value, they work like @cemit/noisy and @nscemit/noisy, respectively, instead.

@cemit is intended for use in writing extended chat systems. `,
		params: ['channel', 'message', 'noisy'],
	},
	nscemit: {
		label: 'nscemit(<channel>, <message>[, <noisy>])',
		documentation: `@cemit emits <message> on <channel>. It does not include your name. The channel prefix is included if the /noisy switch is given, and omitted if /silent is given - if neither is given, the default behaviour is controlled by the noisy_cemit @config option. The /noeval switch prevents <message> from being evaluated.
  
You must be able to speak on the channel, or have the See_All and Pemit_All @powers, to @cemit on the channel.

@nscemit is exactly the same, but does not produce nospoof information when used by players with the Can_spoof @power.

cemit() and nscemit() work the same as @cemit/silent and @nscemit/silent, respectively. If <noisy> is given as a true value, they work like @cemit/noisy and @nscemit/noisy, respectively, instead.

@cemit is intended for use in writing extended chat systems. `,
		params: ['channel', 'message', 'noisy'],
	},
	center: {
		label: 'center(<string>, <width>[, <fill>[, <rightfill>]])',
		documentation: "This function will center <string> within a field <width> characters wide, using the <fill> string for padding on the left side of the string, and <rightfill> for padding on the right side. <rightfill> defaults to the mirror-image of <fill> if not specified. <fill> defaults to a space if neither <fill> nor <rightfill> are specified.",
		params: ['string', 'width', 'fill', 'rightfill'],
	},
	clags: {
		label: 'cflags(<channel>, [<object>])',
		documentation: `With one argument, cflags() returns a list of priv flags set on the given channel, represented as a string of characters. See 'help @channel privs' for the list. You must be able to see the channel to use this function.

With two arguments, cflags() returns a list of flags for that object on that channel, currently a string consisting of zero or more of "G" (Gag), "Q" (Quiet), "H" (Hide) and "C" (Combine). You must be able to see that channel and to examine the object to use this function. If the object is not on the channel, an error is returned.`,
		params: ['channel', 'object'],
	},
	clflags: {
		label: 'clflags(<channel>, [<object>])',
		documentation: "Returns a space-separated list of flag names, rather than a string of flag characters.",
		params: ['channel', 'object'],
	},
	channels: {
		label: 'channels(<object>[, <delimiter>])',
		documentation: `With no arguments, channels() returns the list of all channel names which are visible to the player. With two arguments, returns the list of channel names to which the object is listening, delimited by <delimiter>.

With one argument, the behavior is ambiguous. If the argument matches an object, it returns a space-separated list of channels to which the object is listening. If not, it's treated as a no-argument case with a delimiter.

If you can examine the object, the function returns all the channels it's on. Otherwise, it will only return those channels you can see that <object> is a member of with @channel/who.`,
		params: ['channel', 'delimeter'],
	},
	checkpass: {
		label: 'checkpass(<player>, <string>)',
		documentation: `Returns 1 if <string> matches <player>'s password, and 0 otherwise. If <player> has no password, this function will always return 1.

This function can only be used by wizards.`,
		params: ['player', 'string'],
	},
	children: {
		label: 'children(<object>)',
		documentation: "children() is exactly the same as lsearch([me|all], parent, <object>), using 'all' for See_All/Search players and 'me' for others.",
		params: ['object'],
	},
	lsearch: {
		label: 'lsearch(<player>[, ... , <classN>, <restrictionN>])',
		documentation: `This function is similar to the @search command, except it returns just a list of dbref numbers. The function must have at least three arguments. You can specify "all" or <player> for the <player> field; for mortals, only objects they can examine are included. If you do not want to restrict something, use "none" for <class> and <restriction>.

The possible <class>es and <restriction>s are the same as those accepted by @search. lsearch() can accept multiple class/restriction pairs, and applies them in a boolean "AND" fashion, returning only dbrefs that fulfill all restrictions. See 'help @search' for information about them.`,
		params: ['player', '...', 'classN', 'restrictionN'],
	},
	nlsearch: {
		label: 'nlsearch(<player>[, ... , <classN>, <restrictionN>])',
		documentation: "nlsearch(...) and nchildren(...) return the count of results that would be returned by lsearch() or children() with the same args.",
		params: ['player', '...', 'classN', 'restrictionN'],
	},
	lsearchr: {
		label: 'lsearchr(<player>[, ... , <classN>, <restrictionN>])',
		documentation: "lsearchr() is like an lsearch() run through revwords(). Results are returned from highest dbref to lowest. search() is an alias for lsearch().",
		params: ['player', '...', 'classN', 'restrictionN'],
	},
	nchildren: {
		label: 'nchildren(<object>)',
		documentation: "nlsearch(...) and nchildren(...) return the count of results that would be returned by lsearch() or children() with the same args.",
		params: ['object'],
	},
	chr: {
		label: 'chr(<number>)',
		documentation: "Returns the character with the given numerical value.",
		params: ['number'],
	},
	ord: {
		label: 'ord(<character>)',
		documentation: "Returns the numerical value of the given character.",
		params: ['character'],
	},
	clock: {
		label: 'clock(<channel>[/<locktype>][, <new lock>])',
		documentation: "With one argument, returns the value of a lock on a channel, if you own the channel or are See_All. If no locktype is given, 'JOIN' is assumed. With two arguments, sets the lock if you would be able to do so via @clock.",
		params: ['channel', 'locktype', 'new lock'],
	},
	clone: {
		label: 'clone(<object>[, <new name>[, <dbref>[, preserve]]])',
		documentation: `This function clones <object>, as per @clone, and returns the dbref number of the clone, or #-1 if the object could not be cloned.

The clone will have the same name as the original object unless you give a <new name> for it. Normally, the clone will be created with the first available dbref, but wizards and objects with the pick_dbref power may give the <dbref> of a garbage object to use instead.

If the optional fourth argument is the string preserve, acts as @clone/preserve.`,
		params: ['object', 'new name', 'dbref', 'preserve'],
	},
	cmds: {
		label: 'cmds(<player|descriptor>)',
		documentation: `Returns the number of commands issued by a player during this connection as indicated by WHO.

  		You must be a Wizard, Royalty or See_All to use this function on anyone but yourself.`,
		params: ['player|descriptor'],
	},
	cmogrifier: {
		label: 'cmogrifier(<channel>)',
		documentation: "Returns the dbref of the mogrifier of a channel.",
		params: ['channel'],
	},
	colors: {
		label: 'colors()',
		documentation: `With no arguments, colors() returns an unsorted, space-separated list of colors that PennMUSH knows the name of. You can use these colors in ansi(+<colorname>,text). The colors "xterm0" to "xterm255" are not included in the list, but can also be used in ansi().

With one argument, returns an unsorted, space-separated list of colors that match the wildcard pattern <wildcard>.

With two arguments, colors() returns information about specific colors. <colors> can be any string accepted by the ansi() function's first argument.`,
		params: ['wildcard', 'colors', 'format'],
	},
	comp: {
		label: 'comp(<value1>, <value2>[, <type>])',
		documentation: "Compares two values. It returns 0 if they are the same, -1 if <value1> is less than/precedes alphabetically <value2>, and 1 otherwise.",
		params: ['value 1', 'value 2', 'type'],
	},
	con: {
		label: 'con(<object>)',
		documentation: `Returns the dbref of the first object in the <object>'s inventory.

You can get the complete contents of any container you may examine, regardless of whether or not objects are dark. You can get the partial contents (obeying DARK/LIGHT/etc.) of your current location or the enactor (%#). You CANNOT get the contents of anything else, regardless of whether or not you have objects in it.`,
		params: ['object'],
	},
	cond: {
		label: 'cond(<cond>, <expr>[, ... , <condN>, <exprN>][, <default>])',
		documentation: "Evaluates <cond>s until one returns a true value. Should none return true, <default> is returned.",
		params: ['condition', 'expression', 'default'],
	},
	condall: {
		label: 'condall(<cond>, <expr>[, ... , <condN>, <exprN>][, <default>])',
		documentation: "Returns all <expr>s for those <cond>s that evaluate to true, or <default> if none are true.",
		params: ['condition', 'expression', 'default'],
	},
	ncond: {
		label: 'ncond(<cond>, <expr>[, ... , <condN>, <exprN>][, <default>])',
		documentation: "Identical to cond(), except it returns <expr>s for which <cond>s evaluate to false.",
		params: ['condition', 'expression', 'default'],
	},
	ncondall: {
		label: 'ncondall(<cond>, <expr>[, ... , <condN>, <exprN>][, <default>])',
		documentation: "Identical to cond(), except it returns <expr>s for which <cond>s evaluate to false.",
		params: ['condition', 'expression', 'default'],
	},
	config: {
		label: 'config([<option>])',
		documentation: "With no arguments, config() returns a list of config option names. If <option> is given, config() returns the value of the given option Boolean configuration options will return values of 'Yes' or 'No'.",
		params: ['option'],
	},
	conn: {
		label: 'conn(<player|descriptor>)',
		documentation: `This function returns the number of seconds a player has been connected. <player> should be the full name of a player or a dbref. You can also use a <descriptor> to get connection information for a specific connection when a player is connected more than once. Wizards can also specify the descriptor of a connection which is still at the login screen.

This function returns -1 for invalid <player|descriptor>s, offline players and players who are dark, if the caller is not able to see them.`,
		params: ['player|descriptor'],
	},
	connlog: {
		label: 'connlog(all|[not] logged in|<name>, <spec>...[, <output separator>])',
		documentation: `If connection tracking is enabled, this Wizard-only returns a list of connections that match the given <spec>. The format of the list elements is '<dbref> <unique-id>', with elements seperated by <output separator> (defaulting to |). <unique-id> is an identifier that can be used to get more information from the connection with connrecord().

If the first argument is 'all', all connections are returned. If it's 'logged in', all connections that are logged in to players are returned. 'not logged in' shows connections that never logged in. Otherwise, only connections for the given player are returned. If a connection that never logged in is returned, the dbref is #-1 for that record.

This function must be enabled (by the use_connlog @config option); if disabled, it returns #-1.`,
		params: ['all|not logged in|name', 'spec', 'output separator'],
	},
	connrecord: {
		label: 'connrecord(<id>[, <output separator>])',
		documentation: `This Wizard-only function returns information about a connection if enhanced logging is enabled.

<id> is a value returned by connlog(). connrecord() returns the following fields: DBREF NAME IPADDR HOSTNAME CONNECTION-TIME DISCONNECTION-TIME DISCONNECTION-REASON SSL WEBSOCKET. If the optional <output separator> argument is given, it is used instead of space to seperate fields.

If a single connection had multiple logins and logouts, only the last one is used. If a connection was never logged in, the DBREF field is #-1 and the NAME field is -. If the connection is still active, the DISCONNECTION-TIME is -1 and DISCONNECTION-REASON is -.

Times are in seconds since the epoch, as returned by secs().
  
This function must be enabled (by the use_connlog @config option); if disabled, it returns #-1.`,
		params: ['id', 'output separator'],
	},
	controls: {
		label: 'controls(<object>, <victim>[/<attribute>])',
		documentation: "With no <attribute>, this function returns 1 if <object> controls <victim>, or 0, if it does not. With an <attribute>, it will return 1 if <object> could successfully set <attribute> on <victim> (or alter <attribute>, if it already exists). If one of the objects does not exist, it will return #-1 ARGN NOT FOUND (where N is the argument which is the invalid object). If <attribute> is not a valid attribute name, it will return #-1 BAD ATTR NAME. You must control <object> or <victim>, or have the See_All power, to use this function.",
		params: ['object', 'victim', 'attribute'],
	},
	convsecs: {
		label: 'convsecs(<seconds>[, <timezone>])',
		documentation: `This function converts <seconds> (the number of seconds which have elapsed since midnight on January 1, 1970 UTC) to a time string. Because it's based on UTC, but returns local time, convsecs(0) is not going to be "Thu Jan 1 00:00:00 1970" unless you're in the UTC (GMT) timezone.

If a <timezone> argument is given, the return value is based on that timezone instead of the MUSH server's local time. See 'help timezones' for more information on valid timezones.

If Extended convtime() is supported (see @config compile), negative values for <seconds> representing dates prior to 1970 are allowed.`,
		params: ['seconds', 'timezone'],
	},
	convutcsecs: {
		label: 'convutcsecs(<seconds>)',
		documentation: "convutcsecs(<seconds>) is an alias for convsecs(<seconds>, utc).",
		params: ['seconds'],
	},
	convtime: {
		label: 'convtime(<time string>,[<timezone>])',
		documentation: `This functions converts a time string to the number of seconds since Jan 1, 1970 GMT. A time string is of the format:
    Ddd MMM DD HH:MM:SS YYYY
where Ddd is the day of the week, MMM is the month, DD is the day of the month, HH is the hour in 24-hour time, MM is the minutes, SS is the seconds, and YYYY is the year. If you supply an incorrectly formatted string, it will return #-1.

convutctime() and convtime() with a second argument of 'utc' assume the timestring is based on UTC time. Other time zones can be specified too. If no <timezone> is given, the server's timezone is used.

If the extended convtime() is supported (See @config compile), more formats for the date are enabled, including ones missing the day of week and year, and a 'Month Day Year' format. In this case, convtime() can also handle dates prior to 1970 (in which case a negative number will be returned).`,
		params: ['time string', 'timezone'],
	},
	convutctime: {
		label: 'convutctime(<time string>)',
		documentation: "convutctime(<time string>) is an alias for convtime(<time string>, utc).",
		params: ['time string'],
	},
	cos: {
		label: 'cos(<angle>[, <angle type>])',
		documentation: "Returns the cosine of <angle>. Angle must be in the given angle type, or radians by default.",
		params: ['angle', 'angle type'],
	},
	cowner: {
		label: 'cowner(<channel>)',
		documentation: "Returns the dbref of the owner of a channel.",
		params: ['channel'],
	},
	create: {
		label: 'create(<object>[, <cost>[, <dbref>]])',
		documentation: `This function creates an object with name <object> for <cost> pennies, and returns the dbref number of the created object. It returns #-1 on error.

Wizards may also specify a <dbref>; if this refers to a garbage object, the new object is created with this dbref.`,
		params: ['object', 'cost', 'dbref'],
	},
	crecall: {
		label: 'crecall(<channel>[, <lines> [, <start line> [, <output separator> [, <timestamps?> ]]]])',
		documentation: `This function is the functional form of @channel/recall, and returns a string containing the recalled lines from the channel, separated by <output separator> (which defaults to a space). If <timestamps?> is a true value, the recalled lines will be prefixed with the timestamp; otherwise, timestamps are omitted.
  
<lines> can be either a number of lines (in which case that many lines will be returned, starting from the <start line>th line), or a duration of time (for example, '5h' or '10m30s'), in which case all lines from the previous <lines> time are returned.`,
		params: ['channel', 'lines', 'start line', 'output separator', 'timestamps'],
	},
	csecs: {
		label: 'csecs(<object>)',
		documentation: "Returns the time as the number of seconds since the epoch. Anyone can get the creation time of any object in the game.",
		params: ['object'],
	},
	ctime: {
		label: 'ctime(<object>[, <utc>])',
		documentation: "Returns the date and time that <object> was created. The time returned is in the server's local timezone, unless <utc> is true, in which case the time is in the UTC timezone.",
		params: ['object', 'utc'],
	},
	cstatus: {
		label: 'cstatus(<channel>, <object>)',
		documentation: `Returns <object>'s status with respect to <channel>, which may be "Off", "On", or "Gag". You must either be able to examine the object, or it must visible be on the channel; "Off" is returned for objects that you cannot see on the channel.`,
		params: ['channel', 'object'],
	},
	ctitle: {
		label: 'ctitle(<channel>, <object>)',
		documentation: `Returns <object>'s @channel/title on <channel>. You must either be able to examine the object, or it must be visibly on <channel>, and you must either be on <channel> on able to join it.`,
		params: ['channel', 'object'],
	},
	ctu: {
		label: 'ctu(<angle>, <from>, <to>)',
		documentation: `Converts between the different ways to measure angles. <from> controls what the angle is treated as, and <to> what form it is turned into.`,
		params: ['angle', 'from', 'to'],
	},
	cwho: {
		label: 'cwho(<channel>[, <status>[, <skip gagged?>]])',
		documentation: `This function returns the dbrefs of objects which are on <channel>. <status> can be one of "on", "off" or "all" to control whether online players, offline players, or all players are returned; it defaults to "on". (Things are always returned.) When used by mortals, hidden/dark players are shown as being offline.
  
If <skip gagged?> is given, and is true, gagged objects will not be included in the results.`,
		params: ['channel', 'status', 'skip gagged'],
	},
	dec: {
		label: 'dec(<integer>) || dec(<string-ending-in-integer>)',
		documentation: `Returns the given <integer> minus 1. If given a string that ends in an integer, it decrements only the final integer portion.`,
		params: ['integer'],
	},
	decode64: {
		label: 'decode64(<string>)',
		documentation: `Converts a base-64 encoded <string> back to its original form.`,
		params: ['string'],
	},
	encode64: {
		label: 'encode64(<string>)',
		documentation: `Returns <string> encoded using base-64 format.`,
		params: ['string'],
	},
	decompose: {
		label: 'decompose(<string>)',
		documentation: `Works like escape() with the additional caveat that it inserts parse-able characters to recreate <string> exactly after one parsing. It takes care of multiple spaces, '%r's, and '%t's.`,
		params: ['string'],
	},
	encrypt: {
		label: 'encrypt(<string>, <password>[, <encode>])',
		documentation: `Returns an encrypted string produced by a simple password-based encrypted algorithm. Good passwords are long passwords. This is not high-security encryption.

If the optional <encode> argument is true, the resulting string is further encoded in base-64 so that it only contains alphanumeric characters.`,
		params: ['string', 'password', 'encode'],
	},
	decrypt: {
		label: 'decrypt(<string>, <password>[, <encoded>])',
		documentation: `Decrypts a string encrypted with encrypt(). The <encoded> argument indicates that the encrypted string was base-64 encoded.`,
		params: ['string', 'password', 'encoded'],
	},
	default: {
		label: 'default([<obj>/]<attr>[, ... ,[<objN>]/<attrN>], <default>)',
		documentation: `This function returns the value of the first possible <obj>/<attr>, as if retrieved via the get() function, if the attribute exists and is readable by you. Otherwise, it evaluates <default>, and returns that. Note that <default> is only evaluated if none of the given attributes exist or can be read. Note further than an empty attribute counts as an existing attribute.

This is useful for code that needs to return the value of an attribute, or an error message or default case, if that attribute does not exist.`,
		params: ['obj', 'attr', 'default'],
	},
	die: {
		label: 'die(<number of times to roll die>, <number of sides on die>[, <show>])',
		documentation: `This function simulates rolling dice. It "rolls" a die with a given number of sides, a certain number of times, and adds the results. For example, DIE(2, 6) would roll "2d6" - two six-sided dice, generating a result in the range 2-12. The maximum number of dice this function will roll in a single call is 700. If <show> is true, the result will be a space-seperated list of the individual rolls rather than their sum.`,
		params: ['number of times to roll die', 'number of sides on die', 'show'],
	},
	dig: {
		label: 'dig(<name>[, <exit to>[, <exit from>[, <room dbref>, <to dbref>, <from dbref>]]])',
		documentation: `This function digs a room called <name>, and optionally opens and links <exit to> and <exit from>, like the normal @dig command. It returns the dbref number of the new room.

Wizards and objects with the pick_dbref power can supply optional fourth through sixth arguments to specify garbage objects to use for the new room and exits.`,
		params: ['name', 'exit to', 'exit from', 'room dbref', 'to dbref', 'from dbref'],
	},
	digest: {
		label: 'digest(list) || digest(<algorithm>, <string>)',
		documentation: `Returns a checksum (hash, digest, etc.) of <string> using the given <algorithm>. The result is a unique large number represented in base 16.

Typically at least the following algorithms are supported:

md4 md5 ripemd160 sha1 sha224 sha256 sha384 sha512 whirlpool

Depending on the host's OpenSSL version and how it was configured, there might be more (or less) available. digest(list) returns the methods a particular server understands if the OpenSSL library version being used is recent enough (1.0.0 and higher), or '#-1 LISTING NOT SUPPORTED' on older versions. For portable code, stick with MD5, SHA1 and the SHA2 family.`,
		params: ['list', 'algorithm', 'string'],
	},
	dist2d: {
		label: 'dist2d(<x1>, <y1>, <x2>, <y2>)',
		documentation: `Returns the distance between two points in the Cartesian plane that have coordinates (<x1>, <y1>) and (<x2>, <y2>).`,
		params: ['x1', 'y1', 'x2', 'y2'],
	},
	dist3d: {
		label: 'dist3d(<x1>, <y1>, <z1>, <x2>, <y2>, <z2>)',
		documentation: `Returns the distance between two points in space, with coordinates (<x1>, <y1>, <z1>) and (<x2>, <y2>, <z2>).`,
		params: ['x1', 'y1', 'z1', 'x2', 'y2', 'z2'],
	},
	doing: {
		label: 'doing(<player|descriptor>)',
		documentation: `When given the name of a player or descriptor, doing() returns the player's @doing. If no matching player or descriptor is found, or the descriptor is not yet connected to a player, an empty string is returned.`,
		params: ['player|descriptor'],
	},
	e: {
		label: 'e([<number>])',
		documentation: `With no argument, returns the value of "e" (2.71828182845904523536, rounded to the game's float_precision setting).

If a <number> is given, it returns e to the power of <number>.

exp() is an alias for e().`,
		params: ['number'],
	},
	edefault: {
		label: 'edefault([<obj>/]<attr>, <default case>)',
		documentation: `This function returns the evaluated value of <obj>/<attr>, as if retrieved via the get_eval() function, if the attribute exists and is readable by you. Otherwise, it evaluates <default case>, and returns that. <default case> is only evaluated if the attribute does not exist or cannot be read.`,
		params: ['obj', 'attr', 'default case'],
	},
	edit: {
		label: 'edit(<string>, <search>, <replace>[, ... , <searchN>, <replaceN>])',
		documentation: `For each given <search> and <replace> pair, edit() replaces all occurrences of <search> in <string> with the corresponding <replace>.

If <search> is a caret (^), <replace> is prepended.
If <search> is a dollar sign ($), <replace> is appended.
If <search> is an empty string, <replace> is inserted between every character, and before the first and after the last.
If <replace> is an empty string, <search> is deleted from the string.`,
		params: ['string', 'search', 'replace'],
	},
	match: {
		label: 'match(<list>, <pattern>[, <delimiter>])',
		documentation: `Returns the index of the first element of <list> which matches the wildcard pattern <pattern>. The first word has an index of 1. If no matches are found, 0 is returned. element() is an alias for match().
		
Elements of <list> are separated by <delimiter>, if it's given, or a space otherwise. The results of matchall() are separated by <ouput separator>, if given, and <delimiter> if not.

To get the matching elements, instead of the indexes of where they appear in the list, use grab()/graball(). To see if a single string matches a wildcard pattern, use strmatch().`,
		params: ['list', 'pattern', 'delimeter'],
	},
	matchall: {
		label: 'matchall(<list>, <pattern>[, <delimiter>[, <output separator>]])',
		documentation: `Returns the indexes of all matching elements. If no elements match, an empty string is returned.
		
Elements of <list> are separated by <delimiter>, if it's given, or a space otherwise. The results of matchall() are separated by <ouput separator>, if given, and <delimiter> if not.

To get the matching elements, instead of the indexes of where they appear in the list, use grab()/graball(). To see if a single string matches a wildcard pattern, use strmatch().`,
		params: ['list', 'pattern', 'delimiter', 'output separator'],
	},
	elements: {
		label: 'elements(<list of words>, <list of numbers>[, <delim>[, <output separator>]])',
		documentation: `This function returns the words in <list of words> that are in the positions specified by <list of numbers>. The <list of words> are assumed to be space-separated, unless a <delim> is given. If <output separator> is given, the matching words are separated by <output separator>, otherwise by <delim>.

If any of the <list of numbers> is negative, it counts backwards from the end of the list of words, with -1 being the last word, -2 the word before last, and so on.`,
		params: ['list of words', 'list of numbers', 'delim', 'output separator'],
	},
	elist: {
		label: 'elist(<list>[, <conjunction>[, <delim>[, <output separator>[, <punctuation>]]]])',
		documentation: `Take the elements of <list> (separated by <delim> or a space by default), and:
If there's just one, return it.
If there's two, return <e1> <conjunction> <e2>
If there's more than two, return <e1><punc> <e2><punc> ... <conj> <en>

elist() uses <output separator> after <punc>/<conj> instead of a space.
The default <conjunction> is "and", default punctuation is ",".`,
		params: ['list', 'conjunction', 'delim', 'output separator', 'punctuation'],
	},
	itemize: {
		label: 'itemize(<list>[, <delim>[, <conjunction>[, <punctuation>]]])',
		documentation: `Take the elements of <list> (separated by <delim> or a space by default), and:
If there's just one, return it.
If there's two, return <e1> <conjunction> <e2>
If there's more than two, return <e1><punc> <e2><punc> ... <conj> <en>

The default <conjunction> is "and", default punctuation is ",".`,
		params: ['list', 'delim', 'conjunction', 'punctuation'],
	},
	elock: {
		label: 'elock(<object>[/<locktype>], <victim>)',
		documentation: `elock() returns 1 if the <victim> would pass the @lock/<locktype> on <object>, and 0 if it would fail. Any locktype can be given, including user-defined "user:" @locks. If no <locktype> is given, it defaults to the Basic lock.

You must be able to examine the lock, which means either that you must control <object>, it must be @set VISUAL, or the <locktype> lock must be @lset VISUAL.`,
		params: ['object', 'locktype', 'victim'],
	},
	emit: {
		label: 'emit(<message>)',
		documentation: `Sends a message to the room, as per @emit.`,
		params: ['message'],
	},
	nsemit: {
		label: 'nsemit(<message>)',
		documentation: `No spoof version of emit(). Can only be used by Wizards or someone with Can_spoof power.`,
		params: ['message'],
	},
	endtag: {
		label: 'endtag(<name>)',
		documentation: `Outputs a closing HTML/Pueblo tag for the named tag.
		
Example:
endtag(b)

Will output (in HTML):
</b>`,
		params: ['name'],
	},
	tag: {
		label: 'tag(<name>[, <param1>[, ... , <paramN>]])',
		documentation: `This function outputs the named HTML/Pueblo tag with the given paramaters.

Example:
	tag(img,src="http://www.pennmush.org/image.jpg",align="left",width="300")

Will output (in HTML):
	<img src="http://www.pennmush.org/image.jpg" align="left" width="300">`,
		params: ['name', 'param1', 'param2'],
	},
	tagwrap: {
		label: 'tagwrap(<name>[, <parameters>], <string>)',
		documentation: `This function outputs <string>, wrapped in the <name> HTML/Pueblo tag with the specified <paramaters>.

Example:
	tagwrap(a,href="http://download.pennmush.org",PennMUSH Downloads)]
		
Will output (in HTML):
	<a href="http://download.pennmush.org">PennMUSH Downloads</a>

A particularly important use of this function is tagwrap(pre, <string>). Because Pueblo works like an html browser, spaces and tabs are compressed to a single space. If you have code (a +who function, for example) that relies on exact spacing, surround its output with a tagwrap(pre,...) so that Pueblo will render it as "preformatted" text.`,
		params: ['name', 'parameters', 'string'],
	},
	html: {
		label: 'html(<string>)',
		documentation: `This wizard-only function will output <string> as an HTML Tag.

Example:
	> think html(b)Foo[html(/b)]

Will output (in HTML):
	<b>Foo</b>

Non-wizards should see the tag(), endtag(), and tagwrap() functions, which are similar but can be used by mortals.`,
		params: ['string'],
	},
	entrances: {
		label: 'entrances([<object>[, <type>[, <begin>[, <end>]]]])',
		documentation: `With no arguments, the entrances() function returns a list of all exits, things, players, and rooms linked to your location, like @entrances. You can specify an object other than your current location with <object>. You can limit the type of objects found by specifying one or more of the following for <type>:
		a        all (default)
		e        exits
		t        things
		p        players
		r        rooms

You can also limit the range of the dbrefs searched by giving <begin> and <end>. If you control <object>, or have the Search or See_All powers, all objects linked to <object> are returned. Otherwise, only objects you can examine will be included.`,
		params: ['object', 'type', 'begin', 'end'],
	},
	escape: {
		label: 'escape(<string>)',
		documentation: `The escape() function "escapes out" potentially "dangerous" characters, preventing function evaluation in the next pass of the parser. It returns <string> after adding the escape character ('\') at the beginning of the string, and before the following characters:

%  ;  [  ]  {  }  \ ( ) , ^ $

This function prevents code injection in strings entered by players. It is only needed when <string> will be passed through a command or function which will evaluate it again, which can usually be avoided. Since the function preserves the original string, it is, in most cases, a better choice than secure(), but decompose() is often better still.`,
		params: ['string'],
	},
	etime: {
		label: 'etime(<seconds>[, <width>])',
		documentation: `This function formats a number of seconds using the same rules as the 'On for' and 'Idle' columens in WHO's output. The optional <width> argument controls the maximum size of the returned string.

The elapsed time is split into years, weeks, days, hours, minutes and seconds fields. As many non-zero fields as can fit into <width> characters are used, in that order. If all fields are 0, seconds are displayed.`,
		params: ['seconds', 'width'],
	},
	etimefmt: {
		label: 'etimefmt(<format>, <secs>)',
		documentation: `This function is similar to timestring() - it formats a number of seconds into days, hours, minutes and seconds. However, its formatting is much more versatile than timestring(), as well as being more complex.

Escape codes in <format> are replaced by the proper values, and other characters are left unchanged.`,
		params: ['format', 'seconds'],
	},
	eval: {
		label: 'eval(<object>, <attribute>)',
		documentation: `eval() and get_eval() are similar to ufun(), in that they evaluate the given <attribute> on <object>. However, they change the enactor (%#) to the object executing the eval (%!). It does not modify the stack (%0-%9), so the attribute being evaled sees the same values for them that the calling code does. Unless you need this behavior, it is better to use u() instead, which hides the caller's stack.`,
		params: ['object', 'attribute'],
	},
	get_eval: {
		label: 'get_eval(<object>/<attribute>)',
		documentation: `eval() and get_eval() are similar to ufun(), in that they evaluate the given <attribute> on <object>. However, they change the enactor (%#) to the object executing the eval (%!). It does not modify the stack (%0-%9), so the attribute being evaled sees the same values for them that the calling code does. Unless you need this behavior, it is better to use u() instead, which hides the caller's stack.`,
		params: ['object/attribute'],
	},
	exit: {
		label: 'exit(<object>)',
		documentation: `Returns the dbref of the first exit in room <object>.

You can get the complete exit list of any room you may examine, regardless of whether or not exits are dark. You can get the partial exit list (obeying DARK/LIGHT/etc.) of your current location or the enactor (%#). You CANNOT get the exit list of anything else, regardless of whether or not you have objects in it.`,
		params: ['object'],
	},
	extract: {
		label: 'extract(<list>[, <first>[, <length>[, <delimiter>]]])',
		documentation: `This function returns <length> elements of <list>, counting from the <first>th element. If <length> is not specified, the default is 1, so extract(<list>,3) acts like elements(<list>,3). If <first> is not specified, the default is the 1, so extract(<list>) acts like first(<list>).

If <first> is negative, extract() will begin counting backwards from the end of <list>, so -1 starts at the last element, -2 the element before last, and so on.

If <length> is negative, extract() will return up to and including the <length>th element from the right, so -1 will extract up to the last element, -2 up to the element before last, and so on.`,
		params: ['list', 'first', 'length', 'delimiter'],
	},
	filter: {
		label: 'filter([<obj>/]<attr>, <list>[, <delimiter>[, <output separator>[, ..., <argN>]]])',
		documentation: `Returns the elements of <list> for which a user-defined function evaluates to "1" (for filter()), or to a boolean true value (for filterbool()). That function is specified by the first argument (just as with the ufun() function), and the element of the list being tested is passed to that user-defined function as %0. Up to 29 further <arg>s can be specified, and will be available in the function as v(1) to v(30).

<delimiter> defaults to a space, and <output separator> defaults to <delimiter>.

filter(<obj>/<attr>, <list>) is roughly equivalent to squish(iter(<list>, switch(ufun(<obj>/<attr>, %i0),1,%i0,))) though the filter() version is much more efficient.`,
		params: ['object', 'attribute', 'list', 'first', 'length', 'delimiter'],
	},
	filterbool: {
		label: 'filterbool([<obj>]/<attr>, <list>[, <delimiter>[, <output separator>[, ..., <argN>]]])',
		documentation: `Returns the elements of <list> for which a user-defined function evaluates to "1" (for filter()), or to a boolean true value (for filterbool()). That function is specified by the first argument (just as with the ufun() function), and the element of the list being tested is passed to that user-defined function as %0. Up to 29 further <arg>s can be specified, and will be available in the function as v(1) to v(30).

<delimiter> defaults to a space, and <output separator> defaults to <delimiter>.

filter(<obj>/<attr>, <list>) is roughly equivalent to squish(iter(<list>, switch(ufun(<obj>/<attr>, %i0),1,%i0,))) though the filter() version is much more efficient.`,
		params: ['object', 'attribute', 'list', 'delimeter', 'osoutput separatorep'],
	},
	findable: {
		label: 'indable(<object>, <victim>)',
		documentation: `This function returns 1 if <object> can locate <victim>, or 0 if it cannot. If one of the objects does not exist, it will return #-1 ARGN NOT FOUND (where N is the argument which is the invalid object).

The object executing the function needs to be see_all or control both <object> and <victim>.`,
		params: ['object', 'victim'],
	},
	firstof: {
		label: 'firstof(<expr>[, ... , <exprN>], <default>)',
		documentation: `Returns the first evaluated <expr> that is true. If no <expr> arguments are true, <default> is returned.

The meaning of true or false is dependent on configuration options as explained in the 'BOOLEAN VALUES' help topics.

This function evaluates arguments one at a time, stopping as soon as one is true.`,
		params: ['expression', 'default'],
	},
	flags: {
		label: 'flags([<object>[/<attribute>]])',
		documentation: `With no arguments, flags() returns a string consisting of the flag letters for each flag on the MUSH. Note that some flags have no letter, and mutlple flags may have the same letter (and so will appear multiple times).

If an <object> is given, flags() returns 'P', 'T', 'R' or 'E', depending on whether <object> is a player, thing, room, or exit, followed by the flag letter for each flag set on <object>.

With an <object>/<attribute>, the flag letters for each flag set on the given <attribute> are returned.`,
		params: ['null', 'object/attribute'],
	},
	flip: {
		label: 'flip(<string>)',
		documentation: `flip() reverses a string. reverse() is an alias for flip().`,
		params: ['string'],
	},
	fmod: {
		label: 'fmod(<number>, <divisor>)',
		documentation: `Similar to remainder() but may take floating point arguments. The return value is <number> - n * <divisor>, where n is the quotient of <number> / <divisor>, rounded towards zero. The result has the same sign as <number> and a magnitude less than the magnitude of <divisor>.`,
		params: ['number', 'divisor'],
	},
	fn: {
		label: 'fn([<obj>/]<function name>[, <arg0>[, ... , <argN>]])',
		documentation: `Executes the built-in/hardcoded function <function name>, even if the function has been deleted or overridden with @function. It is primarily useful within @functions that override built-ins in order to be able to call the built-in.`,
		params: ['object/[function name]', '[arg0]'],
	},
	fold: {
		label: 'fold([<obj>/]<attr>, <list>[, <base case>[, <delimiter>]])',
		documentation: `This function "folds" a list through the user-defined function, set in the specified <obj>/<attribute>.

If no <base case> is provided, fold() passes the first element of <list> as %0, and the second element of <list> as %1, to the user-defined function. The user-defined function is then called again, with the result of the first evaluation being %0, and the next (third) element of the list as %1. This is repeated until all the elements of the list have been used. The result of the last call of <obj>/<attr> is returned.

If a base case is provided, it is passed as %0, and the first element of list is passed as %1, to the user-defined function. The process for the no-base-case fold() is then used.

The number of times <attr> has been called is passed as %2, starting from 0.

Note that it's not possible to pass a <delimiter> to fold without also giving a <base case>; see the examples for a way around this.`,
		params: ['[object/]attribute', 'list', 'base case', 'delimiter'],
	},
	folderstats: {
		label: 'folderstats(<player>, <folder #>)',
		documentation: `folderstats() returns the number of read, unread, and cleared messages in a specific folder, or, if none is given, the player's current folder. Only Wizards may use forms which get other players' mail information.`,
		params: ['player', 'folder #'],
	},
	followers: {
		label: 'followers(<object>)',
		documentation: `Returns the list of things and players following object. You must control <object>.`,
		params: ['object'],
	},
	following: {
		label: 'following(<object>)',
		documentation: `Returns the list of things and players that the object is following. You must control <object>.`,
		params: ['object'],
	},
	foreach: {
		label: 'foreach([<object>/]<attribute>, <string>[, <start>[, <end>]])',
		documentation: `This function is similar to map(), but instead of calling the given <object>/<attribute> for each word in a list, it is called for each character in <string>.

For each character in <string>, <object>/<attribute> is called, with the character passed as %0, and its position in the string as %1 (the first character has position 0). The results are concatenated.

If <start> is given, everything before the first occurrence of <start> is copied as-is, without being passed to the <object>/<attribute>. If <end> is given, everything after the first occurrence of <end> is copied as-is. The <start> and <end> characters themselves are not copied.`,
		params: ['object/attribute', 'string', 'start', 'end'],
	},
	formdecode: {
		label: 'formdecode(<string>[, <paramname>[, <output separator>]])',
		documentation: `Intended for use with the HTTP Handler. See "help http" for more.

formdecode() converts form-encoded data, such as HTTP GET paths (after the ?) or the contents of POST with form-urlencoded data. It searches for the parameter named <paramname> and returns with its decoded value.

If <paramname> is not given, formdecode() returns a list of parameter names.

If there are multiple values, they will be separated by <output separator> (default %b)

formdecode() requires libcurl (@http) to be enabled.`,
		params: ['string', 'paramname', 'output separator'],
	},
	fraction: {
		label: 'fraction(<number>[, <whole>])',
		documentation: `This function returns a fraction representing the floating-point <number>. Since not all numbers can be expressed as a fraction, dividing the numerator by the denominator of the results will not always return the original <number>, but something close to it.

If <whole> is true, and <number> is greater than 1.0 (or less than -1.0), the return value will be a whole number followed by the fraction representation of the decimal.`,
		params: ['number', 'whole'],
	},
	fullname: {
		label: 'fullname(<object>)',
		documentation: `Returns the full name of object <object>. It is identical to name() except that for exits, fullname() returns the complete exit name, including all aliases.`,
		params: ['object'],
	},
	functions: {
		label: 'functions([<type>])',
		documentation: `Returns a space-separated list of the names of functions. If <type> is "local", only @functions are listed. If "builtin", only builtin functions. If "all" or omitted, both are returned.`,
		params: ['type'],
	},
	get: {
		label: 'get(<object>/<attribute>)',
		documentation: `Returns the string stored in an <object>'s <attribute> attribute, without evaluating it. You must be able to examine the attribute. get() and xget() are identical, apart from the argument separator.`,
		params: ['object/attribute'],
	},
	xget: {
		label: 'xget(<object>/<attribute>)',
		documentation: `Returns the string stored in an <object>'s <attribute> attribute, without evaluating it. You must be able to examine the attribute. get() and xget() are identical, apart from the argument separator.`,
		params: ['object/attribute'],
	},
	getpids: {
		label: 'getpids(<object>[/<attribute>])',
		documentation: `Returns the string stored in an <object>'s <attribute> attribute, without evaluating it. You must be able to examine the attribute. get() and xget() are identical, apart from the argument separator.`,
		params: ['object[/attribute]'],
	},
	grab: {
		label: 'grab(<list>, <pattern>[, <delimiter>])',
		documentation: `Returns the first word in <list> which matches the pattern. For grab(), <pattern> is a wildcard pattern.

Basically, this is a much more efficient way to do:
    elements(<list>, match(<list>, <pattern>[, <delimiter>])[, <delimiter>])
or the regular expression variation thereof.`,
		params: ['list', 'pattern', 'delimiter'],
	},
	regrab: {
		label: 'regrab(<list>, <regexp>[, <delimiter>])',
		documentation: `Returns the first word in <list> which matches the pattern. For grab(), <pattern> is a wildcard pattern. For regrab(), the pattern is a regular expression.

Basically, this is a much more efficient way to do:
    elements(<list>, match(<list>, <pattern>[, <delimiter>])[, <delimiter>])
or the regular expression variation thereof.`,
		params: ['list', 'regexp', 'delimiter'],
	},
	regrabi: {
		label: 'regrabi(<list>, <regexp>[, <delimiter>])',
		documentation: `Returns the first word in <list> which matches the pattern. For grab(), <pattern> is a wildcard pattern. regrabi() is case-insensitive. <delimiter> defaults to a space.

Basically, this is a much more efficient way to do:
    elements(<list>, match(<list>, <pattern>[, <delimiter>])[, <delimiter>])
or the regular expression variation thereof.`,
		params: ['list', 'regexp', 'delimiter'],
	},
	graball: {
		label: 'graball(<list>, <pattern>[, <delim>[, <output separator>]])',
		documentation: `These functions work identically to the grab() and regrab()/regrabi() functions, except they return all matches, not just the first: They return all words in the <list> which match <pattern>. If none match, an empty string is returned. <delim> defaults to a space, and <output separator> defaults to <delim>.`,
		params: ['list', 'pattern', 'delimiter', 'output separator'],
	},
	regraball: {
		label: 'regraball(<list>, <regexp>[, <delim>[, <output separator>]])',
		documentation: `These functions work identically to the grab() and regrab()/regrabi() functions, except they return all matches, not just the first: They return all words in the <list> which match <pattern>. If none match, an empty string is returned. <delim> defaults to a space, and <output separator> defaults to <delim>.`,
		params: ['list', 'regexp', 'delimiter', 'output separator'],
	},
	regraballi: {
		label: 'regraballi(<list>, <regexp>[, <delim>[, <output separator>]])',
		documentation: `These functions work identically to the grab() and regrab()/regrabi() functions, except they return all matches, not just the first: They return all words in the <list> which match <pattern>. If none match, an empty string is returned. <delim> defaults to a space, and <output separator> defaults to <delim>.`,
		params: ['list', 'regexp', 'delimiter', 'output separator'],
	},
	grep: {
		label: 'grep(<object>, <attrs>, <substring>)',
		documentation: `Returns a list of attributes on <object> containing <substring>, matching the wildcard <pattern>, or matching the regular expression <regexp>. <attrs> is a wildcard pattern for attribute names to search.

Parsing _does_ occur before this function is invoked. Therefore, "special" characters will need to be escaped out.

grep() is case-sensitive.`,
		params: ['object', 'attributes', 'substring'],
	},
	wildgrep: {
		label: 'wildgrep(<object>, <attrs>, <pattern>)',
		documentation: `Returns a list of attributes on <object> containing <substring>, matching the wildcard <pattern>, or matching the regular expression <regexp>. <attrs> is a wildcard pattern for attribute names to search.

Parsing _does_ occur before this function is invoked. Therefore, "special" characters will need to be escaped out.

wildgrep() is case-sensitive.`,
		params: ['object', 'attributes', 'pattern'],
	},
	regrep: {
		label: 'regrep(<object>, <attrs>, <regexp>)',
		documentation: `Returns a list of attributes on <object> containing <substring>, matching the wildcard <pattern>, or matching the regular expression <regexp>. <attrs> is a wildcard pattern for attribute names to search.

Parsing _does_ occur before this function is invoked. Therefore, "special" characters will need to be escaped out.

regrep() is case-sensitive.`,
		params: ['object', 'attributes', 'regexp'],
	},
	grepi: {
		label: 'grepi(<object>, <attrs>, <substring>)',
		documentation: `Returns a list of attributes on <object> containing <substring>, matching the wildcard <pattern>, or matching the regular expression <regexp>. <attrs> is a wildcard pattern for attribute names to search.

Parsing _does_ occur before this function is invoked. Therefore, "special" characters will need to be escaped out.

grepi() is case-insensitive.`,
		params: ['object', 'attributes', 'substring'],
	},
	regrepi: {
		label: 'regrepi(<object>, <attrs>, <regexp>)',
		documentation: `Returns a list of attributes on <object> containing <substring>, matching the wildcard <pattern>, or matching the regular expression <regexp>. <attrs> is a wildcard pattern for attribute names to search.

Parsing _does_ occur before this function is invoked. Therefore, "special" characters will need to be escaped out.

regrepi() is case-insensitive.`,
		params: ['object', 'attributes', 'regexp'],
	},
	wildgrepi: {
		label: 'wildgrepi(<object>, <attrs>, <pattern>)',
		documentation: `Returns a list of attributes on <object> containing <substring>, matching the wildcard <pattern>, or matching the regular expression <regexp>. <attrs> is a wildcard pattern for attribute names to search.

Parsing _does_ occur before this function is invoked. Therefore, "special" characters will need to be escaped out.

wildgrepi() is case-insensitive.`,
		params: ['object', 'attributes', 'pattern'],
	},
	pgrep: {
		label: 'pgrep(<object>, <attrs>, <substring>)',
		documentation: `Returns a list of attributes on <object> containing <substring>, matching the wildcard <pattern>, or matching the regular expression <regexp>. <attrs> is a wildcard pattern for attribute names to search.

Parsing _does_ occur before this function is invoked. Therefore, "special" characters will need to be escaped out.

pgrep() works like grep(), but also checks attributes inherited from parents.`,
		params: ['object', 'attributes', 'substring'],
	},
	gt: {
		label: 'gt(<number1>, <number2>[, ... , <numberN>])',
		documentation: `Takes two or more numbers, and returns 1 if and only if each number is greater than the number after it, and 0 otherwise.`,
		params: ['number1', 'number2'],
	},
	gte: {
		label: 'gte(<number1>, <number2>[, ... , <numberN>])',
		documentation: `Takes two or more numbers, and returns 1 if and only if each number is greater than or equal to the number after it, and 0 otherwise.`,
		params: ['number1', 'number2'],
	},
	lt: {
		label: 'lt(<number1>, <number2>[, ... , <numberN>])',
		documentation: `Takes two or more numbers, and returns 1 if and only if each number is less than the number after it, and 0 otherwise.`,
		params: ['number1', 'number2'],
	},
	lte: {
		label: 'lte(<number1>, <number2>[, ... , <numberN>])',
		documentation: `Takes two or more numbers, and returns 1 if and only if each number is less than or equal to the number after it, and 0 otherwise.`,
		params: ['number1', 'number2'],
	},
	hasattr: {
		label: 'hasattr(<object>, <attribute>)',
		documentation: `Checks to see if <object> has a given attribute. They return #-1 if the object does not exist or the attribute can't be examined by the player. Otherwise, they return 1 if the attribute is present and 0 if it is not.
		
hasattr() checks to see if <attribute> exists on <object> only.

Will also work with one argument in the form of <object>/<attribute>.`,
		params: ['object', 'attribute'],
	},
	hasattrp: {
		label: 'hasattrp(<object>, <attribute>)',
		documentation: `Checks to see if <object> has a given attribute. They return #-1 if the object does not exist or the attribute can't be examined by the player. Otherwise, they return 1 if the attribute is present and 0 if it is not.
		
hasattrp() also checks for <attribute> on <object>'s parent/ancestor.

Will also work with one argument in the form of <object>/<attribute>.`,
		params: ['object', 'attribute'],
	},
	hasattrval: {
		label: 'hasattrval(<object>, <attribute>)',
		documentation: `Checks to see if <object> has a given attribute. They return #-1 if the object does not exist or the attribute can't be examined by the player. Otherwise, they return 1 if the attribute is present and 0 if it is not.
		
hasattrval() only returns 1 if <attribute> exists and is non-empty. An "empty" attr is one containing a null value (if the empty_attrs config option is on), or one containing a single space (if the option is off).

Will also work with one argument in the form of <object>/<attribute>.`,
		params: ['object', 'attribute'],
	},
	hasattrpval: {
		label: 'hasattrpval(<object>, <attribute>)',
		documentation: `Checks to see if <object> has a given attribute. They return #-1 if the object does not exist or the attribute can't be examined by the player. Otherwise, they return 1 if the attribute is present and 0 if it is not.
		
hasattrpval() is like hasattrval() but also checks parents.

Will also work with one argument in the form of <object>/<attribute>.`,
		params: ['object', 'attribute'],
	},
	haspower: {
		label: 'haspower(<object>, <power>)',
		documentation: `Returns 1 if <object> has the named power, and 0 if it does not.

You can check the powers of any object, whether you control it or not.`,
		params: ['object', 'power'],
	},
	hastype: {
		label: 'hastype(<object>, <type list>)',
		documentation: `Returns 1 if <object> belongs to one of the types given in <type list>, and 0 otherwise. Valid types are PLAYER, THING, ROOM, EXIT and GARBAGE.`,
		params: ['object', 'type list'],
	},
	height: {
		label: 'height(<player|descriptor>[, <default>])',
		documentation: `Returns the screen height for a connected player. If the player's client is capable of doing so, it will let the mush know what the correct size is on connection and when the client is resized.

The default is 24 for height, the normal minimal value. This can be overridden when calling the function by providing the default to the function. Players can change the value that will be returned when the function is called on them with the special SCREENHEIGHT command, which takes a number as their sole argument, and sets the appropriate field.

When used on something that's not a visible player, the functions return the default values.

The intent of these functions is allow softcode that does formatting to be able to produce a display that can make full use of any given screen size.`,
		params: ['player|descriptor', 'default'],
	},
	width: {
		label: 'width(<player|descriptor>[, <default>])',
		documentation: `Returns the screen width for a connected player. If the player's client is capable of doing so, it will let the mush know what the correct size is on connection and when the client is resized.

The default is 78 for width, the normal minimal value. This can be overridden when calling the function by providing the default to the function. Players can change the value that will be returned when the function is called on them with the special SCREENWIDTH command, which takes a number as their sole argument, and sets the appropriate field.

When used on something that's not a visible player, the functions return the default values.

The intent of these functions is allow softcode that does formatting to be able to produce a display that can make full use of any given screen size.`,
		params: ['player|descriptor', 'default'],
	},
	hidden: {
		label: 'hidden(<player|descriptor>)',
		documentation: `If you can see hidden players, this function returns 1 if <player> (or the player connected to <descriptor>) is hidden, and 0 otherwise. If you cannot see hidden players, hidden() returns #-1.`,
		params: ['player|descriptor'],
	},
	hmac: {
		label: 'hmac(<digest>, <key>, <text>[, <encoding>])',
		documentation: `Computes the HMAC (message authentication code) hash for <text> using the passphrase <key> and the given hash function <digest>, which can be any supported by digest(). <encoding> can be base16 (The default) or base64.`,
		params: ['digest', 'key', 'text', 'encoding'],
	},
	home: {
		label: 'home(<object>)',
		documentation: `Returns the object's 'home', where it is @link'd to. This is the home for a player or thing, the drop-to of a room, or source of an exit.`,
		params: ['object'],
	},
	host: {
		label: 'host(<player|descriptor>)',
		documentation: `Returns the hostname a player is connected from, as shown on the wizard WHO. This may be more reliable that get(<player>/lastsite) if the player has multple connections from different locations, and the function is called with a descriptor argument.

The caller can use the function on himself, but using on any other player requires privileged power such as Wizard, Royalty or SEE_ALL.

hostname() is an alias for host().`,
		params: ['player|descriptor'],
	},
	ibreak: {
		label: 'ibreak([<level>])',
		documentation: `The ibreak() function stops an iter() from running at the end of the current loop. When used in nested iter()s, you can give a <level> to specify how many iter()s to break from. iter() will stop evaluating at the end of the current loop, and NOT immediately after ibreak() is called.`,
		params: ['level'],
	},
	idle: {
		label: 'idle(<player|descriptor>)',
		documentation: `This function returns the number of seconds a player has been idle, much as WHO does. <player name> must be the full name of a player, or a player's dbref. You can also specify a <descriptor>, useful if a player is connected multiple times, or for connections which are still at the login screen. Players who are not connected have an idle time of "-1", as do dark wizards, when idle() is used on them by a non-priv'ed player.`,
		params: ['player|descriptor'],
	},
	ilev: {
		label: 'ilev()',
		documentation: `Returns the current nesting depth, or -1 when used outside an iter() or @dolist. Thus, itext(ilev()) will return the outermost ##, equivilent to %iL.`,
		params: ['null'],
	},
	itext: {
		label: 'itext(<n>)',
		documentation: `Returns the equivilent of ## for iter() and @dolist, where an <n>=0 returns to the current iter or @dolist, <n>=1 refers to the iter()/@dolist which the current iter() or @dolist is nested in, etc. An <n> of "L" can be used to refer to the outermost iter()/@dolist.`,
		params: ['n'],
	},
	inum: {
		label: 'inum(<n>)',
		documentation: `Returns the equivilent of #@ for iter() and @dolist, where an <n>=0 returns to the current iter or @dolist, <n>=1 refers to the iter()/@dolist which the current iter() or @dolist is nested in, etc. An <n> of "L" can be used to refer to the outermost iter()/@dolist.`,
		params: ['n'],
	},
	iname: {
		label: 'iname(<object>)',
		documentation: `Returns the name of <object>, as it would appear if you were inside it. It is identical to name() except that if the object has a NAMEFORMAT or NAMEACCENT attribute, it is used.

You must be see_all, control <object>, or be inside it to use this function.`,
		params: ['object'],
	},
	inc: {
		label: 'inc(<integer>) || inc(<string-ending-in-integer>)',
		documentation: `Returns the integer plus 1. If given a string that ends in an integer, it increments only the final integer portion.
		
If the null_eq_zero @config option is on, using inc() on a string which does not end in an integer will return <string>1. When null_eq_zero is turned off, it will return an error.`,
		params: ['integer || string-ending-in-integer'],
	},
	index: {
		label: 'index(<list>, <character>, <first>, <length>)',
		documentation: `This function is similar to extract(), except that it requires four arguments, while extract() uses defaults for its arguments if they aren't given. The function returns <length> items starting from the <first> position. Trailing spaces are trimmed.`,
		params: ['list', 'character', 'first', 'length'],
	},
	ipaddr: {
		label: 'ipaddr(<player|descriptor>)',
		documentation: `Returns the IP address of the connected player or descriptor. This may be more reliable than get(<player>/lastip) if the player has multple connections from different locations, and the function is called with a descriptor argument.

The caller can use the function on himself, but using on any other player requires privileged power such as Wizard, Royalty or SEE_ALL.`,
		params: ['player|descriptor'],
	},
	isdaylight: {
		label: 'isdaylight([<secs>[, <timezone>]])',
		documentation: `Returns 1 if it's daylight savings in the specified timezone at the given time. Defaults to the host server's time zone and current time if not specified.`,
		params: ['secs', 'timezone'],
	},
	isdbref: {
		label: 'isdbref(<string>)',
		documentation: `Returns 1 if <string> is the object id of an existing object. If <string> is not a full objid, or is the objid of a garbage object, it returns 0. Will also return 1 if <string> is the dbref of an existing (or garbage) object.`,
		params: ['string'],
	},
	isobjid: {
		label: 'isobjid(<string>)',
		documentation: `Returns 1 if <string> is the object id of an existing object. If <string> is not a full objid, or is the objid of a garbage object, it returns 0.`,
		params: ['string'],
	},
	isint: {
		label: 'isint(<string>)',
		documentation: `Returns 1 if its argument is an integer, and 0 otherwise. Integers can begin with a '+' or '-' sign, but the rest of the string must be digits.`,
		params: ['string'],
	},
	isjson: {
		label: 'isjson(<string>)',
		documentation: `Return 1 if its argument is valid JSON, 0 if not.`,
		params: ['string'],
	},
	isnum: {
		label: 'isnum(<string>)',
		documentation: `This function returns 1 if <string> is a number, and 0 if it is not. Numbers can begin with a '-' sign (for negatives), but the rest of the characters in the string must be digits, and an optional decimal point.`,
		params: ['string'],
	},
	isregexp: {
		label: 'isregexp(<string>)',
		documentation: `This function returns 1 if <string> is a valid regular expression, and 0 if it is not.`,
		params: ['string'],
	},
	isword: {
		label: 'isword(<string>)',
		documentation: `This function returns 1 if every character in <string> is a letter, or 0, if any character isn't a letter. Case does not matter.`,
		params: ['string'],
	},
	items: {
		label: 'items(<list>, <delim>)',
		documentation: `Counts the number of items in a list using an arbitrary <delim>. Null items are counted.`,
		params: ['list', 'delimeter'],
	},
	iter: {
		label: 'iter(<list>, <pattern>[, <delimiter>[, <output separator>]])',
		documentation: `For each word in <list>, iter() evaluates <pattern> once, and returns a list of the results of those evaluations. Words in <list> are separated by <delimiter>, if given, and spaces if not. Words in the resulting list are separated by the given <ouput separator>, or a space if no output separator is given.

Prior to each evaluation, every occurrence of the string "##" in <pattern> is replaced with the current word from <list>. However, because this replacement occurs before evaluation, it cannot be used well in nested iter()s, and should not be used on user input or untrusted <list>s, as the word will be evaluated. Instead, you can use the %iX substitution, or the itext() function. The substitution '%iL' refers to the outermost iter of the current expression, and is intended to replace ##.

The string "#@" will be replaced with the position of the current word in <list>. Like "##", the replacement occurs before substitution. Use the inum() function for nested iter()s.

If you nest iter()s, ## and #@ refer to the first/outermost iter(). The ilev() function can be used to get the current iter() nesting level.`,
		params: ['list', 'pattern', 'delimiter', 'output separator'],
	},
	json: {
		label: 'json(<type>[, <data>[, ..., <dataN>])',
		documentation: `This function encodes <data> as a valid JSON (JavaScript Object Notation) message. <type> specifies the type of data to represent; valid <type>s and correspending <data>s are listed below.

If any errors occur, json() returns a string starting with #-1.

For <type>...   <data> should be...
null            not given
boolean         one arg, either "true", "1", "false" or "0"
string          one arg, any string, including an empty string
number          one arg, a valid number
array           zero or more args, each themselves valid JSON
object          zero or more pairs of arguments, the first a plain string (NOT a quoted JSON string), the second valid JSON of any type

When <type> is "array" or "object", it's recommended that subsequent JSON arguments are created with nested calls to JSON().`,
		params: ['type', 'data'],
	},
	json_map: {
		label: 'json_map([<object>/]<attribute>, <json>[, <output separator>[, <arg>[, ..., <argN>]]])',
		documentation: `This function iterates over a JSON string, calling the specified <attribute> for each element of the JSON. If <json> represents a basic JSON type (null, boolean, string or number), the attribute will be called once. For arrays and objects, it will be called once for each element of the array/object.

When the attribute is called, %0 will be the type of the json object and %1 will be the value. When <json> is an array, %2 will be the array position of the current element. For objects, %2 will be the label of the current element. You can pass user-specified arguments to the attribute; the first <arg> will be available as %3, the second as %4, and so on.

<output separator> defaults to a space.`,
		params: ['object/attribute', 'json', 'output separator', 'arg'],
	},
	json_mod: {
		label: 'json_mod(<json>, <action>, <path>[, <json2>])',
		documentation: `Return a new JSON value based on applying <action> to <json>.

insert - adds a new value <json2> at the given <path> if the data described by <path> doesn't exist.
replace - replaces an existing value at the given <path> with <json2>.
set     - Add or replace <json2> at the given <path>.
patch   - Applies a merge patch (See https://tools.ietf.org/html/rfc7396) to <json> from <path>, which must be valid JSON.
remove  - Removes the element from <json> pointed to by <path>
sort    - Given a JSON array, sorts it based on the element at <path>.`,
		params: ['json', 'action', 'path'],
	},
	json_query: {
		label: 'json_query(<json>[, <action>[, <arg>, ...<argN>]])',
		documentation: `This function returns information about JSON data. <json> should be a valid JSON string, as returned by the json() function. There are 5 possible <action>s:

Action...    Returns...
type         The type of <json>, one of string, number, boolean, null, array or object. Default if no <action> is given.
size         The size of <json>; this is 0 for null objects, 1 for strings/numbers/booleans, the number of array elements, or the number of key/value pairs for objects.
exists       For arrays and objects, returns 1 if there is an object found by following the path specified in <arg>... and 0 if not. If the current arg is an integer and the current json element is an array, uses the <arg>th index of the array (Starting at 0) as the new current element. Otherwise, if the current json element is an object, treats the current <arg> as a key into the object and its value as the new current element.  Returns #-1 for other types.
get          For arrays and objects, returns the json element found by following the path laid out in <args>... as described above. If no such element exists, returns an empty string. Returns #-1 for other JSON types.
extract      Like get, but takes a single combined path arg as described in 'help json paths'. Some caveats: Returns 0 for false, 1 for true, and strings are unquoted.
unescape     Only valid for JSON strings; returns the unescaped form of <json>.`,
		params: ['json', 'action', 'arg'],
	},
	last: {
		label: 'last(<list>[, <delimiter>])',
		documentation: `Returns the last element of a list. Elements in <list> are separated by <delimiter>, if given, or by a space if not.`,
		params: ['list', 'delimeter'],
	},
	lattr: {
		label: 'lattr(<object>[/<attribute pattern>][, <output separator>])',
		documentation: `Returns a list of all the attributes on <object> which you can see, and which match the wildcard <attribute pattern>. If no <attribute pattern> is given, it defaults to "*". Note that this does not include branches in attribute trees; you must use the "**" wildcard to include those.
		
When returning large numbers of attributes, the results may be truncated due to buffer limits. In these cases, you can use nattr() and xattr() to retrieve the results in smaller pieces.`,
		params: ['object[/attribute pattern]', 'output separator'],
	},
	lattrp: {
		label: 'lattrp(<object>[/<attribute pattern>][, <output separator>])',
		documentation: `Returns attributes whose names match the regexp <regexp>. The match is not case-sensitive (as attribute names are always upper-case), and the "\`" branch separator has no special meaning in the pattern.
		
When returning large numbers of attributes, the results may be truncated due to buffer limits. In these cases, you can use nattr() and xattr() to retrieve the results in smaller pieces.

lattrp() also includes attributes inherited from parents.`,
		params: ['object[/attribute pattern]', 'output separator'],
	},
	reglattr: {
		label: 'reglattr(<object>[/<regexp>][, <output separator>])',
		documentation: `Returns attributes whose names match the regexp <regexp>. The match is not case-sensitive (as attribute names are always upper-case), and the "\`" branch separator has no special meaning in the pattern.
		
When returning large numbers of attributes, the results may be truncated due to buffer limits. In these cases, you can use nattr() and xattr() to retrieve the results in smaller pieces.`,
		params: ['object, regexp', 'output separator'],
	},
	reglattrp: {
		label: 'reglattrp(<object>[/<regexp>][, <output separator>])',
		documentation: `Returns attributes whose names match the regexp <regexp>. The match is not case-sensitive (as attribute names are always upper-case), and the "\`" branch separator has no special meaning in the pattern.
		
When returning large numbers of attributes, the results may be truncated due to buffer limits. In these cases, you can use nattr() and xattr() to retrieve the results in smaller pieces.

reglattrp() also includes attributes inherited from parents.`,
		params: ['object, regexp', 'output separator'],
	},
	lcon: {
		label: 'lcon(<object>[, <type>])',
		documentation: `Returns a list of the dbrefs of objects which are located in <object>.

You can get the complete contents of any object you may examine, regardless of whether or not objects are dark. You can get the partial contents (obeying DARK/LIGHT/etc.) of your current location or the enactor (%#). You CANNOT get the contents of anything else, regardless of whether or not you have objects in it.

When used on exits, this function returns #-1.`,
		params: ['object', 'type'],
	},
	lstr: {
		label: 'lcstr(<string>)',
		documentation: `Returns <string> with all letters converted to lowercase.`,
		params: ['string'],
	},
	lstr2: {
		label: 'lcstr2(<string>)',
		documentation: `Returns <string> with all letters converted to lowercase. If the MUSH is compiled with ICU Unicode support, lcstr2() does the same thing except the returned string might be a different length, and ansi colors and other markup are stripped.`,
		params: ['string'],
	},
	ldelete: {
		label: 'ldelete(<list>, <position(s)>[, <delimiter>[, <output separator>]])',
		documentation: `This function deletes the element(s) of <list> at the given <position(s)>. Elements of <list> are separated by <delimiter>, which defaults to a space. Null items are counted, as in 'items()'. Elements of <position(s)> must be numeric, and are always separated by a space, not by <delimiter>. Elements of the returned list are separated by <output separator>, which defaults to the <delimiter>.

If a <position> is negative, ldelete() counts backwards from the end of the list; a position of -1 deletes the last element, -2 the element before last, and so on.

All position calculations are performed on the original list. That is, ldelete(a b c, -1 -1) will return "a b", not "a", and ldelete(a b c, -1 -2) returns "a", not "b".`,
		params: ['list', 'position(s)', 'delimiter', 'output separator'],
	},
	left: {
		label: 'left(<string>, <length>)',
		documentation: `Returns the first <length> characters from <string>.`,
		params: ['string', 'length'],
	},
	lemit: {
		label: 'lemit(<message>)',
		documentation: `Emits a message in the caller's outermost room, as per @lemit.`,
		params: ['message'],
	},
	nslemit: {
		label: 'nslemit(<message>)',
		documentation: `No spoof version of lemit(). Can only be used by Wizards or someone with Can_spoof power.`,
		params: ['message'],
	},
	letq: {
		label: 'letq([<reg1>, <value1>[, ... , <regN>, <valueN>], <expr>)',
		documentation: `Saves the current values of the given q-<reg>isters, sets them to new <value>s, evaluates <expr> and then restores the saved registers. It does not restore registers that are not listed. None of the values can see the updated contents of the registers -- they are only visible to <expr>.

It returns the result of <expr>.`,
		params: ['reg1', 'value1', 'expr'],
	},
	lexits: {
		label: 'lexits(<room>)',
		documentation: `Returns a list of the dbrefs of exits in a room.

You can get the complete exit list of any room you may examine, regardless of whether or not exits are dark. You can get the partial exit list (obeying DARK/LIGHT/etc.) of your current location or the enactor (%#). You CANNOT get the exit list of anything else, regardless of whether or not you have objects in it.`,
		params: ['room'],
	},
	lflags: {
		label: 'lflags([<object>[/<attribute>]])',
		documentation: `With an argument, lflags() returns a space-separated list consisting of the names of all the flags attached to <object>, or <object>'s <attribute>.

Given no arguments, this function returns a space-separated list of all flag names known to the server, as per @list/flags.`,
		params: ['object/attribute'],
	},
	link: {
		label: 'link(<object>, <destination>[, <preserve>])',
		documentation: `This function links <object> to <destination>. While normally used on exits, it has all of the other capabilities of @link as well. It returns #-1 or 0 on failure, 1 on success. If the optional third argument is true, acts like @link/preserve.`,
		params: ['object', 'destination', 'preserve'],
	},
	linsert: {
		label: 'linsert(<list>, <position>, <new item>[, <delim>])',
		documentation: `If <position> is a positive integer, this inserts <new item> BEFORE the item at <position> from the left in <list>. That means that <new item> then becomes the <position>th element of <list>.

If <position> is a negative integer, this inserts <new item> AFTER the item at the absolute value of <position> from the RIGHT in <list>. This is the same as reversing the list before inserting <new item>, and then reversing it again into correct order. For example, when <position> is -1, <new item> will be the last in the list; when <position> is -2, <new item> will be the second item from the right, and so on.

If a <delim> is not given, a space is assumed. Null items are counted when determining position, as in 'items()'.
  
insert() is an alias for linsert(), for backwards compatability.`,
		params: ['list', 'position', 'new item', 'delimeter'],
	},
	list: {
		label: 'list(<option>[, <type>])',
		documentation: `This is the function-equivilent of the @list command, and lists some useful information about the MUSH. <option> can be one of:

  motd        : Returns the current @motd
  wizmotd     : Returns the current @motd/wizard. Wiz/Roy only.
  downmotd    : Returns the current @motd/down. Wiz/Roy only.
  fullmotd    : Returns the current @motd/full. Wiz/Roy only.
  functions   : Returns a list of all built-in functions and @functions.
  commands    : Returns a list of all built-in commands and @commands.
  attribs     : Returns all standard attributes.
  locks       : Returns the built-in lock types. Similar to llocks().
  flags       : Returns all flags. Similar to lflags().
  powers      : Returns all @powers.

  "commands"/"functions" return both built-in and local commands/functions by default. You can specify a <type> of either "builtin", "local" or "all" to limit this if you wish.`,
		params: ['option', 'type'],
	},
	listq: {
		label: 'listq([<pattern>])',
		documentation: `listq() returns a space-separated list of set q-registers with values available in the current q-register scope. If <pattern> is provided, then only those that match the wildcard pattern <pattern> will be returned.
		
If unsetq() is inside of a letq(), and does not have an argument, it will clear the registers that letq() has protected. unsetq() with arguments clears the specified registers.

  unsetq(<arg>) will clear all registers returned by listq(<arg>).`,
		params: ['pattern'],
	},
	unsetq: {
		label: 'unsetq([<pattern1> [<pattern2> [...]]])',
		documentation: `unsetq() without arguments clears all registers. Otherwise, unsetq() treats its argument as a list of register name patterns, and will unset all those registers within the local scope.

If unsetq() is inside of a letq(), and does not have an argument, it will clear the registers that letq() has protected. unsetq() with arguments clears the specified registers.

unsetq(<arg>) will clear all registers returned by listq(<arg>).`,
		params: ['pattern'],
	},
	lit: {
		label: 'lit(<string>)',
		documentation: `This function returns <string> literally - without even squishing spaces, and without evaluating *anything*. This can be useful for writing ASCII maps with spaces or whatever.`,
		params: ['string'],
	},
	ljust: {
		label: 'ljust(<string>, <length>[, <fill>[, <truncate?>]])',
		documentation: `This function returns <string>, padded with the string <fill> until it's <length> characters long. <fill> can be more than one character in length, and defaults to a single space.

If <string> is longer than <length>, it will be returned unaltered, unless <truncate?> is true, in which case only the first <length> characters of <string> are returned.`,
		params: ['string', 'length', 'fill', 'truncate?'],
	},
	llockflags: {
		label: 'llockflags([<object>[/<locktype>]])',
		documentation: `If an <object> is given, llockflags() returns a space-separated list of the lock flags on <object>'s <locktype> lock, or Basic lock if no locktype is given. You must be able to examine the lock.

Given no arguments, this function returns a space-separated list of all the names of all lock flags known to the server.`,
		params: ['object/locktype'],
	},
	llocks: {
		label: 'llocks([<object>])',
		documentation: `Lists @locks set on <object>, including user-defined locks (prefixed with USER:).
		
If no object is given, llocks() returns all the predefined lock types available.`,
		params: ['object'],
	},
	locks: {
		label: 'locks([<object>])',
		documentation: `Lists @locks set on <object>, including user-defined locks (prefixed with USER:).`,
		params: ['object'],
	},
	ln: {
		label: 'ln(<number>)',
		documentation: `Returns the natural log of <number>. This is equivilent to log(<number>, e).`,
		params: ['number'],
	},
	lnum: {
		label: 'lnum(<number>) || lnum(<start number>, <end number>[, <output separator>[, <step>]])',
		documentation: `With one argument, lnum returns a list of numbers, from 0 to <number - 1>. For example, lnum(4) returns the list "0 1 2 3". This is useful for creating loops.

With two arguments, the numbers range from the first to the second argument. For example, lnum(1,4) => 1 2 3 4

With three arguments, the output is separated by the separator given in the third argument. lnum(1,4,|) => 1|2|3|4

A fourth argument dictates the step. By default, the step is 1.
lnum(1,10,%b,2) -> 1 3 5 7 9
lnum(0,10,%b,2) -> 0 2 4 6 8 10`,
		params: ['number', 'start number', 'end number', 'output separator', 'step'],
	},
	loc: {
		label: 'loc(<object>)',
		documentation: `For things and players, loc() returns the dbref of the object which contains <object>. For rooms, it returns the drop-to, if one is set, or #-1 otherwise. For exits, it returns the destination (the source is an exits home()). This will be #-1 for unlinked exits, #-2 for variable exits, and #-3 for exits @linked to "home".

You must be able to examine <object>, or be near it, for this function to work. A special case exists when <object> is a player: As long as <object> is not set UNFINDABLE, and you are allowed to use the @whereis command, you can get <object>'s location.

You can also get the location of the enactor using the %L substitution, whether you are near to/can examine it or not.`,
		params: ['object'],
	},
	localize: {
		label: 'localize(<code>)',
		documentation: `localize() saves the q-registers, evaluates its argument, and restores the registers afterwards. It has the same effect as ulocal(), but doesn't require setting the code into an attribute.`,
		params: ['code'],
	},
	locate: {
		label: 'locate(<looker>, <name>, <parameters>)',
		documentation: `This function attempts to find an object called <name>, relative to the object <looker>. It's similar to the num() function, but you can be more specific about which type of object to find, and where to look for it. When attempting to match objects near to <looker> (anything but absolute, player name or "me" matches), you must control <looker>, have the See_All power or be nearby.

<parameters> is a string of characters which control the type of the object to find, and where (relative to <looker>) to look for it.

You can control the preferred types of the match with:
N - No type (this is the default)
E - Exits
L - Prefer an object whose Basic @lock <looker> passes
P - Players
R - Rooms
T - Things
F - Return #-1 if what's found is of a different type than the preferred one.
X - Never return #-2. Use the last dbref found if the match is ambiguous.

If type(s) are given, locate() will attempt to find an object with one of the given types first. If none are found, it will attempt to find any type of object, unless 'F' is specified, in which case it will return #-1.`,
		params: ['looker', 'name', 'parameters'],
	},
	lock: {
		label: 'lock(<object>[/<locktype>][, <new value>])',
		documentation: `Returns the text string equivalent of the @lock on <object>. <locktype> can be any valid switch for @lock ("Enter", "user:foo", etc) and defaults to "Basic". You must be able to examine the lock.

If a <new value> is given, lock() attempts to change the lock as @lock would first. You must control the object.`,
		params: ['object[/locktype]', 'new value'],
	},
	lockfilter: {
		label: 'lockfilter(<key>, <dbrefs>[, <delim>])',
		documentation: `Goes through <dbrefs> and tests them all against the lock <key>, returning a list of all dbrefs that pass the <key>.

<key> is evaluated from the caller's perspective.

This is equivilent to filter(#lambda/testlock(<key>, %%0), <dbrefs>) but much more efficient, as the lock <key> is only parsed/compiled once.

<delim> defaults to a space, and is the delimiter of <dbrefs> and the list returned by lockfilter().`,
		params: ['key', 'dbrefs', 'delimeter'],
	},
	lockflags: {
		label: 'lockflags([<object>[/<locktype>]])',
		documentation: `If an <object> is given, lockflags() returns a string consisting of the one-character abbreviations for all the lock flags on <object>'s <locktype> lock, or Basic lock if no locktype is given. You must be able to examine the lock.

Given no arguments, this function returns a string consisting of all the flag letters the server knows.`,
		params: ['object/locktype'],
	},
	lockowner: {
		label: 'lockowner(<object>[/<locktype>])',
		documentation: `This function returns the dbref of the player who owns the <locktype> lock on <object>, or the Basic lock if no <locktype> is given. You must be able to examine the lock to use this function.`,
		params: ['object/locktype'],
	},
	log: {
		label: 'log(<number>[, <base>])',
		documentation: `Returns the logarithm (base 10, or the given base) of <number>. <base> can be a floating-point number, or 'e' for the natural logarithm.`,
		params: ['number', 'base'],
	},
	lparent: {
		label: 'lparent(<object>)',
		documentation: `This function returns a list consisting of <object>'s dbref (as per num()), the dbref of its parent, grandparent, greatgrandparent, etc. The list will not, however, show parents of objects which the player is not privileged to examine. Ancestor objects are not included.`,
		params: ['object'],
	},
	lpids: {
		label: 'lpids([<object>[, <queue types>]])',
		documentation: `This function returns a list of queue process ids (pids). Only commands queued by objects with the same owner as <object> are listed. If you have the see_queue @power, you can specify "all" for <object> to get pids for everyone's queue entries. <object> defaults to the caller, or "all" for priviledged callers.

<queue types> should be a list of one or more of the following words, to filter the pids returned:
    wait        --  Only return wait queues
    semaphore   --  Only return semaphore queues
	independent --  Only return commands queued by <object> specifically, instead of all objects with the same owner as <object>.
If not specified, it defaults to "wait semaphore".`,
		params: ['object', 'queue types'],
	},
	lplayers: {
		label: 'lplayers(<object>)',
		documentation: `This function returns the dbrefs of all players, connected or not, in <object>. DARK wizards aren't listed to mortals or those without the see_all power. You must be in <object> or control it to use this function.`,
		params: ['object'],
	},
	lports: {
		label: 'lports([<viewer>[, <status>]])',
		documentation: `Returns the list of descriptors ("ports") that are used by connected players. lports() returns all ports, in the same order as lwho() returns dbrefs, from most recent to least recent. Only See_All players can use lports().

If lports() is given a <viewer>, only the ports of connections which <viewer> can see are returned, in the same way as lwho(<viewer>) works.

The <status> argument for lports() controls whether or not ports which are not connected to (ie, at the login screen) are included, and must be one of "all", "online" or "offline".

These port numbers also appear in the wizard WHO, and can be used with @boot/port, page/port, and the functions that return information about a connection to make them use a specific connection rather than the least-idle one when a player has multiple connections open. Players can get information about their own connections. See_all is needed to use them to get information about other people's ports.`,
		params: ['viewer', 'status'],
	},
	ports: {
		label: 'ports(<player name>)',
		documentation: `Returns the list of descriptors ("ports") that are used by connected players. ports() returns those a specific player is connected to, from most recent to least recent. Mortals can use ports() on themselves, but only See_All players can use ports() on others.

These port numbers also appear in the wizard WHO, and can be used with @boot/port, page/port, and the functions that return information about a connection to make them use a specific connection rather than the least-idle one when a player has multiple connections open. Players can get information about their own connections. See_all is needed to use them to get information about other people's ports.`,
		params: ['player name'],
	},
	lpos: {
		label: 'lpos(<string>, <character>)',
		documentation: `This function returns a list of the positions where <character> appears in <string>, with the first character of the string being 0. Note that this differs from the pos() function, but is consistent with other string functions like mid() and strdelete().

If <character> is a null argument, space is used. If <character> is not found anywhere in <string>, an empty list is returned.`,
		params: ['string', 'character'],
	},
	lreplace: {
		label: 'lreplace(<list>, <position(s)>, <new item>[, <delimiter>[, <output separator>]])',
		documentation: `This replaces the item(s) at the given <position(s)> in <list> with <new item>. <delimiter> defaults to a space, and <osep> defaults to <delimiter>. Null items are counted when determining position.

If <position> is negative, it counts backwards from the end of the list. A <position> of -1 will replace the last element, -2 the element before last, and so on.

replace() is an alias for lreplace(), for backwards compatability.`,
		params: ['list', 'position(s)', 'new item', 'delimiter', 'output separator'],
	},
	lset: {
		label: 'lset(<object>/<locktype>,[!]<flag>)',
		documentation: `This functions sets or clears flags on locks.`,
		params: ['object/locktype', 'flag'],
	},
	lstats: {
		label: 'lstats([<player>])',
		documentation: `This function returns the breakdown of objects in the database, in a format similar to "@stats". If <player> is "all" (the default), a breakdown is done for the entire database. Otherwise, the breakdown is returned for that particular player.

Only wizards and those with the Search power can LSTATS() other players. The list returned is in the format:
	<Total objects> <Rooms> <Exits> <Things> <Players> <Garbage>`,
		params: ['player'],
	},
	lthings: {
		label: 'lthings(<object>)',
		documentation: `This function returns the dbrefs of all things, dark or not, in <object>. You must be in <object> or control it to use this function.`,
		params: ['object'],
	},
	lvcon: {
		label: 'lvcon(<object>)',
		documentation: `This function returns the dbrefs of all objects that are inside <object> and visible (non-dark). You must be in <object> or control it to use this function.`,
		params: ['object'],
	},
	lvexits: {
		label: 'lvexits(<room>)',
		documentation: `This function returns the dbrefs of all visible (non-dark) exits from <room>. You must be in the room or control it to use this function.`,
		params: ['room'],
	},
	lvplayers: {
		label: 'lvplayers(<object>)',
		documentation: `This function returns the dbrefs of all connected and non-dark players in an object. You must be in the object or control it to use this function.`,
		params: ['object'],
	},
	lvthings: {
		label: 'lvthings(<object>)',
		documentation: `This function returns the dbrefs of all non-dark things inside an object. You must be in the object or control it to use this function.`,
		params: ['object'],
	},
	lwho: {
		label: 'lwho([<viewer>[, <status>]])',
		documentation: `Returns a list of the dbref numbers for all currently-connected players. When mortals use this function, the dbref numbers of hidden wizards or royalty do NOT appear on the dbref list.

If a <viewer> is given, and used by a See_All object, lwho() returns the output of lwho() from <viewer>'s point of view.

<status> can be used to include "#-1" dbrefs for unconnected ports, and must be one of "all", "online" (the default) or "offline". It is primarily useful when using a <status> with lports(), to make the dbrefs and ports match up. Only See_All players can see offline dbrefs.`,
		params: ['object'],
	},
	lwhoid: {
		label: 'lwhoid([<viewer>[, <status>]])',
		documentation: `Returns a list of objid's instead. Note: See lwho() for more information.`,
		params: ['object'],
	},
	mail: {
		label: 'mail() || mail(<player name>) || mail([<folder #>:]<mail message #>) || mail(<player>, [<folder #>:]<mail message #>)',
		documentation: `Without arguments, mail() returns the number of messages in all the player's mail folders. With a player name argument, mail() returns the number of read, unread, and cleared messages <player> has in all folders. Only Wizards can use this on other players.

When given numeric arguments, mail() returns the text of the corresponding message in the current folder. The message number may also be prefaced by the folder number and a colon, to indicate a message in a different folder.`,
		params: ['player name', 'folder #', 'mail message #'],
	},
	mailstats: {
		label: 'mailstats([<player>])',
		documentation: `The mail*stats() functions return data like @mail/*stats does. You either must use this on yourself, or you must be a wizard. The information will be joined together as a space separated list of numbers.`,
		params: ['player'],
	},
	maildstats: {
		label: 'maildstats([<player>])',
		documentation: `The mail*stats() functions return data like @mail/*stats does. You either must use this on yourself, or you must be a wizard. The information will be joined together as a space separated list of numbers.`,
		params: ['player'],
	},
	mailfstats: {
		label: 'mailfstats([<player>])',
		documentation: `The mail*stats() functions return data like @mail/*stats does. You either must use this on yourself, or you must be a wizard. The information will be joined together as a space separated list of numbers.`,
		params: ['player'],
	},
	mailfrom: {
		label: 'mailfrom([<player>, ][<folder #>:]<mail message #>)',
		documentation: `Returns the dbref number of the sender of a mail message.`,
		params: ['player', 'folder #', 'mail message #'],
	},
	mailtime: {
		label: 'mailtime([<player>, ][<folder #>:]<mail message #>)',
		documentation: `Returns the time the mail was sent.`,
		params: ['player', 'folder #', 'mail message #'],
	},
	mailstatus: {
		label: 'mailstatus([<player>, ][<folder #>:]<mail message #>)',
		documentation: `Returns the mail's status characters (as per @mail/list).`,
		params: ['player', 'folder #', 'mail message #'],
	},
	mailsubject: {
		label: 'mailsubject([<player>, ][<folder #>:]<mail message #>)',
		documentation: `Returns the subject of the message.`,
		params: ['player', 'folder #', 'mail message #'],
	},
	maillist: {
		label: 'maillist([<player>, ]<message-list>)',
		documentation: `Returns a list of all <player>'s @mail messages which match the given <message-list> (the same as @mail/list <message-list>). If no <player> is given, the executor's mail is matched. The <message-list> argument is described in 'help mail'.`,
		params: ['player', 'message list'],
	},
	mailsend: {
		label: 'mailsend(<player>,[<subject>/]<message>)',
		documentation: `This function sends a message to a player, just like @mail/send. It returns nothing if successful, or an error message.`,
		params: ['player', 'subject', 'message'],
	},
	malias: {
		label: 'malias([<delimiter>]) || malias(<malias name>) || malias(<malias name>[,<delimiter>])',
		documentation: `With no arguments, malias() returns the list of all malias names which are visible to the player. With two arguments, returns the list of dbrefs that are members of the given malias, delimited by <delimiter>.

With one argument, the behavior is ambiguous. If the argument matches a malias, returns the list of dbrefs that are memebrs of the malias, space-delimited. If not, it's treated as a no-argument case with a delimiter.`,
		params: ['delimiter', 'mail alias name'],
	},
	map: {
		label: 'map([<object>/]<attribute>, <list>[, <delim>[, <output separator>]])',
		documentation: `This function works much like ITER(). The given <attribute> is evaluated once for each element of <list>, and the results of the evaluations are returned. For each evaluation, the current list element is passed to the attribute as %0, and its position in the list as %1. Elements of <list> are separated by <delim>, or a space if none is given, and the results are returned separated by <osep>, if given, or the delimiter otherwise.`,
		params: ['object/attribute', 'list', 'delimiter', 'output separator'],
	},
	mapsql: {
		label: 'mapsql([<object>/]<attribute>, <query>[, <output separator>[, <dofieldnames>]])',
		documentation: `Performs an SQL query if the MUSH is configured to connect to an SQL database server. This function requires a WIZARD flag or the Sql_Ok power.

<query> is evaluated, so it's useful to either read it from another attribute with u() or use lit() to protect commas. If you will be interpolating user-provided values into the query, be careful to escape them with sqlescape().

Each row of the result is passed to <attribute>, with the first nine columns available as %1-%9, and twenty more available via v(10) - v(29). %0 is set to the row number, which will start with 1. The fields will also be available as named arguments, with r(<field name>, args) returning the appropriate value.

If <dofieldnames> evaluates to a true boolean, then the first call will be with row number (%0) set to 0, and %1-%9 and v(10) - v(29) will be set to the field names.`,
		params: ['object/attribute', 'query', 'output separator', 'dofieldnames'],
	},
	max: {
		label: 'max(<number1>, <number2>[, ... , <numberN>])',
		documentation: `This function returns the largest number in its list of arguments. It can take any number of arguments.`,
		params: ['number1', 'number2', 'numberN'],
	},
	mean: {
		label: 'mean(<number1>, <number2>[, ... , <numberN>])',
		documentation: `Returns the mean (arithmetic average) of its arguments.

avg() is an alias for mean(), for Rhost compatibility.`,
		params: ['number1', 'number2', 'numberN'],
	},
	median: {
		label: 'median(<number>, <number>[, ... , <numberN>)',
		documentation: `Returns the median (the middlemost numerically) of its arguments.`,
		params: ['number1', 'number2', 'numberN'],
	},
	member: {
		label: 'member(<list>, <word>[, <delimiter>])',
		documentation: `member() returns the position where <word> first occurs in <list>. If <word> is not present in <list>, it returns 0. Elements of <list> are <delimiter>-separated, or space-separated if no <delimiter> is given.

member() is case-sensitive, and does not perform wildcard matching. If you need to do a wildcard match, use match(). To compare two strings (instead of a word and list elements), consider comp().`,
		params: ['list', 'word', 'delimeter'],
	},
	merge: {
		label: 'merge(<string1>, <string2>, <characters>)',
		documentation: `This function merges <string1> and <string2>, depending on <characters>. If a character in <string1> is the same as one in <characters>, it is replaced by the character in the corresponding position in <string2>. The two strings must be of the same length.`,
		params: ['string1', 'string2', 'characters'],
	},
	message: {
		label: 'message(<recipients>, <message>, [<object>/]<attribute>[, <arg0>[, ... , <arg9>][, <switches>]])',
		documentation: `message() is the function form of @message/silent, and sends a message, formatted through an attribute, to a list of objects. See 'help @message' for more information.
  
<switches> is a space-separated list of one or more of "nospoof", "spoof", "oemit" and "remit", and makes message() behaviour as per @message/<switches>. For backwards-compatability reasons, all ten <arg> arguments must be given (even if empty) to use <switches>.`,
		params: ['recipient', 'message', 'object/attribute', 'args', 'switches'],
	},
	mid: {
		label: 'mid(<string>, <first>, <length>)',
		documentation: `Returns <length> characters from <string>, starting from the <first> character. If <length> is positive, it counts forwards from the <first> character; for negative <length>s, it counts backwards. Note that the first character in <string> is numbered 0, not 1.`,
		params: ['string', 'first', 'length'],
	},
	min: {
		label: 'min(<number>, <number>[, ... , <numberN>)',
		documentation: `This function returns the smallest number in its list of arguments. It can take any number of arguments.`,
		params: ['number1', 'number2', 'numberN'],
	},
	mix: {
		label: 'mix([<object>/]<attribute>, <list1>, <list2>[, ... , <list30>, <delim>])',
		documentation: `This function is similar to MAP(), except that it takes the elements of up to 30 lists, one by one, and passes them to the user-defined function as %0, %1, up to %9, respectively, for elements of <list1> to <list30>. Use v() to access elements 10 or higher. If the lists are of different sizes, the shorter ones are padded with empty elements. <delim> is used to separate elements; if it is not specified, it defaults to a space. If using more than 2 lists, the last argument must be a delimiter.`,
		params: ['object/attribute', 'list1', 'list2', '...', 'list30', 'delimiter'],
	},
	money: {
		label: 'money(<integer>) || money(<object>)',
		documentation: `If given an integer, money() returns the appropriate name (either singular or plural) for that amount of money, as set in the money_singular and money_plural @config options.

Otherwise, it returns the amount of money <object> has. If <object> has the no_pay power, the value of the 'max_pennies' @config option is returned. <object> must have the power itself, rather than inheriting it from its owner, in this case.`,
		params: ['integer', 'object'],
	},
	moniker: {
		label: 'moniker(<object>)',
		documentation: `Returns <object>'s accented name, with the color template from its @moniker applied. moniker() always returns the colored name, even if monikers are disabled via @config.`,
		params: ['object'],
	},
	msecs: {
		label: 'msecs(<object>)',
		documentation: `Returns the time as the number of seconds since the epoch.
		
Only things, rooms, and exits have modification times. You must be able to examine an object to see its modification time.`,
		params: ['object'],
	},
	mtime: {
		label: 'mtime(<object>[, <utc?>])',
		documentation: `Returns the date and time that one of <object>'s attributes or locks was last added, deleted, or modified. The time returned is in the server's local timezone, unless <utc?> is true, in which case the time is in the UTC timezone.
		
Only things, rooms, and exits have modification times. You must be able to examine an object to see its modification time.`,
		params: ['object', 'utc?'],
	},
	mudname: {
		label: 'mudname()',
		documentation: `Returns the name of the MUSH, as set in the 'mud_name' @config option.`,
		params: ['null'],
	},
	mudurl: {
		label: 'mudurl()',
		documentation: `Returns the MUSH's website address, as set in the 'mud_url' @config option.`,
		params: ['null'],
	},
	munge: {
		label: 'munge([<object>/]<attribute>, <list1>, <list2>[, <delimiter>[, <output separator>]])',
		documentation: `This function takes two lists of equal length. It passes the entirety of <list1> to the user-defined function as %0, and the delimiter as %1. Then, this resulting list is matched with elements in <list 2>, and the rearranged <list2> is returned.

This is useful for doing things like sorting a list, and then returning the corresponding elements in the other list. If a resulting element from the user-defined function doesn't match an element in the original <list1>, a corresponding element from <list2> does not appear in the final result. The elements are matched using an exact, case-sensitive comparision.`,
		params: ['object/attribute', 'list1', 'list2', 'delimiter', 'output separator'],
	},
	mwho: {
		label: 'mwho()',
		documentation: `Returns a list of the dbref numbers for all current-connected, non-hidden players. It's exactly the same as lwho() used by a mortal, and is suitable for use on privileged global objects who need an unprivileged who-list. In some cases, lwho(<viewer>) may be preferable to mwho(), as it includes hidden players for <viewer>s who can see them.`,
		params: ['null'],
	},
	mwhoid: {
		label: 'mwhoid()',
		documentation: `Returns a list of objids for all current-connected, non-hidden players. It's exactly the same as lwho() used by a mortal, and is suitable for use on privileged global objects who need an unprivileged who-list. In some cases, lwho(<viewer>) may be preferable to mwho(), as it includes hidden players for <viewer>s who can see them.`,
		params: ['null'],
	},
	name: {
		label: 'name(<object>[, <new name>])',
		documentation: `Returns the name of object <object>. For exits, name() returns only the displayed name of the exit.

With two arguments, name() attempts to rename <object> to <new name>, as per @name.`,
		params: ['object', 'new name'],
	},
	namegrab: {
		label: 'namegrab(<dbref list>, <name>)',
		documentation: `Returns the first dbref in the list that would match <name> as if you were checking num() or locate(). An exact match has priority over partial matches.`,
		params: ['dbref list', 'name'],
	},
	namegraball: {
		label: 'namegraball(<dbref list>, <name>)',
		documentation: `Returns all dbrefs whose names would be matched by <name>`,
		params: ['dbref list', 'name'],
	},
	namelist: {
		label: 'namelist(<player-list>[, [<object>/]<attribute>])',
		documentation: `Takes a list of players of the form used by the page command and returns a corresponding list of dbrefs. Invalid and ambiguous names return the dbrefs #-1 and #-2, respectively.

If an <object>/<attribute> is given, the specified attribute will be called once for each invalid name, with the name as %0 and the dbref returned (#-1 for an unmatched name, #-2 for an ambiguous one) as %1.`,
		params: ['dbref list', 'name'],
	},
	nattr: {
		label: 'nattr(<object>[/<attribute pattern>])',
		documentation: `Returns the number of attributes on <object> that you can see which match the given <attribute pattern>. It is considerably faster than words(lattr()) and doesn't suffer from buffer length constraints. It's designed primarily for statistical purposes. <attribute pattern> defaults to "*", which does not include branches in attribute trees; use "**" if you need to count attribute trees.
		
		attrcnt() ia an aliase for nattr().`,
		params: ['object/attribute pattern'],
	},
	nattrp: {
		label: 'nattrp(<object>[/<attribute pattern>])',
		documentation: `Returns the number of attributes on <object> that you can see which match the given <attribute pattern>. It is considerably faster than words(lattr()) and doesn't suffer from buffer length constraints. It's designed primarily for statistical purposes. <attribute pattern> defaults to "*", which does not include branches in attribute trees; use "**" if you need to count attribute trees. Also counts matching attributes on the parent.
		
		attrpcnt() is an alias for nattrp().`,
		params: ['object/attribute pattern'],
	},
	regnattr: {
		label: 'regnattr(<object>[/<attribute pattern>])',
		documentation: `Matches attribute names against the regular expression <regexp>.`,
		params: ['object/regexp'],
	},
	regnattrp: {
		label: 'regnattrp(<object>[/<attribute pattern>])',
		documentation: `Counts matching attributes on the parent, see regnattr().`,
		params: ['object/regexp'],
	},
	ncon: {
		label: 'ncon(<object>)',
		documentation: `Returns a the number of objects inside <object>. It is identical to words(lcon(<object>)), but is more efficient and does not suffer from buffer constraints.`,
		params: ['object'],
	},
	nvcon: {
		label: 'nvcon(<object>)',
		documentation: `Returns a the number of objects inside <object>. It is identical to words(lvcon(<object>)), but is more efficient and does not suffer from buffer constraints.`,
		params: ['object'],
	},
	nearby: {
		label: 'nearby(<object 1>, <object 2>)',
		documentation: `Returns 1 if <object 1> is "nearby" <object 2>, and 0 otherwise. "Nearby" means the objects are in the same location, or that one is located inside the other. You must control at least one of the objects; if you don't, or if one of the objects can't be found, nearby() returns #-1.`,
		params: ['object 1', 'object 2'],
	},
	nexits: {
		label: 'nexits(<room>)',
		documentation: `Returns a count of the exits in a room. It is equivilent to words(lexits(<room>)), though is more efficient, and does not suffer from buffer constraints.`,
		params: ['room'],
	},
	nvexits: {
		label: 'nvexits(<room>)',
		documentation: `Returns a count of the exits in a room. It is equivilent to words(lvexits(<room>)), though is more efficient, and does not suffer from buffer constraints.`,
		params: ['room'],
	},
	next: {
		label: 'next(<object>)',
		documentation: `If <object> is an exit, then next() will return the next exit in <object>'s source room. If <object> is a thing or a player, then next() will return the next object in the contents list of <object>'s location. Otherwise, it returns a #-1. #-1 is also used to denote that there are no more exits or objects after <object>.

You can get the complete contents of any container you may examine, regardless of whether or not objects are dark. You can get the partial contents (obeying DARK/LIGHT/etc.) of your current location or the enactor (%#). You CANNOT get the contents of anything else, regardless of whether or not you have objects in it. These rules apply to exits, as well.`,
		params: ['object'],
	},
	nextdbref: {
		label: 'nextdbref()',
		documentation: `This function returns the next dbref on the free list; when the next object is @created (or @dug, or @opened, or @pcreated, etc.), it will have this dbref.`,
		params: ['null'],
	},
	nwho: {
		label: 'nwho(<viewer>)',
		documentation: `Returns a count of all currently-connected players. When mortals use this function, hidden players are NOT counted. See_All players can specify a <viewer> to get a count of the number of players that <viewer> can see is online.`,
		params: ['viewer'],
	},
	nmwho: {
		label: 'nmwho()',
		documentation: `Returns a count of all currently connected, non-hidden players. It's exactly the same as nwho() used by a mortal, and is suitable for use on privileged global objects that always need an unprivileged count of who is online.`,
		params: ['null'],
	},
	nplayers: {
		label: 'nplayers(<object>)',
		documentation: `Returns a count of the players in <object>. It is equivilent to words(lplayers(<object>)), though is more efficient and does not suffer from buffer constraints.`,
		params: ['object'],
	},
	nvplayers: {
		label: 'nvplayers(<object>)',
		documentation: `Returns a count of the players in <object>. It is equivilent to words(lvplayers(<object>)), though is more efficient and does not suffer from buffer constraints.`,
		params: ['object'],
	},
	oemit: {
		label: 'oemit([<room>/]<object> [... <object>], <message>)',
		documentation: `Sends <message> to all objects in <room> (default is the location of <object>(s)) except <object>(s), as per @oemit.`,
		params: ['room', 'object', 'message'],
	},
	nsoemit: {
		label: 'nsoemit([<room>/]<object> [... <object>], <message>)',
		documentation: `Sends <message> to all objects in <room> (default is the location of <object>(s)) except <object>(s), as per @oemit. It is exactly the same as nsoemit(), but does not produce nospoof information when used by players with the Can_spoof @power.
		
nsoemit() works like @nsoemit.`,
		params: ['room', 'object', 'message'],
	},
	pemit: {
		label: 'pemit(<object list|port numbers>, <message>)',
		documentation: `With an <object list>, will send each object on the list a message, as per the @pemit/list command. It returns nothing. It respects page-locks and HAVEN flags on players. With <port numbers>, it sends the message to the specified ports only, like @pemit/port/list.`,
		params: ['object list|port numbers', 'message'],
	},
	nspemit: {
		label: 'nspemit(<object list|port numbers>, <message>)',
		documentation: `With an <object list>, will send each object on the list a message, as per the @pemit/list command. It returns nothing. It respects page-locks and HAVEN flags on players. With <port numbers>, it sends the message to the specified ports only, like @pemit/port/list. It is exactly the same as pemit(), but does not produce nospoof information when used by players with the Can_spoof @power.
		
nspemit() works like @nspemit/list.`,
		params: ['object list|port numbers', 'message'],
	},
	prompt: {
		label: 'prompt(<object list>, <message>)',
		documentation: `With an <object list>, will send each object on the list a message, as per the @pemit/list command. It returns nothing. It respects page-locks and HAVEN flags on players.
		
prompt() adds a telnet GOAHEAD to the end of the message, as per the @prompt command.`,
		params: ['object list', 'message'],
	},
	nsprompt: {
		label: 'nsprompt(<object list>, <message>)',
		documentation: `With an <object list>, will send each object on the list a message, as per the @pemit/list command. It returns nothing. It respects page-locks and HAVEN flags on players. It is exactly the same as prompt(), but does not produce nospoof information when used by players with the Can_spoof @power.
		
nsprompt() works like @nsprompt.`,
		params: ['object list', 'message'],
	},
	remit: {
		label: 'remit(<object list>, <message>)',
		documentation: `Sends a message to the contents of all the objects specified in <object list>, as per @remit/list.`,
		params: ['object list', 'message'],
	},
	nsremit: {
		label: 'remit(<object list>, <message>)',
		documentation: `Sends a message to the contents of all the objects specified in <object list>, as per @remit/list. It is exactly the same as remit(), but does not produce nospoof information when used by players with the Can_spoof @power.
		
nsremit() works like @nsremit/list.`,
		params: ['object list', 'message'],
	},
	zemit: {
		label: 'zemit(<zone>, <message>)',
		documentation: `Emits <message> in every room @chzone'd to <zone>, as per @zemit.`,
		params: ['object list', 'message'],
	},
	nszemit: {
		label: 'nszemit(<zone>, <message>)',
		documentation: `Emits <message> in every room @chzone'd to <zone>, as per @zemit. It is exactly the same as zemit(), but does not produce nospoof information when used by players with the Can_spoof @power.
		
nszemit() works like @nszemit.`,
		params: ['object list', 'message'],
	},
	null: {
		label: '@@(<expression>) } || null(<expression>[, ... , <expression>])',
		documentation: `The @@() function does nothing and returns nothing. It does not evaluate its argument. It could be used for commenting, perhaps.

The null() function is similar, but does evaluate its argument(s), so side-effects can occur within a null(). Useful for eating the output of functions when you don't use that output.`,
		params: ['expression'],
	},
	num: {
		label: 'num(<object>)',
		documentation: `Returns the dbref number of <object>. <object> must reference a valid object.`,
		params: ['object'],
	},
	numversion: {
		label: 'numversion()',
		documentation: `Returns an integer representation of the version/patchlevel which can be used for softcode comparison.`,
		params: ['null'],
	},
	version: {
		label: 'version()',
		documentation: `Returns a string which contains various version information for the MUSH you're on.`,
		params: ['null'],
	},
	nthings: {
		label: 'nthings(<object>)',
		documentation: `Returns a count of the things in a container. It is equivilent to words(lthings(<object>)), though is more efficient and does not suffer from buffer constraints.`,
		params: ['object'],
	},
	nvthings: {
		label: 'nvthings(<object>)',
		documentation: `Returns a count of the things in a container. It is equivilent to words(lvthings(<object>)), though is more efficient and does not suffer from buffer constraints.`,
		params: ['object'],
	},
	obj: {
		label: 'obj(<object>)',
		documentation: `Returns the objective pronoun - him/her/it - for an object. The %o substitution will return the objective pronoun of the enactor.`,
		params: ['object'],
	},
	objeval: {
		label: 'objeval(<object>, <expression>)',
		documentation: `Allows you to evaluate <expression> from the viewpoint of <object>. If side-effect functions are enabled, you must control <object>; if not, you must either control <object> or have the see_all power. If <object> does not exist or you don't meet one of the criterion, the expression evaluates with your privileges.`,
		params: ['object', 'expression'],
	},
	objid: {
		label: 'objid(<object>)',
		documentation: `This function returns the object id of <object>, a value which uniquely identifies it for the life of the MUSH. The object id is the object's dbref, a colon character, and the object's creation time, in seconds since the epoch, equivilent to [num(<object>)]:[csecs(<object>)]

The object id can be used nearly anywhere the dbref can, and ensures that if an object's dbref is recycled, the new object won't be mistaken for the old object.

The substitution %: returns the object id of the enactor.`,
		params: ['object'],
	},
	objmem: {
		label: 'objmem(<object>)',
		documentation: `This function returns the amount of memory, in bytes, being used by the object. It can only be used by players with Search powers.`,
		params: ['object'],
	},
	oob: {
		label: 'oob(<player>, <package>[, <message>])',
		documentation: `This function sends an out-of-band message to <player> using the General MUD Communication Protocol (GMCP - http://www.gammon.com.au/gmcp) or a WebSocket. <package> is the name of the package/message type. 

You must be a wizard or have the Send_OOB power to send messages to anyone but yourself.

If specified, <message> is a JSON-formatted message to be sent. Use the JSON() function to construct valid JSON.

Returns the number of descriptors the message was sent to on success, or a string starting with #-1 on error.`,
		params: ['player', 'package', 'message'],
	},
	open: {
		label: 'open(<exit name>[, <destination>[, <source>[, <dbref>]]])',
		documentation: `This function attempts to open an exit named <exit name>. The exit will be opened in the room <source>, if given, or the caller's current location if no <source> is specified.

If a <destination> is given, it will attempt to link the exit to <destination> after opening it.

Wizards and objects with the pick_dbref power can specify a garbage dbref to use for the new exit.

It returns the dbref of the newly created exit, or #-1 on error.`,
		params: ['exit name', 'destination', 'source', 'dbref'],
	},
	ordinal: {
		label: 'ordinal(<integer>)',
		documentation: `Given an integer, return its written-out ordinal representation in words.`,
		params: ['integer'],
	},
	orflags: {
		label: 'orflags(<object>, <string of flag characters>)',
		documentation: `Returns a 1 if <object> has any of the given flags, and 0 if it does not. orflags() takes a string of single flag letters. A ! before the flag means "not flag".

If there is a syntax error like a ! without a following flag, '#-1 INVALID FLAG' is returned. Unknown flags are treated as being not set.`,
		params: ['object', 'string of flag characters'],
	},
	orlflags: {
		label: 'orlflags(<object>, <list of flag names>)',
		documentation: `Returns a 1 if <object> has any of the given flags, and 0 if it does not. orlflags() takes a space-separated list of flag names. A ! before the flag means "not flag".
		
If there is a syntax error like a ! without a following flag, '#-1 INVALID FLAG' is returned. Unknown flags are treated as being not set.`,
		params: ['object', 'list of flag names'],
	},
	orlpowers: {
		label: 'orlpowers(<object>, <list of powers>)',
		documentation: `Returns a 1 if <object> has at least one of the powers in a specified list, and 0 if it does not. The list is a space-separated list of power names. A '!' preceding a flag name means "not power".

Thus, ORLPOWERS(me, poll login) would return 1 if I have the poll and login powers. ORLFLAGS(me, functions !guest) would return 1 if I have the functions power or are not a guest.

If there is a syntax error like a ! without a following power, '#-1 INVALID POWER' is returned. Unknown powers are treated as being not set.`,
		params: ['object', 'list of powers'],
	},
	owner: {
		label: 'owner(<object>[/<attribute>]) || owner(<object>[/<attribute>], <new owner>[, preserve])',
		documentation: `Given just an object, it returns the owner of the object. Given an object/attribute pair, it returns the owner of that attribute.

If <new owner> is specified, the ownership is changed, as in @chown or @atrchown. If the optional third argument is "preserve", privileged flags and powers will be preserved ala @chown/preserve.

If changing ownership, #-1 or 0 is returned on failure, 1 on success.`,
		params: ['object/attribute', 'new owner', 'preserve'],
	},
	parent: {
		label: 'parent(<object>[, <new parent>])',
		documentation: `This function returns the dbref number of an object's parent. You must be able to examine the object to do this. If you specify a second argument, parent() attempts to change the parent first. You must control <object>, and be allowed to @parent to <new parent>.`,
		params: ['object', 'new parent'],
	},
	pcreate: {
		label: 'pcreate(<name>, <password>[, <dbref>])',
		documentation: `Creates a player with a given <name> and <password>. This function can only be used by wizards.

The optional third argument can be used to specify a garbage object to use for the new player.`,
		params: ['name', 'password', 'dbref'],
	},
	pfun: {
		label: 'pfun(<attribute>[, <arg0>[, ... , <arg29>]])',
		documentation: `This function evaluates <attribute> from the caller's @parent, passing up to 30 <arg>s as %0-%9 and v(10)-v(29). When the caller doesn't have an <attribute> attribute set, this is the same as

ufun(me/<attribute>[, <args>])

It differs from ufun() when the caller does have the attribute set - pfun() will ignore the attribute on the child, and evaluate the attribute as it would be inherited from the parent.`,
		params: ['attribute', 'args'],
	},
	pi: {
		label: 'pi()',
		documentation: `Returns the value of "pi" (3.14159265358979323846264338327, rounded to the game's float_precision setting).`,
		params: ['null'],
	},
	pidinfo: {
		label: 'pidinfo(<pid>[, <list of fields>[, <output separator>]])',
		documentation: `This function returns information about a process id if the player has permission to see the process. The <list of fields> is a space-separated list that may contain the following elements:

queue       the queue ("wait" or "semaphore") for the process
executor    the queueing object
time        remaining time for timed queued entries (or -1)
object      the semaphore object for semaphores (or #-1)
attribute   the semaphore attribute for semaphores (or #-1)
command     the queued command

If <list of fields> is not provided, all fields are returned. The fields are separated by <output separator>, which defaults to a space.`,
		params: ['pid', 'list of fields', 'output separator'],
	},
	player: {
		label: 'player(<port>)',
		documentation: `Returns the dbref of the player connected to a given port. Mortals can only use this function on their own ports, while See_All players can use it on any port.`,
		params: ['port'],
	},
	playermem: {
		label: 'playermem(<player>)',
		documentation: `This function returns the amount of memory, in bytes, being used by everything owned by the player. It can only be used by players with Search powers.`,
		params: ['player'],
	},
	pmatch: {
		label: 'pmatch(<name>)',
		documentation: `Attempts to find a player called <name>, which should be the full or partial name of a player (possibly prefixed with a "*") or a dbref. First, it checks to see if <name> is the dbref, full name, or alias of a player; if so, their dbref is returned. Otherwise, it checks for partial matches against the names of online players. If there are no matches, #-1 is returned. If there are multiple matches, pmatch() returns #-2. Otherwise, the matching player's dbref is returned.`,
		params: ['name'],
	},
	poll: {
		label: 'poll()',
		documentation: `Returns the current @poll.`,
		params: ['null'],
	},
	pos: {
		label: 'pos(<needle>, <haystack>)',
		documentation: `This function returns the position that <needle> begins in <haystack>. Unlike most other string functions, the first character of <haystack> is numbered 1, not 0. If <needle> is not present in <haystack>, pos() returns #-1.`,
		params: ['needle', 'haystack'],
	},
	poss: {
		label: 'poss(<object>)',
		documentation: `Returns the possessive pronoun - his/her/its - for an object. The %p substitution also returns the possessive pronoun of the enactor.`,
		params: ['object'],
	},
	power: {
		label: 'power(<number>, <exponent>)',
		documentation: `Returns <number> to the power of <exponent>.`,
		params: ['number', 'exponent'],
	},
	powers: {
		label: 'powers(<object>, <power>)',
		documentation: `With no arguments, powers() returns a space-separated list of all defined @powers on the MUSH. With one argument, it returns a list of the powers possessed by <object>.

With two arguments, it attempts to set <power> on <object>, as per @power <object>=<power>.`,
		params: ['object', 'power'],
	},
	pueblo: {
		label: 'pueblo(<player|descriptor>)',
		documentation: `This function returns 1 if the given player or descriptor is currently Pueblo-enabled, and 0 otherwise. 
  
If used on a player/descriptor which is not connected, pueblo() returns #-1 NOT CONNECTED. Mortals can only give a <descriptor> for their own connections (but can give any <player> arg), while See_All objects can check any descriptor.
  
When used with a <player> argument, the most recently active connection is used if the <player> is logged in more than once.`,
		params: ['player|descriptor'],
	},
	quota: {
		label: 'quota(<player>)',
		documentation: `Returns the player's quota, the maximum number of objects they can create if quotas are in effect. Returns 99999 for players with the No_Quota @power, so it's safe to use in numerical comparisons.

You must control <player> or have the See_All or Quotas @powers to use this function.`,
		params: ['player'],
	},
	r: {
		label: 'r(<register>[, <type>])',
		documentation: `The r() function can be used to access registers. It can retrieve the value of q-registers set with setq() and related functions, as well as the 30 stack values (the first ten of which are also available via %0-%9), and also iter() and switch() context (also available through itext() and stext(), respectively). The registers() function can be used to obtain a list of available registers.`,
		params: ['register', 'type'],
	},
	rand: {
		label: 'rand() || rand(<num>) || rand(<min>, <max>)',
		documentation: `Returns a random number.

The first form returns a floating-point number in the range 0 <= n < 1.

The second form returns an integer between 0 and <num>-1, inclusive (or between 0 and <num>+1, for negative <num>s).

The third returns an integer between <min> and <max>, inclusive.

  If called with an invalid argument, rand() returns an error message
  beginning with #-1.`,
		params: ['num', 'min', 'max'],
	},
	randextract: {
		label: 'randextract(<list>[, <count>[, <delimiter>[, <type>[, <output separator>]]]])',
		documentation: `Returns up to <count> random elements from the <delim>-separated <list>. The following <type>s are available:
    R - Grab <count> elements from <list> at random, but don't duplicate any elements
    L - Grab <count> elements from <list>, in order, starting at a random element
	D - Grab <count> elements from <list> at random, with duplicates allowed

randextract() may return less than <count> elements for <type>s L and R, depending on the random element chosen and the length of <list>. Elements of the returned list are separated by <osep>, which defaults to <delim>. <delim> defaults to a single space, <count> defaults to 1, and <type> defaults to R.`,
		params: ['list', 'count', 'delimiter', 'type', 'output separator'],
	},
	randword: {
		label: 'randword(<list>[, <delimiter>])',
		documentation: `Returns a randomly selected element from <list>. Elements of the list are separated by <delimiter>, which defaults to a space.

pickrand() is an alias for randword().`,
		params: ['list', 'delimiter'],
	},
	recv: {
		label: 'recv(<player|descriptor>)',
		documentation: `Returns the number of characters received by a player during this connection as indicated by SESSION.

You must be a Wizard, Royalty or See_All to use this function on anyone but yourself.`,
		params: ['player|descriptor'],
	},
	regedit: {
		label: 'regedit(<string>, <regexp>, <replace>[, ... , <regexpN>, <replaceN>])',
		documentation: `Edits <string>, replacing the part of the string which matches the regular expression <regexp> with the accompanying <replace>. In <replace>, the string "$<number>" is expanded during evaluation to the <number>th sub-expression, with $0 being the entire matched section. If you use named sub-expressions (?P<name>subexpr), they are referred to with "$<name>". Note that, with named sub-expressions, the "<>" are literal.
		
regedit() only replaces the first match. If you want to replace all matches, use regeditall() instead. The function versions ending in 'i' are case insensitive.`,
		params: ['string', 'regexp', 'replace'],
	},
	regediti: {
		label: 'regediti(<string>, <regexp>, <replace>[, ... , <regexpN>, <replaceN>])',
		documentation: `Edits <string>, replacing the part of the string which matches the regular expression <regexp> with the accompanying <replace>. In <replace>, the string "$<number>" is expanded during evaluation to the <number>th sub-expression, with $0 being the entire matched section. If you use named sub-expressions (?P<name>subexpr), they are referred to with "$<name>". Note that, with named sub-expressions, the "<>" are literal.
		
regediti() only replaces the first match and is case insensitive. If you want to replace all matches, use regeditalli() instead.`,
		params: ['string', 'regexp', 'replace'],
	},
	regeditall: {
		label: 'regeditall(<string>, <regexp>, <replace>[, ... , <regexpN>, <replaceN>])',
		documentation: `Edits <string>, replacing the part of the string which matches the regular expression <regexp> with the accompanying <replace>. In <replace>, the string "$<number>" is expanded during evaluation to the <number>th sub-expression, with $0 being the entire matched section. If you use named sub-expressions (?P<name>subexpr), they are referred to with "$<name>". Note that, with named sub-expressions, the "<>" are literal.
		
regeditall() replaces all matches. If you want to replace only the first match, use regedit() instead. The function versions ending in 'i' are case insensitive.`,
		params: ['string', 'regexp', 'replace'],
	},
	regeditalli: {
		label: 'regeditalli(<string>, <regexp>, <replace>[, ... , <regexpN>, <replaceN>])',
		documentation: `Edits <string>, replacing the part of the string which matches the regular expression <regexp> with the accompanying <replace>. In <replace>, the string "$<number>" is expanded during evaluation to the <number>th sub-expression, with $0 being the entire matched section. If you use named sub-expressions (?P<name>subexpr), they are referred to with "$<name>". Note that, with named sub-expressions, the "<>" are literal.
		
regeditalli() replaces all matches and is case insensitive. If you want to replace only the first match, use regediti() instead.`,
		params: ['string', 'regexp', 'replace'],
	},
	registers: {
		label: 'registers([<pattern>[, <types>[, <output separator>]]])',
		documentation: `The registers() function returns a list of the names of all existing registers of the specified <types>. <types> is a space-separated list containing zero or more of:

    qregisters - registers set with setq(), setr() and similar functions
    args       - %0-%9 arguments
    iter       - itext() context from iter() or @dolist
    switch     - stext() context from switch() or @switch
    regexp     - regexp capture names

If <types> is empty, all types of registers are included. If <pattern> is specified, only registers whose name matches <pattern> will be included. The results are separated by <output separator>, which defaults to a single space.

The list returned may contain duplicates (for instance, if %0 and %q0 both have a value, the list will include "0" twice), and is not sorted in any particular order.`,
		params: ['pattern', 'types', 'output separator'],
	},
	reglmatch: {
		label: 'reglmatch(<list>, <regexp>[, <delimiter>])',
		documentation: `This is the regexp versions of match() and matchall(). reglmatch() returns the position of the first element in <list> which matches the regular expression <regexp>.`,
		params: ['list', 'regexp', 'delimiter'],
	},
	reglmatchi: {
		label: 'reglmatchi(<list>, <regexp>[, <delimiter>])',
		documentation: `This is the regexp versions of match() and matchall(). reglmatchi() returns the position of the first element in <list> which matches the regular expression <regexp> case-insensitively.`,
		params: ['list', 'regexp', 'delimiter'],
	},
	reglmatchall: {
		label: 'reglmatchall(<list>, <regexp>[, <delimiter>[, <output separator>]])',
		documentation: `Returns the positions of all elements in <list> which match <regexp>.`,
		params: ['list', 'regexp', 'delimiter', 'output separator'],
	},
	reglmatchalli: {
		label: 'reglmatchalli(<list>, <regexp>[, <delimiter>[, <output separator>]])',
		documentation: `Returns the positions of all elements in <list> which match <regexp> case-insensitively.`,
		params: ['list', 'regexp', 'delimiter', 'output separator'],
	},
	regxattr: {
		label: 'regxattr(<object>[/<regexp>], <start>, <count>[, <osep>])',
		documentation: `Matches attributes against the regular expression <regexp>.`,
		params: ['object/regexp', 'start', 'count', 'output separator'],
	},
	regxattrp: {
		label: 'regxattrp(<object>[/<regexp>], <start>, <count>[, <osep>])',
		documentation: `Matches attributes against the regular expression <regexp> and includes attributes from parents and are listed after child attributes, not alphabetically.`,
		params: ['object/regexp', 'start', 'count', 'output separator'],
	},
	xattr: {
		label: 'xattr(<object>[/<attribute pattern>], <start>, <count>[, <osep>])',
		documentation: `Fetches <count> or fewer attribute names from <object> starting at position <start>. It is useful when the number of attributes on an object causes lattr() to exceed the buffer limit. The resulting list is separated by <osep>, which defaults to a space. <start> begins at 1.`,
		params: ['object/attribute pattern', 'start', 'count', 'output separator'],
	},
	xattrp: {
		label: 'xattrp(<object>[/<attribute pattern>], <start>, <count>[, <osep>])',
		documentation: `Fetches <count> or fewer attribute names from <object> starting at position <start>. It is useful when the number of attributes on an object causes lattr() to exceed the buffer limit. The resulting list is separated by <osep>, which defaults to a space. <start> begins at 1. It includes attributes from parents and are listed after child attributes, not alphabetically.`,
		params: ['object/attribute pattern', 'start', 'count', 'output separator'],
	},
	remove: {
		label: 'remove(<list>, <words>[, <delimiter>])',
		documentation: `This function removes the first occurrence of every word in the list <words> from <list>, and returns the resulting <list>. It is case sensitive.

Elements of <list> and <words> are both separated by <delimiter>, which defaults to a space.`,
		params: ['list', 'words', 'delimiter'],
	},
	render: {
		label: 'render(<string>, <formats>)',
		documentation: `This function renders the given <string> into a given format. Most useful when coding bots, or inserting text into an SQL database to display on a website. <formats> is a space-separated list of one or more of the following:

    ansi      --  Convert colors to raw ANSI tags (requires Can_Spoof power)
    html      --  Escape HTML entities (< to &lt;, etc) and convert Pueblo to HTML tags
    noaccents --  Downgrade accented characters, as per stripaccents()
    markup    --  Leave any markup not already converted by ansi/html as internal markup tags. Without this, unhandled markup will be stripped, as per stripansi()`,
		params: ['string', 'formats'],
	},
	repeat: {
		label: 'repeat(<string>, <number>)',
		documentation: `This function simply repeats <string>, <number> times. No spaces are inserted between each repetition.`,
		params: ['string', 'number'],
	},
	restarts: {
		label: 'restarts()',
		documentation: `Returns the number of times the server has been rebooted with @shutdown/reboot since the last full startup.`,
		params: ['null'],
	},
	restarttime: {
		label: 'restarttime()',
		documentation: `Returns the time the MUSH was last restarted, including @shutdown/reboots. The times are in the same format as time().`,
		params: ['null'],
	},
	starttime: {
		label: 'starttime()',
		documentation: `Returns the time the MUSH was last started. The times are in the same format as time().`,
		params: ['null'],
	},
	reswitch: {
		label: 'reswitch(<str>, <re1>, <list1>[, ... , <reN>, <listN>][, <default>])',
		documentation: `This function is just like switch() except it compares <string> against a series of regular expressions, not wildcard patterns. It returns the <list> which corresponds to the first matched <re>. The string "#$" in the <list>s will be replaced with the value of <str>, /before/ <list> is evaluated. You can also use $N in <list> to refer to the Nth subpattern which matched in <re>, with $0 being the entire matching string. Use $<name> (the '<>' are literal) to refer to named subpatterns.
		
It is case-sensitive, for case-insensitive, check reswitchi().`,
		params: ['string', 're1', 'list1', 'reN', 'listN', 'default'],
	},
	reswitchall: {
		label: 'reswitchall(<str>, <re1>, <list1>[, ... , <reN>, <listN>][, <default>])',
		documentation: `This function is just like switch() except it compares <string> against a series of regular expressions, not wildcard patterns. It returns the <list>s corresponding to all matched <re>s. If no <re>s match, all four functions return <default>. The string "#$" in the <list>s will be replaced with the value of <str>, /before/ <list> is evaluated. You can also use $N in <list> to refer to the Nth subpattern which matched in <re>, with $0 being the entire matching string. Use $<name> (the '<>' are literal) to refer to named subpatterns. It is case-sensitive, for case-insensitive, check reswitchalli().`,
		params: ['string', 're1', 'list1', 'reN', 'listN', 'default'],
	},
	reswitchi: {
		label: 'reswitchi(<str>, <re1>, <list1>[, ... , <reN>, <listN>][, <default>])',
		documentation: `This function is just like switch() except it compares <string> against a series of regular expressions, not wildcard patterns. It returns the <list> which corresponds to the first matched <re>. The string "#$" in the <list>s will be replaced with the value of <str>, /before/ <list> is evaluated. You can also use $N in <list> to refer to the Nth subpattern which matched in <re>, with $0 being the entire matching string. Use $<name> (the '<>' are literal) to refer to named subpatterns.
		
It is case-insensitive, for case-sensitive, check reswitch().`,
		params: ['string', 're1', 'list1', 'reN', 'listN', 'default'],
	},
	reswitchalli: {
		label: 'reswitchalli(<str>, <re1>, <list1>[, ... , <reN>, <listN>][, <default>])',
		documentation: `This function is just like switch() except it compares <string> against a series of regular expressions, not wildcard patterns. It returns the <list>s corresponding to all matched <re>s. If no <re>s match, all four functions return <default>. The string "#$" in the <list>s will be replaced with the value of <str>, /before/ <list> is evaluated. You can also use $N in <list> to refer to the Nth subpattern which matched in <re>, with $0 being the entire matching string. Use $<name> (the '<>' are literal) to refer to named subpatterns.
		
It is case-insensitive, for case-sensitive, check reswitchall().`,
		params: ['string', 're1', 'list1', 'reN', 'listN', 'default'],
	},
	revwords: {
		label: 'revwords(<list>[, <delimiter>[, <output separator>]])',
		documentation: `This function reverses the order of words in a list. List elements are separated by <delimiter>, which defaults to a space. Elements in the reversed list are separated by <ouput separator>, which defaults to the delimiter.`,
		params: ['list', 'delimiter', 'output separator'],
	},
	right: {
		label: 'right(<string>, <length>)',
		documentation: `Returns the <length> rightmost characters from <string>.`,
		params: ['string', 'length'],
	},
	rjust: {
		label: 'rjust(<string>, <length>[, <fill>[, <truncate?>]])',
		documentation: `This function returns <string>, padded on the left with the string <fill> until it's <length> characters long. <fill> can be more than one character in length, and defaults to a single space.

If <string> is longer than <length>, it will be returned unaltered, unless <truncate?> is true, in which case only the last <length> characters of <string> are returned.`,
		params: ['string', 'length', 'fill', 'truncate'],
	},
	rloc: {
		label: 'rloc(<object>, <levels>)',
		documentation: `This function may be used to the get the location of <object>'s location (and on through the levels of locations), substituting for repeated nested loc() calls. <levels> indicates the number of loc()-equivalent calls to make; i.e., loc(loc(<object>)) is equivalent to rloc(<object>,2). rloc(<object>,0) is equivalent to num(<object>), and rloc(<object>,1) is equivalent to loc(<object>).

If rloc() encounters a room, the dbref of that room is returned. If rloc() encounters an exit, the dbref of that exit's destination is returned. You must control <object>, be near it, or it must be a findable player.`,
		params: ['object', 'levels'],
	},
	rnum: {
		label: 'rnum(<container>, <object>)',
		documentation: `This function looks for an object called <object> located inside <container>. If a single matching object is found, its dbref is returned. If several matching objects are found, #-2 is returned, and if nothing matches, or you lack permission, #-1 is returned.

You must be in <container>, or be able to examine it, to use this function.

This function has been deprecated and may be removed in a future patchlevel; locate(<container>, <object>, i) should be used instead.
`,
		params: ['container', 'object'],
	},
	room: {
		label: 'room(<object>)',
		documentation: `Returns the "absolute" location of an object. This is always a room; it is the container of all other containers of the object. The "absolute" location of an object is the place @lemit messages are sent to and NO_TEL status determined. You must control the object, be See_All, or be near the object in order for this function to work. The exception to this are players; if <object> is a player, the ROOM() function may be used to find the player's absolute location if the player is not set UNFINDABLE.`,
		params: ['object'],
	},
	root: {
		label: 'root(<number>, <n>)',
		documentation: `Returns the n-th root of <number>. The 2nd root is the square root, the 3rd the cube root, and so on.`,
		params: ['number', 'n'],
	},
	s: {
		label: 's(<string>)',
		documentation: `This function performs a second round of evaluation on <string>, and returns the result. It should be considered extremely dangerous to use on user input, or any other string which you don't have complete control over. There are very few genuine uses for this function; things can normally be achieved another, safer way.`,
		params: ['string'],
	},
	scan: {
		label: 'scan(<looker>, <command>[, <switches>]) || scan(<command>)',
		documentation: `This function works like @scan, and returns a space-separated list of dbref/attribute pairs containing $-commands that would be triggered if <command> were run by <looker>. You must control <looker> or be See_All to use this function. Only objects you can examine are included in the output.

If no <looker> is specified, it defaults to the executor.

<switches> is a space-separated list of strings to limit which objects are checked for $-commands. Valid switches are:
    room      --  check <looker>'s location and its contents
    me        --  check <looker>
    inventory --  check objects in <looker>'s inventory
    self      --  check <looker> and objects in <looker>'s inventory
    zone      --  check <looker>'s location's zone, and <looker>'s own zone
    globals   --  check objects in the Master Room
    all       --  all of the above (the default)
    break     --  once a match is found, don't check in other locations`,
		params: ['looker', 'command', 'switches'],
	},
	scramble: {
		label: 'scramble(<string>)',
		documentation: `This function scrambles a string, returning a random permutation of its characters. Note that this function does not pay any attention to spaces or other special characters; it will scramble these characters just like normal characters.`,
		params: ['string'],
	},
	secs: {
		label: 'secs()',
		documentation: `This function takes no arguments, and returns the number of elapsed seconds since midnight, January 1, 1970 UTC. UTC is the base time zone, formerly GMT. This is a good way of synchronizing things that must run at a certain time.`,
		params: ['null'],
	},
	secscalc: {
		label: 'secscalc(<timestring>, <modifier>, ...)',
		documentation: `Takes a time and returns the resulting time after applying any modifiers. It returns the seconds since the epoch. It can deal with a much broader range of times than the other time functions.

<timestring> can be in the following formats:

	YYYY-MM-DD
	YYYY-MM-DD HH:MM
	YYYY-MM-DD HH:MM:SS
	YYYY-MM-DD HH:MM:SS.SSS
	HH:MM
	HH:MM:SS
	HH:MM:SS.SSS
	now (Current time in UTC)
	DDDDDDDDDD (Julian day, or seconds if followed by a unixepoch modifier)`,
		params: ['timestring', 'modifier'],
	},
	timecalc: {
		label: 'secscalc(<timestring>, <modifier>, ...)',
		documentation: `Takes a time and returns the resulting time after applying any modifiers. It returns a time is the same format as time(). It can deal with a much broader range of times than the other time functions.

<timestring> can be in the following formats:

	YYYY-MM-DD
	YYYY-MM-DD HH:MM
	YYYY-MM-DD HH:MM:SS
	YYYY-MM-DD HH:MM:SS.SSS
	HH:MM
	HH:MM:SS
	HH:MM:SS.SSS
	now (Current time in UTC)
	DDDDDDDDDD (Julian day, or seconds if followed by a unixepoch modifier)`,
		params: ['timestring', 'modifier'],
	},
	secure: {
		label: 'secure(<string>)',
		documentation: `This function returns <string> with all "dangerous" characters replaced by spaces. Dangerous characters are:

    ( ) [ ] { } $ % , ^ ;

Note that the use of this function is very rarely needed.`,
		params: ['string'],
	},
	sent: {
		label: 'sent(<player|descriptor>)',
		documentation: `Returns the number of characters sent by a player during this connection as indicated by SESSION.

You must be a Wizard, Royalty or See_All to use this function on anyone but yourself.`,
		params: ['player|descriptor'],
	},
	set: {
		label: 'set(<object>[/<attribute>], <flag>) || set(<object>, <attribute>:<value>)',
		documentation: `This function is equivalent to @set, and can be used to toggle flags and set attributes. The two arguments to the function are the same as the arguments that would appear on either side of the '=' in @set. This function returns nothing.

The attribute-setting ability of set() is deprecated. You should use attrib_set() instead; it's easier to read, and allows you to clear attributes, too.`,
		params: ['player|descriptor'],
	},
	setdiff: {
		label: 'setdiff(<list1>, <list2>[, <delimiter>[, <sort type>[, <output separator>]]])',
		documentation: `This function returns the difference of two sets -- i.e., the elements in <list1> that aren't in <list2>. The list that is returned is sorted. Normally, alphabetic sorting is done. You can change this with the fourth argument, which is a sort type as defined in 'help sorting'. If used with exactly four arguments where the fourth is not a sort type, it's treated instead as the output separator.`,
		params: ['list1', 'list2', 'delimiter', 'sort type', 'output separator'],
	},
	setinter: {
		label: 'setinter(<list1>, <list2>[, <delimiter>[, <sort type>[, <output separator>]]])',
		documentation: `This function returns the intersection of two sets -- i.e., the elements that are in both <list1> and <list2>. The list that is returned is sorted. Normally, alphabetic sorting is done. You can change this with the fourth argument, which is a sort type as defined in 'help sorting'. If used with exactly four arguments where the fourth is not a sort type, it's treated instead as the output separator.`,
		params: ['list1', 'list2', 'delimiter', 'sort type', 'output separator'],
	},
	setq: {
		label: 'setq(<register1>, <string1>[, ... , <registerN>, <stringN>])',
		documentation: `This function is used to copy strings into local registers assigned arbitrary names much like variables in other programming languages. setq() returns a null string; it is a purely "side effect" function. Multiple registers can be assigned with a single setq(), with additional pairs of registers and values in the function's arguments. All arguments are evaluated before any registers are set; if you want to use the result of setting one register in setting another, use multiple setq()s.

Registers set via setq() can be accessed via the r() function. Single-character registers can also be accessed via the %qN substitution, and ones with longer names via %q<NAME> (Note that the <>'s are required.) Attempting to access a register that hasn't been set results in an empty string.

Register names are case insensitive: setq(A, foo) and setq(a, foo) both set the same register, and %qA and %qa both fetch its value.`,
		params: ['register1', 'string1', '...', 'registerN', 'stringN'],
	},
	setr: {
		label: 'setr(<register1>, <string1>[, ... , <registerN>, <stringN>])',
		documentation: `This function is used to copy strings into local registers assigned arbitrary names much like variables in other programming languages. setr() returns the value stored. Multiple registers can be assigned with a single setr(), with additional pairs of registers and values in the function's arguments. In this case, setr() returns the value stored in the first register listed. All arguments are evaluated before any registers are set; if you want to use the result of setting one register in setting another, use multiple setq()s.

Registers set via setr() can be accessed via the r() function. Single-character registers can also be accessed via the %qN substitution, and ones with longer names via %q<NAME> (Note that the <>'s are required.) Attempting to access a register that hasn't been set results in an empty string.

Register names are case insensitive: setr(A, foo) and setr(a, foo) both set the same register, and %qA and %qa both fetch its value.`,
		params: ['register1', 'string1', '...', 'registerN', 'stringN'],
	},
	setsymdiff: {
		label: 'setsymdiff(<list1>, <list2>[, <delimiter>[, <sort type>[, <output separator>]]])',
		documentation: `This function returns the symmetric difference of two sets -- i.e., the elements that only appear in one or the other of the lists, but not in both. The list that is returned is sorted. Normally, alphabetic sorting is done. You can change this with the fourth argument, which is a sort type as defined in 'help sorting'. If used with exactly four arguments where the fourth is not a sort type, it's treated instead as the output separator.`,
		params: ['list1', 'list2', 'delimiter', 'sort type', 'output separator'],
	},
	setunion: {
		label: 'setunion(<list1>, <list2>[, <delimiter>[, <sort type>[, <output separator>]]])',
		documentation: `This function returns the union of two sets -- i.e., all the elements of both <list1> and <list2>, minus any duplicate elements. The list returned is sorted. Normally, alphabetic sorting is done. You can change this with the fourth argument, which is a sort type as defined in 'help sorting'. If used with exactly four arguments where the fourth is not a sort type, it's treated instead as the output separator.`,
		params: ['list1', 'list2', 'delimiter', 'sort type', 'output separator'],
	},
	sha0: {
		label: 'sha0(<string>)',
		documentation: `Returns the SHA-0 cryptographic hash of the string. See RFC 3174 for more information. Deprecated; use digest() and higher strength algorithms instead. On servers with newer versions of OpenSSL that no longer provide the algorithm, returns #-1 NOT SUPPORTED.`,
		params: ['string'],
	},
	shl: {
		label: 'shl(<number>, <count>)',
		documentation: `Performs a leftwards bit-shift on <number>, shifting it <count> times. This is equivalent to mul(<number>, power(2, <count>), but much faster.`,
		params: ['number', 'count'],
	},
	showdate: {
		label: 'shl(<number>, <count>)',
		documentation: `Performs a leftwards bit-shift on <number>, shifting it <count> times. This is equivalent to mul(<number>, power(2, <count>), but much faster.`,
		params: ['number', 'count'],
	},
	shr: {
		label: 'shr(<number>, <count>)',
		documentation: `Performs a rightwards bit-shift on <number>, shifting it <count> times. This is equivalent to div(<number>, power(2, <count>), but much faster.`,
		params: ['number', 'count'],
	},
	shuffle: {
		label: 'shuffle(<list>[, <delimiter>[, <output separator>]])',
		documentation: `This function shuffles the order of the items of a list, returning a random permutation of its elements.

<delimiter> defaults to a space, and <output separator> defaults to <delimiter>.`,
		params: ['list', 'delimiter', 'output separator'],
	},
	sign: {
		label: 'sign(<number>)',
		documentation: `Essentially returns the sign of a number -- 0 if the number is 0, 1 if the number is positive, and -1 if the number is negative. This is equivalent to bound(<number>, -1, 1).`,
		params: ['number'],
	},
	sin: {
		label: 'sin(<angle>[, <angle type>])',
		documentation: `Returns the sine of <angle>, which should be expressed in the given angle type, or radians by default.`,
		params: ['angle', 'angle type'],
	},
	slev: {
		label: 'slev()',
		documentation: `Returns the current nesting depth of switch*(), reswitch*() and @switch/@selects. It is a safer replacement for the "#$" token, which (because it is replaced before evaluation) is unsafe with user input, and unsuitable for use in nested switches.`,
		params: ['null'],
	},
	stext: {
		label: 'stext([<n>])',
		documentation: `Returns the <string> being matched for the current switch, or the <n>th switch where n=0 is the current switch, n=1 is the switch the current switch is nested in, and so on. It is a safer replacement for the "#$" token, which (because it is replaced before evaluation) is unsafe with user input, and unsuitable for use in nested switches.
		
stext(L) returns the <string> for the outermost switch, and is equivilent to stext(slev()).`,
		params: ['n'],
	},
	sort: {
		label: 'sort(<list>[, <sort type>[, <delimiter>[, <output separator>]]])',
		documentation: `This sorts a list of words. If no second argument is given, it will try to detect the type of sort it should do. If all the words are numbers, it will sort them in order of smallest to largest. If all the words are dbrefs, it will sort them in order of smallest to largest. Otherwise, it will perform a lexicographic sort.

The second argument is a sort type. See 'help sorting' ingame for more information.

The optional third argument gives the list's delimiter character. If not present, <delimiter> defaults to a space. The optional fourth argument gives a string that will delimit the resulting list; it defaults to <delimiter>.`,
		params: ['list', 'sort type', 'delimiter', 'output separator'],
	},
	sortby: {
		label: 'sortby([<object>/]<attribute>, <list>[, <delimiter>[, <output separator>]])',
		documentation: `This sorts an arbitrary list according to the ufun <obj>/<attrib>. This ufun should compare two arbitrary elements, %0 and %1, and return zero (equal), a negative integer (element 1 is less than element 2) or a positive integer (element 1 is greater than element 2), similar to the comp() function.
		
Warning: the function invocation limit applies to this function. If this limit is exceeded, the function will fail _silently_. List and function sizes should be kept reasonable.`,
		params: ['object/attribute', 'list', 'delimiter', 'output separator'],
	},
	sortkey: {
		label: 'sortkey([<object>/]<attribute>, <list>[, <sort type>[, <delimiter>[, <osep>]]])',
		documentation: `This function creates a list of keys by passing every element of <list> into the ufun given in <attrib>. The list is then sorted according to the sorting method in <sort type>, or is automatically guessed (as per 'help sorting' ingame).`,
		params: ['object/attribute', 'list', 'sort type', 'delimiter', 'output separator'],
	},
	soundex: {
		label: 'soundex(<word>[, <hash type>])',
		documentation: `The soundex function returns the soundex pattern for a word. A soundex pattern represents the sound of the word, and similar sounding words should have the same soundex pattern. Soundex patterns consist of an uppercase letter and 3 digits.`,
		params: ['word', 'hash type'],
	},
	soundslike: {
		label: 'soundslike(<word>, <word>[, <hash type>])',
		documentation: `Returns 1 if the two words have the same hash code (see 'help soundex()' ingame for more information), which means, in general, if they sound alike. The hash type can be 'soundex' (Default) or 'phone' for a different algorithm that might give better results with some words.`,
		params: ['word', 'hash type'],
	},
	soundlike: {
		label: 'soundlike(<word>, <word>[, <hash type>])',
		documentation: `Returns 1 if the two words have the same hash code (see 'help soundex()' ingame for more information), which means, in general, if they sound alike. The hash type can be 'soundex' (Default) or 'phone' for a different algorithm that might give better results with some words.`,
		params: ['word', 'hash type'],
	},
	space: {
		label: 'space(<number>)',
		documentation: `Prints <number> spaces. Useful for times when you want to be able to use lots of spaces to separate things. Same as [repeat(%b, <number>)].`,
		params: ['number'],
	},
	speak: {
		label: 'speak(<speaker>, <string>[, <say string>[, [<transform obj>/]<transform attr>[, [<isnull obj>/]<isnull attr>[, <open>[, <close>]]]]])',
		documentation: `This function is used to format speech-like constructs, and is capable of transforming text within a speech string; it is useful for implementing "language code" and the like.

If <speaker> begins with &, the rest of the <speaker> string is treated as the speaker's name, so you can use it for NPCs or tacking on titles (such as with @chatformat). Otherwise, the name of the object <speaker> is used.

When only <speaker> and <string> are given, this function formats <string> as if it were speech from <speaker>, as follows.

If <string> is...  the resulting string is...
	:<pose>            <speaker's name> <pose>
  	;<pose>            <speaker's name><pose>
  	|<emit>            <emit>
  	<speech>           <speaker's name> says, "<speech>"

The chat_strip_quote config option affects this function, so if <speech> starts with a leading double quote ("), it may be stripped.

If <say string> is specified, it is used instead of "says,".`,
		params: ['speaker', 'string', 'say string', 'transform obj/attr', 'isnull obj/attr', 'open', 'close'],
	},
	spellnum: {
		label: 'spellnum(<number>)',
		documentation: `Given a number, return its written-out representation in words.`,
		params: ['number'],
	},
	splice: {
		label: 'splice(<list1>, <list2>, <word>[, <delimiter>])',
		documentation: `This function splices <list1> and <list2> together. <list1> and <list2> are space-separated lists of words.

If a word in <list1> is the same as <word>, it is replaced by the word in the corresponding position in <list2>. Both lists must have the same
  number of words.`,
		params: ['list 1', 'list 2', 'word', 'delimiter'],
	},
	sql: {
		label: 'sql(<query>[, <row separator>[, <field separator>[, <register>]]])',
		documentation: `Performs an SQL query if the MUSH is configured to connect to an SQL database server. This function requires a WIZARD flag or the Sql_Ok power.

By default, SELECT queries will return their data space-separated. Usually, it's more useful to specify a character to delimit rows returned (and sometimes another character to delimit the fields/columns returned, if they may contain spaces).

<query> is evaluated, so it's useful to either read it from another attribute with u() or use lit() to protect commas. If you will be interpolating user-provided values into the query, be careful to escape them with sqlescape().

A query that doesn't return any rows, such as an UPDATE or SELECT that has no matches will return a null string.

If <register> is specified, and <query> alters the database (such as an UPDATE or INSERT query), there is a side-effect: the number of affected rows is stored into the specified q-register.`,
		params: ['query', 'row separator', 'field separator', 'register'],
	},
	sqlescape: {
		label: 'sqlescape(<string>)',
		documentation: `This function performs SQL-server-implemented escaping of <string>. It's important to escape arbitrary data before passing it to the sql() and mapsql() functions, or @sql command, to prevent SQL injection attacks.`,
		params: ['string'],
	},
	sqrt: {
		label: 'sqrt(<number>)',
		documentation: `Returns the square root of <number>. <number> cannot be negative.`,
		params: ['number'],
	},
	squish: {
		label: 'squish(<string>[, <character>])',
		documentation: `This function removes the leading and trailing <character>s from <string>, and condenses all inter-word <character>s to a single<character>. If no character is given, a space is used.`,
		params: ['string', 'character'],
	},
	ssl: {
		label: 'ssl(<player|descriptor>)',
		documentation: `This function returns 1 if the player is using an SSL connection, and 0 otherwise. If SSL connections are disabled, it always returns 0. You must be See_All to use this function on another player.`,
		params: ['player|descriptor'],
	},
	stddev: {
		label: 'stddev(<number1>, <number2>[, ... , <numberN>])',
		documentation: `Returns the sample standard deviation of its arguments.`,
		params: ['number 1', 'number 2', '...', 'number N'],
	},
	step: {
		label: 'step([<object>/]<attrribute>, <list>, <step>[, <delimeter>[, <output separator>]])',
		documentation: `This function is similar to map(), except you can pass up to 30 elements of the list at a time, in %0-%9 and v(10)-v(29). <step> must be between 1 and 30, with a step of 1 equivalent to map(). If the elements of the list can't be split up evenly, the last evaluation will run with some of the registers unset; the %+ substitution or the registers() function can be used to see which/how many are set.`,
		params: ['object/attribute', 'list', 'step', 'delimeter', 'output separator'],
	},
	strdelete: {
		label: 'strdelete(<string>, <first>, <length>)',
		documentation: `Return a modified <string>, with <len> characters starting after the character at position <first> deleted. In other words, it copies <first> characters, skips <len> characters, and then copies the remainder of the string. If <len> is negative, deletes characters leftwards from <first>. Characters are numbered starting at 0.`,
		params: ['string', 'first', 'length'],
	},
	stringsecs: {
		label: 'stringsecs(<timestring>)',
		documentation: `The stringsecs() function takes a string of the form produced by timestring() or etime() and converts it back into seconds.`,
		params: ['timestring'],
	},
	strinsert: {
		label: 'strinsert(<string>, <position>, <insert>)',
		documentation: `This function returns <string>, with <insert> added before the <position> character in <string>. Note that the first character in <string> is numbered 0, not 1.

If <position> is less than 0, an error is returned. If <position> is greater than the length of <string>, <insert> is appended to it.`,
		params: ['string', 'position', 'insert'],
	},
	stripaccents: {
		label: 'stripaccents(<string>[, <smart>])',
		documentation: `Returns the string with accented characters converted to non-accented. As with the accent() function, this assumes the ISO 8859-1 character set.

If the second argument is true, it does more a intelligent conversion that might result in one character being turned into several. When it's false, or not given, one character in the input string corresponds to one character in the result.`,
		params: ['string', 'smart'],
	},
	stripansi: {
		label: 'stripansi(<string>)',
		documentation: `Returns the string with all ansi and HTML codes removed.`,
		params: ['string'],
	},
	strmatch: {
		label: 'strmatch(<string>, <pattern>[, <register list>])',
		documentation: `This function matches <pattern> against the entire <string>. It returns 1 if it matches and 0 if it doesn't. It is not case-sensitive, and <pattern> may contain wildcards.

If <register list> is given, there is a side-effect: Wildcards and patterns are stored in q-registers, in the order they are given. <register list> is a space-separated list of register names.`,
		params: ['string', 'pattern', 'register list'],
	},
	strreplace: {
		label: 'strreplace(<string>, <start>, <length>, <text>)',
		documentation: `Returns <string> with the <length> characters starting at <start> replaced by <text>. As with most other string functions, the first character is at position 0.

If <start> is less than 0, an error is returned, and if <start> is greater than the length of <string>, <string> is returned.

strreplace() attempts to preserve ansi: if <text> contains ansi, it will be kept the same. If <text> contains no ansi, but <string> does, <text> will be inserted with the same ansi as the text it replaces. To force <text> to be inserted with no ansi, even if <string> has ansi, wrap it in ansi(n,....).`,
		params: ['string', 'start', 'length', 'text'],
	},
	subj: {
		label: 'subj(<object>)',
		documentation: `Returns the subjective pronoun - he/she/it - for an object. You can also use the %s substitution to get the subjective pronoun of the enactor.`,
		params: ['object'],
	},
	suggest: {
		label: 'suggest(<category>, <word>[, <seperator>[, <limit>]])',
		documentation: `Returns a list of suggested alternatives to <word> from vocabulary words known in the given <category>. <seperator> defaults to space. <limit> controls how many suggestions are returned, and defaults to 20.

This is the same mechanism used to suggest help entries, function names, etc. when an unknown one is encountered.

If the dict_file @config option is set, loads that file into the 'words' category.`,
		params: ['category', 'word', 'seperator', 'limit'],
	},
	t: {
		label: 't(<expression>)',
		documentation: `Returns 1 if <expression> is a true boolean value, and 0 otherwise. The definitions of true and false vary depending on the value of the 'tiny_booleans' @config option.`,
		params: ['expression'],
	},
	table: {
		label: 'table(<list>[, <field width>[, <line length>[, <delimiter>[, <output separator>]]]])',
		documentation: `This function returns the elements of <list> in a tabular format. All other parameters are optional. <field width> specifies how wide each table entry is allowed to be, and defaults to 10. If <field width> begins with a "<", it is left-aligned. ">" makes it right-aligned, and "-" makes it centered. Elements longer than <field width> are truncated to fit.

<line length> is how wide a table row can be, and defaults to 78. <delimiter> is the delimiter used in <list>, and defaults to a space. <osep> is a single character to be used between entries in the table, and also defaults to a space.`,
		params: ['list', 'field width', 'line length', 'delimiter', 'output separator'],
	},
	tan: {
		label: 'tan(<angle>[, <angle type>])',
		documentation: `Returns the tangent of <angle>, which should be expressed in the given angle type, or radians by default.`,
		params: ['angle', 'angle type'],
	},
	tel: {
		label: 'tel(<object>, <destination>[, <silent>[, <inside>]])',
		documentation: `This function will teleport <object> to <destination>, exactly as @teleport <object>=<destination>. <silent> is an optional boolean that, if true, makes the function act like @teleport/silent. <inside> is an optional boolean that, if true, makes the function act like @teleport/inside.`,
		params: ['object', 'destination', 'silent', 'inside'],
	},
	terminfo: {
		label: 'terminfo(<player|descriptor>)',
		documentation: `Returns a list with at least one element - the type of client used by the player, or "unknown" if the client being used doesn't support being asked to identify itself using RFC 1091.

Other elements in the list describe client capabilities, and currently include:
  	pueblo           present if the client is in Pueblo mode.
  	telnet           present if the client understands the telnet protocol.
  	gmcp             present if GMCP is negotiated via telnet; see help oob()
  	ssl              present if the client is using an SSL/TLS connection.
  	prompt_newlines  see 'help prompt_newlines'
  	stripaccents     client is receiving 7-bit ascii, no accented characters

One of the color styles shown in 'help colorstyle' will also be included.

Other fields may be added in the future, if, for example, MXP support is ever added.

You must have see_all, or use terminfo() on yourself, to see all information or use a <descriptor>. Mortals using terminfo() on another player will always receive "unknown" for the client name, and will not get telnet/gmcp/ssl/prompt_newlines in the output list.`,
		params: ['player|descriptor'],
	},
	testlock: {
		label: 'testlock(<key>, <victim>)',
		documentation: `Returns 1 if the <victim> would pass the lock defined in <key> as run by the caller, and 0 if it would fail.

testlock() evaluates the lock from the caller's perspective.`,
		params: ['key', 'victim'],
	},
	textfile: {
		label: 'textfile(<type>, <entry>)',
		documentation: `Returns the text of entries from cached text files (such as "help", "news", "events", etc.) All whitespace and newlines are included, so you may want to edit %r's and squish the result if you plan to use the text as a list of words rather than a display.`,
		params: ['type', 'entry'],
	},
	textentries: {
		label: 'textentries(<type>, <pattern>[, <output separator>])',
		documentation: `Returns any topic names which match the wildcard pattern <pattern>, with topic names separated by <output separator>.`,
		params: ['type', 'pattern', 'output separator'],
	},
	textsearch: {
		label: 'textsearch(<type>, <pattern>[, <output separator>])',
		documentation: `Returns the names of all topics whose contents matches the given <pattern>, the same as "help/search <pattern>", with topic names separated by <output separator>.`,
		params: ['type', 'pattern', 'output separator'],
	},
	time: {
		label: 'time() || time(<timezone>) || time(<dbref>)',
		documentation: `Gives you the current time on the MUSH. By default this is the time on the server the MUSH is running on, and not the time of the caller.

With an argument, time() returns the time in the specified timezone, or in the timezone set in the specified object's TZ attribute; for more information, see 'help timezones' ingame.`,
		params: ['timezone', 'dbref'],
	},
	timefmt: {
		label: 'timefmt(<format>[, <secs>[, <timezone>]])',
		documentation: `This function returns the time and date, formatted according to <format>. <secs> is the time/date to format, as the number of seconds since the epoch (as returned by secs(), convtime(), etc). If no <secs> is given, the current date/time of the MUSH host is used. If no <timezone> is provided, the MUSH host's timezone is used; see 'help timezones' for valid formats for <timezone>. Note: Using a fractional timezone offset from GMT may result in timefmt() showing the time zone name (if displayed) as GMT. Using a symbolic name on a server that supports them should show the name correctly.

A list of all codes for <format> is in 'help timefmt2' ingame.`,
		params: ['format', 'secs', 'timezone'],
	},
	timestring: {
		label: 'timestring(<seconds>[, <pad flag>])',
		documentation: `The timestring function takes a number of seconds as input and returns the amount of time formatted into days, hours, minutes, and seconds. If <pad flag> is 1, all time periods will be used even if the number of seconds is less than a day, hour, or minute. If <pad flag> is 2, all numbers will be 2 digits long.`,
		params: ['seconds', 'pad flag'],
	},
	tr: {
		label: 'tr(<string>, <find>, <replace>)',
		documentation: `Translates every character in <string> that exists in <find> to the character at an identical position in <replace>. Ranges of characters separated by -'s are accepted. <find> and <replace> must be the same length after expansion of ranges. If a character exists more than once in <find>, only the last instance will be counted. The example below is the common ROT-13 algorithm for lower case strings, demonstrated with every letter explicitly listed, and with the equivalent but briefer character ranges. Literal -'s can be in <find> and <replace> if they are the first or last characters in the arguments.`,
		params: ['string', 'find', 'replace'],
	},
	trim: {
		label: 'trim(<string>[, <characters to trim>[, <trim style>]])',
		documentation: `Strips leading and/or trailing occurrences of each of the <characters to trim> from <string>.

  <characters to trim> defaults to a space.

If no <trim style> is specified, characters are trimmed from both the left and right sides of the string. If the 'l' trim style is specified, characters are only trimmed from the left side. If the 'r' trim style is specified, characters are only trimmed from the right side. If the 'b' trim style is specified, or a style is omitted, characters are trimmed off of both sides of the string.

Normally, the arguments for trim() are in the same order as trimpenn(). However, if the tiny_trim_fun @config option is on, the <characters to trim> and <trim style> arguments are reversed. Use trimpenn() or trimtiny() if you want to specify a particular argument sequence no matter how the option is set.`,
		params: ['string', 'characters to trim', 'trim style'],
	},
	trimpenn: {
		label: 'trimpenn(<string>[, <characters to trim>[, <trim style>]])',
		documentation: `Strips leading and/or trailing occurrences of each of the <characters to trim> from <string>.

  <characters to trim> defaults to a space.

If no <trim style> is specified, characters are trimmed from both the left and right sides of the string. If the 'l' trim style is specified, characters are only trimmed from the left side. If the 'r' trim style is specified, characters are only trimmed from the right side. If the 'b' trim style is specified, or a style is omitted, characters are trimmed off of both sides of the string.

If the tiny_trim_fun @config option is on, the <characters to trim> and <trim style> arguments are reversed. Use trimpenn() or trimtiny() if you want to specify a particular argument sequence no matter how the option is set.`,
		params: ['string', 'characters to trim', 'trim style'],
	},
	trimtiny: {
		label: 'trimtiny(<string>[, <trim style>[, <characters to trim>]])',
		documentation: `Strips leading and/or trailing occurrences of each of the <characters to trim> from <string>.

  <characters to trim> defaults to a space.

If no <trim style> is specified, characters are trimmed from both the left and right sides of the string. If the 'l' trim style is specified, characters are only trimmed from the left side. If the 'r' trim style is specified, characters are only trimmed from the right side. If the 'b' trim style is specified, or a style is omitted, characters are trimmed off of both sides of the string.

If the tiny_trim_fun @config option is on, the <characters to trim> and <trim style> arguments are reversed. Use trimpenn() or trimtiny() if you want to specify a particular argument sequence no matter how the option is set.`,
		params: ['string', 'trim style', 'characters to trim'],
	},
	trunc: {
		label: 'trunc(<string>)',
		documentation: `This function truncates floating point numbers to integers. It can also be used to return the leading numeric prefix of a string. If <string> does not start with a number, 0 is returned.`,
		params: ['string'],
	},
	type: {
		label: 'type(<object>)',
		documentation: `Returns the type of an object - one of PLAYER, THING, EXIT, ROOM or GARBAGE - or #-1 if the object can't be found.`,
		params: ['object'],
	},
	ufun: {
		label: 'ufun([<object>/]<attribute>[, <arg0>[, ... , <arg29>]])',
		documentation: `Evaluates <attribute> on <object> (or on the caller, if no <object> is given), and returns the result. Up to 30 <arg>s can be passed, available to the attribute as %0, %1, up to %9, and v(10) to v(29). This can be used to create "user defined functions".
		
u() is an alias for ufun(), for TinyMUSH compatability.`,
		params: ['object/attribute', 'arg0', '...', 'arg29'],
	},
	ulambda: {
		label: 'ulambda([<object>/]<attribute>[, <arg0>[, ... , <arg29>]])',
		documentation: `Evaluates <attribute> on <object> (or on the caller, if no <object> is given), and returns the result. Up to 30 <arg>s can be passed, available to the attribute as %0, %1, up to %9, and v(10) to v(29). This can be used to create "user defined functions". ulambda() is the same as ufun() but accepts anonymous attributes.`,
		params: ['object/attribute', 'arg0', '...', 'arg29'],
	},
	ucstr: {
		label: 'ucstr(<string>)',
		documentation: `Returns <string> with all letters converted to uppercase.`,
		params: ['string'],
	},
	ucstr2: {
		label: 'ucstr2(<string>)',
		documentation: `Returns <string> with all letters converted to uppercase. If the MUSH is compiled with ICU Unicode support, ucstr2() does the same as ucstr() except the returned string might be a different length, and ansi colors and other markup are stripped.`,
		params: ['string'],
	},
	udefault: {
		label: 'udefault([<object>/]<attribute>, <default case>[, <arg0>[, ... , <arg29>]])',
		documentation: `If the given <attribute> on <object> (or the caller, if no <object> is given) can be read, the attribute is evaluated, and the result returned. Up to thirty <arg>s can be passed to the attribute, as per ufun().

If the attribute cannot be read, <default case> is evaluated and returned instead. The <default case> is not evaluated if the attribute exists.`,
		params: ['object/attribute', 'default case', 'arg0', '...', 'arg29'],
	},
	uldefault: {
		label: 'uldefault([<object>/]<attribute>, <default case>[, <arg0>[, ... <arg29>]])',
		documentation: `f the given <attribute> on <object> (or the caller, if no <object> is given) can be read, the attribute is evaluated, and the result returned. Up to thirty <arg>s can be passed to the attribute, as per ufun().

If the attribute cannot be read, <default case> is evaluated and returned instead. The <default case> is not evaluated if the attribute exists.
		
Saves the global q-registers (%q0-%q9, %qa-%qz, etc) before evaluation, and restores them afterwards, as per ulocal().`,
		params: ['object/attribute', 'default case', 'arg0', '...', 'arg29'],
	},
	unique: {
		label: 'unique(<list>[, <sort type>[, <delimeter>[, <output separator>]]])',
		documentation: `Returns a copy of <list> with consecutive duplicate items removed. It does not sort the list. The optional <sort type> describes what type of data is in the list; see 'help sorting' for details. If no type is given, the elements are compared as strings. Elements of <list> are separated by <delim>, which defaults to a space. Each element of the output is separated by <osep>, which defaults to <delim>.`,
		params: ['list', 'sort type', 'delimeter', 'output separator'],
	},
	uptime: {
		label: 'UPTIME([<type>])',
		documentation: `Returns the time, as a number of seconds, that something happend (or will happen). Exactly what is returned depends on the given <type>, which should be one of:

    upsince   - The time the MUSH was started. This is the default.
    reboot    - The time the MUSH was last rebooted.
    save      - The time the MUSH last saved, or -1 if it hasn't.
    nextsave  - The time of the next automatic save.
    dbck      - The time of the next automatic dbck.
    purge     - The time of the next automatic purge.
    warnings  - The time of the next automatic warnings check, or -1 if automated warnings are disabled.`,
		params: ['type'],
	},
	urldecode: {
		label: 'urldecode(<string>)',
		documentation: `This function takes a URL-encoded string and returns it in its decoded form. Unprintable characters are converted to question marks.`,
		params: ['string'],
	},
	urlencode: {
		label: 'urlencode(<string>)',
		documentation: `This function converts its argument to a URL-encoded string where everything but a-z, A-Z, 0-9, -, ., _, and ~ are converted into %NN where NN is a hex code for their character value.`,
		params: ['string'],
	},
	v: {
		label: 'v(<variable>) || v(<integer>) || v(<attribute>)',
		documentation: `The first form of this function returns the value of the <variable> %-sub. In most cases, using the %-sub is preferable. Not all %-subs are accessible this way; only the following <variable>s are valid:

    0-9, #, @, !, n, l, and c.

Unlike %-subs, the v() function is not case-sensitive: v(n) and v(N) are both equivilent to %n (whereas %N is equivilent to [capstr(%n)]).

v() can also return the value of stack registers. v(0) is equivilent to %0, but v() can return up to 30 registers (v(0) through v(29)). Calling v() with an integer arg that is not between 0 and 29 (inclusive) will return an out-of-range error.

The final form of this function is equivilent to get(me/<attribute>), but is usually slightly more efficient.`,
		params: ['variable', 'integer', 'attribute'],
	},
	vadd: {
		label: 'vadd(<vector1>, <vector2>[, <delimiter>])',
		documentation: `Returns the sum of two vectors. A vector is a list of numbers separated by spaces or <delimiter>.`,
		params: ['vector 1', 'vector 2', 'delimiter'],
	},
	valid: {
		label: 'valid(<category>, <string>[, <target>])',
		documentation: `The valid() function checks to see if <string> can be used as a valid <category>, and returns 1 if so, 0 if not, and #-1 if an invalid category is used. For some categories, a <target> can be given to make the check more specific. See 'help valid()' ingame for the list of categories.`,
		params: ['category', 'string', 'target'],
	},
	vcross: {
		label: 'vcross(<vector1>, <vector2>[, <delimiter>])',
		documentation: `Returns the 3-dimensional vector that is the cross product of its 3-dimensional argument vectors. The cross product is defined as:

   x = Ay * Bz - By * Az
   y = Az * Bx - Bz * Ax
   z = Ax * By - Bx * Ay`,
		params: ['vector 1', 'vector 2', 'delimiter'],
	},
	vdim: {
		label: 'vdim(<vector>[, <delimiter>])',
		documentation: `Returns the dimensionality of a vector.`,
		params: ['vector', 'delimiter'],
	},
	vdot: {
		label: 'vdot(<vector1>, <vector2>[, <delimiter>])',
		documentation: `Returns the dot product of two vectors. A dot product is the sum of the products of the corresponding elements of the two vectors, e.g. vdot(a b c,d e f) = ad + be + cf. The vectors must be of the same length.`,
		params: ['vector 1', 'vector 2', 'delimiter'],
	},
	visible: {
		label: 'visible(<object>, <victim>[/<attribute>])',
		documentation: `If no attribute name is provided, this function returns 1 if <object> can examine <victim>, or 0, if it cannot. If an attribute name is given, the function returns 1 if <object> can see the attribute <attribute> on <victim>, or 0, if it cannot.

If <object>, <victim>, or <attribute> is invalid, the function returns 0.`,
		params: ['object', 'victim', 'attribute'],
	},
	vmag: {
		label: 'vmag(<vector>[, <delimiter>])',
		documentation: `Returns the magnitude of a vector, using a Euclidean distance metric. That is, for vector a b c d, returns sqrt(a^2+b^2+c^2+d^2).`,
		params: ['vector', 'delimiter'],
	},
	vmax: {
		label: 'vmax(<vector1>, <vector2>[, <delimiter>])',
		documentation: `Returns a new vector made out of the maximums of each corresponding pair of numbers from the two vectors. The vectors must be of the same length.`,
		params: ['vector 1', 'vector 2', 'delimiter'],
	},
	vmin: {
		label: 'vmin(<vector1>, <vector2>[, <delimiter>])',
		documentation: `Returns a new vector made out of the minimums of each corresponding pair of numbers from the two vectors. The vectors must be of the same length.`,
		params: ['vector 1', 'vector 2', 'delimiter'],
	},
	vmul: {
		label: 'vmul(<vector1|number1>, <vector2|number2>[, <delimiter>]))',
		documentation: `Returns the result of either multiplying a vector by a number, or the element-wise product of two vectors. The element-wise product of a b c by w x z is aw bx cz.`,
		params: ['vector 1|number 1', 'vector 2|number 2', 'delimiter'],
	},
	vsub: {
		label: 'vsub(<vector1>, <vector2>[, <delimiter>])',
		documentation: `Returns the difference between two vectors.`,
		params: ['vector 1', 'vector 2', 'delimiter'],
	},
	vunit: {
		label: 'vunit(<vector>[, <delimiter>])',
		documentation: `Returns the unit vector (a vector of magnitude 1), which points in the same direction as the given vector.`,
		params: ['vector', 'delimiter'],
	},
	where: {
		label: 'where(<object>)',
		documentation: `This function returns the "true" location of an object. This is the standard location (i.e. where the object is) for things and players, the source room for exits, and #-1 for rooms.

In other words, the "true" location of an object is where it is linked into the database. For example, an exit appears in the room of its "home", not its "location" (the LOC() function on an exit will return the latter). A room's "real" location is always Nothing (the LOC() function will return its drop-to).`,
		params: ['object'],
	},
	wipe: {
		label: 'wipe(<object>[/<attribute pattern>])',
		documentation: `This function is equivalent to @wipe, and attempts to wipe all the attributes on <object> whose names match <attribute pattern>, or "*" if no pattern is given. It returns nothing. Like @wipe, this function will destroy entire attribute trees; to safely remove a single attribute, use attrib_set() instead.`,
		params: ['object', 'attribute pattern'],
	},
	wordpos: {
		label: 'wordpos(<list>, <number>[, <delimiter>])',
		documentation: `Returns the number of the word within <list> where the <number>th character falls. Characters and words are numbered starting with 1, and <delimiter>s between words are treated as belonging to the word that follows them. If the list is less than <number> characters long, #-1 is returned. <delimiter> defaults to a space.`,
		params: ['list', 'number', 'delimiter'],
	},
	wrap: {
		label: 'wrap(<string>, <width>[, <first line width>[, <line separator>]])',
		documentation: `This function takes <string> and splits it into lines containing no more than <width> characters each. If <first line width> is given, the first line may have a different width. If <line separator> is given, it is inserted between each line; by default the separator is a newline (%r).`,
		params: ['string', 'width', 'first line width', 'line separator'],
	},
	wshtml: {
		label: 'wshtml(<html string>[, <default string>])',
		documentation: `This function is used to embed HTML markup into the output for WebSocket-enabled clients. It requires the Pueblo_Send power. It embeds <html string> as HTML markup, to be rendered as HTML by a WebSocket client. The <default string> is shown as plain text if the recipient is not WebSocket-enabled.`,
		params: ['html string', 'default string'],
	},
	wjson: {
		label: 'wsjson(<json string>[, <default string>])',
		documentation: `This function is used to embed JSON markup into the output for WebSocket-enabled clients. It requires the Pueblo_Send power. It embeds <json string> as a JSON object which can be captured by a WebSocket client. The <default string> is shown as plain text if the recipient is not WebSocket-enabled. See 'help json()' ingame for information about formatting JSON object strings.`,
		params: ['json string', 'default string'],
	},
	xcon: {
		label: 'xcon(<object>, <start>, <count>)',
		documentation: `Fetches <count> or fewer item dbrefs from <object>'s contents starting at position <start>. It is useful when the number of objects in a container causes lcon() to exceed the buffer limit. It is equivalent to:
		
		extract(lcon(<object>), <start>, <count>).`,
		params: ['object', 'start', 'count'],
	},
	xvcon: {
		label: 'xvcon(<object>, <start>, <count>)',
		documentation: `Fetches <count> or fewer item dbrefs from <object>'s contents starting at position <start>. It is useful when the number of objects in a container causes lcon() to exceed the buffer limit. It is equivalent to:
		
		extract(lcon(<object>), <start>, <count>).

It follows the restrictions of lvcon().`,
		params: ['object', 'start', 'count'],
	},
	xexits: {
		label: 'xexits(<room>, <start>, <count>)',
		documentation: `Fetches <count> or fewer exit dbrefs from <room> starting at position <start>. It is useful when the number of exits in a container causes lexits() to exceed the buffer limit.

It is equivalent to extract(lexits(<room>), <start>, <count>).`,
		params: ['room', 'start', 'count'],
	},
	xvexits: {
		label: 'xvexits(<room>, <start>, <count>)',
		documentation: `Fetches <count> or fewer exit dbrefs from <room> starting at position <start>. It is useful when the number of exits in a container causes lexits() to exceed the buffer limit. It is equivalent to:
		
		extract(lexits(<room>), <start>, <count>).

It follows the restrictions of lvexits().`,
		params: ['room', 'start', 'count'],
	},
	xwho: {
		label: 'xwho([<looker>, ]<start>, <count>)',
		documentation: `Fetches <count> or fewer player dbrefs from the list of connected players, starting at position <start>. It is useful when the number of players connected causes lwho() or pemits in +who $-commands to exceed buffer limits. If a <looker> is given, only includes players who <looker> can see are online. It is equivalent to:

	extract(lwho([<looker>]), <start>, <count>).`,
		params: ['looker', 'start', 'count'],
	},
	xmwho: {
		label: 'xmwho(<start>, <count>)',
		documentation: `Fetches <count> or fewer player dbrefs from the list of connected players, starting at position <start>. It is useful when the number of players connected causes lwho() or pemits in +who $-commands to exceed buffer limits. If a <looker> is given, only includes players who <looker> can see are online. It is equivalent to:

	extract(lwho([<looker>]), <start>, <count>).

xmwho() does not include hidden players (like mwho()).`,
		params: ['start', 'count'],
	},
	xwhoid: {
		label: 'xwhoid([<looker>, ]<start>, <count>)',
		documentation: `Fetches <count> or fewer player dbrefs from the list of connected players, starting at position <start>. It is useful when the number of players connected causes lwho() or pemits in +who $-commands to exceed buffer limits. If a <looker> is given, only includes players who <looker> can see are online. It is equivalent to:

	extract(lwho([<looker>]), <start>, <count>).

xwhoid() returns objids instead of dbrefs.`,
		params: ['looker', 'start', 'count'],
	},
	xmwhoid: {
		label: 'xmwhoid(<start>, <count>)',
		documentation: `Fetches <count> or fewer player dbrefs from the list of connected players, starting at position <start>. It is useful when the number of players connected causes lwho() or pemits in +who $-commands to exceed buffer limits. If a <looker> is given, only includes players who <looker> can see are online. It is equivalent to:

	extract(lwho([<looker>]), <start>, <count>).

xmwhoid() returns objids instead of dbrefs.`,
		params: ['start', 'count'],
	},
	xplayers: {
		label: 'xplayers(<object>, <start>, <count>)',
		documentation: `Fetches <count> or fewer player dbrefs from <object>'s contents starting at position <start>. It is useful when the number of players in a container causes lplayers() to exceed the buffer limit. It is equivalent to:

    extract(lplayers(<object>), <start>, <count>).`,
		params: ['object', 'start', 'count'],
	},
	xvplayers: {
		label: 'xvplayers(<object>, <start>, <count>)',
		documentation: `Fetches <count> or fewer player dbrefs from <object>'s contents starting at position <start>. It is useful when the number of players in a container causes lplayers() to exceed the buffer limit. It is equivalent to:

    extract(lplayers(<object>), <start>, <count>).
	
It follows the restrictions of lvplayers().`,
		params: ['object', 'start', 'count'],
	},
	xthings: {
		label: 'xthings(<object>, <start>, <count>)',
		documentation: `Fetches <count> or fewer non-player dbrefs from <object>'s contents starting at position <start>. It is useful when the number of things in a container causes lthings() to exceed the buffer limit. It is equivalent to:

    extract(lthings(<object>), <start>, <count>).`,
		params: ['object', 'start', 'count'],
	},
	xvthings: {
		label: 'xvthings(<object>, <start>, <count>)',
		documentation: `Fetches <count> or fewer non-player dbrefs from <object>'s contents starting at position <start>. It is useful when the number of things in a container causes lthings() to exceed the buffer limit. It is equivalent to:

    extract(lthings(<object>), <start>, <count>).
	
It follows the restrictions of lvthings().`,
		params: ['object', 'start', 'count'],
	},
	zfun: {
		label: 'zfun(<attribute>[, <arg0>[, <arg1>[, ... , <arg29>]]])',
		documentation: `This function evaluates an attribute on the caller's Zone object. It is essentially identical to:

  	ufun(zone(me)/<attribute>[, <arg0>[, ... , <arg29>]])`,
		params: ['attribute', 'arg0', 'arg1', '...', 'arg29'],
	},
	zwho: {
		label: 'zwho(<object>[, <viewer>])',
		documentation: `Returns the dbrefs of all currently-connected players in locations @chzone'd to <object>. It returns all players that the caller can see are online. You must be See_All or pass <object>'s @lock/zone to use these functions.

See_All players can pass a <viewer> argument to zwho() to get only those players that <viewer> can see is online.`,
		params: ['object', 'viewer'],
	},
	zmwho: {
		label: 'zmwho(<object>)',
		documentation: `Returns the dbrefs of all currently-connected players in locations @chzone'd to <object>. It does not include hidden players. You must be See_All or pass <object>'s @lock/zone to use these functions.`,
		params: ['object'],
	},
	zone: {
		label: 'zone(<object>[, <new zone>])',
		documentation: `Returns <object>'s zone, or #-1 if it has no zone. You must be able to examine the object; if you can't, zone() returns #-1.

If a <new zone> is given, zone() attempts to change the zone of <object> to <new zone> first - see 'help @chzone' ingame for details.`,
		params: ['object', 'new zone'],
	},
};