import * as vscode from 'vscode';
import { functionSignatures, FunctionSignature } from './functionSignatures';

// PennMUSH commands
const allCommands = [
	"addcom", "ahelp", "@allhalt", "@allquota", "anews", "@assert", "@atrchown", "@atrlock", "attrib_set",
	"@attribute", "@boot", "@break", "brief", "buy", "@cemit", "@channel", "@chat", "@chown", "@chownall",
	"@chzone", "@chzoneall", "@clist", "@clock", "@clone", "comlist", "@command", "comtitle", "@config",
	"@cpattr", "@create", "@dbck", "@decompile", "delcom", "desert", "@destroy", "@dig", "@disable", "dismiss",
	"doing", "@dolist", "@drain", "drop", "@dump", "@edit", "@elock", "@emit", "empty", "@enable", "enter",
	"@entrances", "@eunlock", "examine", "@find", "@firstexit", "@flag", "follow", "@force", "@function", "get",
	"give", "goto", "@grep", "@halt", "help", "@hide", "home", "@hook", "@http", "huh_command", "@ifelse",
	"@include", "inventory", "@kick", "kilt", "leave", "@lemit", "@link", "@list", "@listmotd", "@lock", "@log",
	"@logwipe", "look", "@lset", "@mail", "@malias", "@mapsql", "@message", "@moniker", "@motd", "@mvattr",
	"@name", "@newpassword", "news", "@notify", "@nscemit", "@nsemit", "@nslemit", "@nsoemit", "@nspemit",
	"@nsprompt", "@nsremit", "@nszemit", "@nuke", "@oemit", "@open", "page", "@parent", "@password", "@pcreate",
	"@pemit", "@poll", "@poor", "pose", "@power", "@prompt", "@ps", "@purge", "@quota", "@readcache",
	"@recycle", "@rejectmotd", "@remit", "@respond", "@restart", "@retry", "@rwall", "say", "@scan", "score",
	"@search", "@select", "semipose", "session", "@set", "@shutdown", "@sitelock", "@skip", "@slave",
	"@sockset", "@sql", "@squota", "@stats", "@suggest", "@sweep", "@switch", "teach", "@teleport", "think",
	"@trigger", "@ulock", "@undestroy", "unfollow", "unimplemented_command", "@unlink", "@unlock",
	"@unrecycle", "@uptime", "use", "@uunlock", "@verb", "@version", "@wait", "@wall", "@warnings",
	"warn_on_missing", "@wcheck", "@webpasswd", "@whereis", "whisper", "who", "@wipe", "with", "@wizmotd",
	"@wizwall", "@zemit"
];

// PennMUSH functions
const allFunctions = [
	"abs", "accent", "accname", "acos", "add", "addrlog", "after", "alias", "align", "allof", "alphamax",
	"alphamin", "and", "andflags", "andlflags", "andlpowers", "ansi", "aposs", "art", "asin", "atan", "atan2",
	"atplace", "atrlock", "attrib_set", "band", "baseconv", "beep", "before", "benchmark", "blank2tilde", "bnand",
	"bnot", "bor", "bound", "brackets", "bxor", "calc", "cand", "capstr", "case", "caseall", "cat", "cbuffer",
	"cbufferadd", "cdesc", "ceil", "cemit", "center", "cflags", "channels", "checkpass", "children", "chr",
	"clflags", "clock", "clone", "cmds", "cmogrifier", "cmsgs", "colors", "columns", "comp", "con", "cond",
	"condall", "config", "conn", "connlog", "connrecord", "controls", "convsecs", "convtime", "convutcsecs",
	"convutctime", "cor", "cos", "cowner", "create", "crecall", "csecs", "cstatus", "ctime", "ctitle", "ctu",
	"cusers", "cwho", "dec", "decode64", "decompile", "decompose", "decrypt", "default", "die", "dig", "digest",
	"dist2d", "dist3d", "div", "doing", "dspace2dbref", "e", "edefault", "edit", "element", "elements", "elist", "elock",
	"emit", "encode64", "encrypt", "endtag", "entrances", "eq", "escape", "etime", "etimefmt", "eval", "exit",
	"extract", "fdiv", "filter", "filterbool", "findable", "first", "firstof", "flags", "flip", "floor",
	"floordiv", "fmod", "fn", "fold", "folderstats", "followers", "following", "foreach", "formdecode",
	"fraction", "fullalias", "fullname", "functions", "get", "get_eval", "getpids", "grab", "graball", "grep",
	"grepi", "gt", "gte", "hasattr", "hasattrp", "hasattrpval", "hasattrval", "hasflag", "haspower", "hastype",
	"height", "hidden", "hmac", "home", "host", "html", "ibreak", "idle", "if", "ifelse", "ilev", "iname", "inc",
	"index", "inum", "ipaddr", "isdaylight", "isdbref", "isguest", "isint", "isjson", "isnum", "isobjid",
	"isregexp", "isword", "itemize", "items", "iter", "itext", "json", "json_map", "json_mod", "json_query",
	"ladd", "lalign", "land", "last", "lattr", "lattrp", "lcon", "lcstr", "lcstr2", "ldelete", "left", "lemit",
	"~let", "~letlen", "letq", "lexits", "lflags", "link", "linsert", "list", "listq", "lit", "ljc", "ljust",
	"llockflags", "llocks", "lmath", "lmax", "lmin", "ln", "lnum", "loc", "localize", "locate", "lock",
	"lockfilter", "lockflags", "lockowner", "locks", "log", "lookup", "lor", "loremipsum", "lparent", "lpids",
	"lplayers", "lports", "lpos", "lreplace", "lsearch", "lsearchr", "lset", "lstats", "lt", "lte", "lthings",
	"lvcon", "lvexits", "lvplayers", "lvthings", "lwho", "lwhoid", "mail", "maildstats", "mailfrom",
	"mailfstats", "maillist", "mailsend", "mailstats", "mailstatus", "mailsubject", "mailtime", "malias", "map",
	"mapsql", "match", "matchall", "max", "mean", "median", "member", "merge", "message", "mid", "min",
	"minimap", "mix", "modulo", "money", "moniker", "msecs", "mtime", "mudname", "mudurl", "mul", "munge",
	"murmur", "mutter", "mwho", "mwhoid", "name", "namecolor", "namegrab", "namegraball", "namelist", "nand",
	"nattr", "nattrp", "ncand", "nchildren", "ncomp", "ncon", "ncond", "ncondall", "ncor", "nearby", "neq",
	"nexits", "next", "nextdbref", "nlsearch", "nmwho", "nor", "not", "nplayers", "nscemit", "nsearch", "nsemit",
	"nslemit", "nsoemit", "nspemit", "nsprompt", "nsremit", "nszemit", "nthings", "null", "num", "numversion",
	"nvcon", "nvexits", "nvplayers", "nvthings", "nwho", "obj", "objeval", "objid", "objmem", "oemit", "oob",
	"open", "or", "ord", "ordinal", "orflags", "orlflags", "orlpowers", "owner", "pack", "parent", "pcreate",
	"pemit", "pfun", "pgrep", "pi", "pidinfo", "placeinfo", "places", "player", "playermem", "pmatch", "poll",
	"polltime", "ports", "pos", "poss", "power", "powers", "prompt", "pueblo", "quota", "r", "rand", "randextract",
	"randword", "rbot", "recv", "regedit", "regeditall", "regeditalli", "regediti", "registers", "reglattr",
	"reglattrp", "reglmatch", "reglmatchall", "reglmatchalli", "reglmatchi", "regmatch", "regmatchi", "regnattr",
	"regnattrp", "regrab", "regraball", "regraballi", "regrabi", "regrep", "regrepi", "regxattr", "regxattrp",
	"remainder", "remit", "remove", "render", "repeat", "rest", "restarts", "restarttime", "reswitch",
	"reswitchall", "reswitchalli", "reswitchi", "reval", "revwords", "rhymes", "right", "rjc", "rjust", "rloc",
	"rnum", "room", "root", "rot13", "round", "s", "scan", "scramble", "season", "secs", "secscalc", "secure",
	"sent", "set", "setdiff", "setinter", "setq", "setr", "setsymdiff", "setunion", "sha0", "shl", "showdate",
	"showdatetime", "showtime", "shr", "shuffle", "sign", "sin", "slev", "sort", "sortby", "sortkey", "soundex",
	"soundslike", "space", "speak", "spellnum", "splice", "sql", "sqlescape", "sqrt", "squish", "ssl", "starttime",
	"stddev", "step", "stext", "strallof", "strcat", "strdelete", "streq", "strfirstof", "stringsecs",
	"strinsert", "stripaccents", "stripansi", "strlen", "strmatch", "strreplace", "sub", "subj", "suggest",
	"switch", "switchall", "t", "table", "tag", "tagwrap", "tan", "tel", "terminfo", "terrain", "testlock",
	"textentries", "textfile", "textsearch", "threeday", "tilde2blank", "time", "timecalc", "timefmt",
	"timeofday", "timestring", "tinyurl", "tr", "trim", "trimpenn", "trimtiny", "trunc", "type", "u", "ucstr",
	"ucstr2", "udefault", "ufun", "ulambda", "uldefault", "ulocal", "unique", "unpack", "unsetq", "uptime",
	"urldecode", "urlencode", "utctime", "v", "vadd", "valid", "vcross", "vdim", "vdot", "version", "visible",
	"vmag", "vmax", "vmin", "vmul", "vsub", "vunit", "where", "whichplace", "width", "wildgrep", "wildgrepi",
	"wipe", "wordpos", "words", "wrap", "wshtml", "wsjson", "xattr", "xattrp", "xcon", "xexits", "xget", "xmwho",
	"xmwhoid", "xor", "xplayers", "xthings", "xvcon", "xvexits", "xvplayers", "xvthings", "xwho", "xwhoid",
	"zemit", "zfun", "zmwho", "zone", "zwho"
];

const commandDocs: Record<string, string> = {
	"@set": `**Usage:** \`@set <object>/<attribute> = <value>\`\n\nSets an attribute or flag on an object.\n\n**Example:**\n\`\`\`mush\n@set me/desc = A cloaked figure\n@set here=WIZARD\n\`\`\``,
	"@dig": `**Usage:** \`@dig <room name>\`\n\nCreates a new room.\n\n**Example:**\n\`\`\`mush\n@dig Engineering Deck\n\`\`\``,
	"@create": `**Usage:** \`@create <object name> = <cost>\`\n\nCreates a new object. Cost is optional.\n\n**Example:**\n\`\`\`mush\n@create Phaser = 5\n\`\`\``,
	"@emit": `**Usage:** \`@emit <message>\`\n\nBroadcasts a message to everyone in the current location.\n\n**Example:**\n\`\`\`mush\n@emit The ship's lights dim suddenly.\n\`\`\``,
	"@teleport": `**Usage:** \`@teleport <object> = <destination>\`\n\nMoves an object or player to a new location.\n\n**Example:**\n\`\`\`mush\n@teleport me = #1234\n\`\`\``,
	"@pemit": `**Usage:** \`@pemit <target> = <message>\`\n\nSends a private message to a player or object.\n\n**Example:**\n\`\`\`mush\n@pemit #200 = Hello there.\n\`\`\``,
	"@link": `**Usage:** \`@link <exit> = <destination>\`\n\nLinks an exit to a destination room.\n\n**Example:**\n\`\`\`mush\n@link North = #101\n\`\`\``,
	"@lock": `**Usage:** \`@lock <object> = <lock expression>\`\n\nApplies a lock to an object (room, exit, etc).\n\n**Example:**\n\`\`\`mush\n@lock door = me\n\`\`\``,
};

const functionDocs: Record<string, string> = {
	"if": `**Usage:** \`if(condition, true_result, false_result)\`\n\nReturns \`true_result\` if \`condition\` is true, otherwise \`false_result\`.\n\n**Example:**\n\`\`\`mush\nthink {if:{hasflag:%#,WIZARD},Access granted,Access denied}\n\`\`\``,
	"switch": `**Usage:** \`switch(value, pattern1, result1, ..., default)\`\n\nMatches \`value\` against patterns and returns the matching result.\n\n**Example:**\n\`\`\`mush\nthink {switch:%0,yes,Affirmative,no,Negative,Unclear}\n\`\`\``,
	"hasflag": `**Usage:** \`hasflag(object, flag)\`\n\nChecks if the specified object has a particular flag.\n\n**Example:**\n\`\`\`mush\n{hasflag:me,WIZARD}\n\`\`\``,
	"add": `**Usage:** \`add(x, y)\`\n\nReturns the sum of \`x\` and \`y\`.\n\n**Example:**\n\`\`\`mush\nthink {add:4,5}\n\`\`\``,
	"sub": `**Usage:** \`sub(x, y)\`\n\nReturns \`x - y\`.\n\n**Example:**\n\`\`\`mush\nthink {sub:10,3}\n\`\`\``,
	"mul": `**Usage:** \`mul(x, y)\`\n\nReturns \`x * y\`.\n\n**Example:**\n\`\`\`mush\nthink {mul:6,7}\n\`\`\``,
	"div": `**Usage:** \`div(x, y)\`\n\nReturns integer division of \`x / y\`.\n\n**Example:**\n\`\`\`mush\nthink {div:10,2}\n\`\`\``,
	"mod": `**Usage:** \`mod(x, y)\`\n\nReturns \`x\` modulo \`y\`.\n\n**Example:**\n\`\`\`mush\nthink {mod:10,3}\n\`\`\``,
	"eq": `**Usage:** \`eq(x, y)\`\n\nReturns true if \`x == y\`.\n\n**Example:**\n\`\`\`mush\nthink {eq:5,5}\n\`\`\``,
	"and": `**Usage:** \`and(x, y)\`\n\nLogical AND — returns true only if both values are true.\n\n**Example:**\n\`\`\`mush\nthink {and:{hasflag:me,WIZARD},{eq:1,1}}\n\`\`\``,
	"or": `**Usage:** \`or(x, y)\`\n\nLogical OR — returns true if either value is true.\n\n**Example:**\n\`\`\`mush\nthink {or:{eq:1,0},{eq:2,2}}\n\`\`\``,
	"not": `**Usage:** \`not(x)\`\n\nLogical NOT — returns true if \`x\` is false.\n\n**Example:**\n\`\`\`mush\nthink {not:{hasflag:me,WIZARD}}\n\`\`\``,
	"words": `**Usage:** \`words(text)\`\n\nReturns the number of words in the string.\n\n**Example:**\n\`\`\`mush\nthink {words:one two three}\n\`\`\``,
	"first": `**Usage:** \`first(text)\`\n\nReturns the first word from a string.\n\n**Example:**\n\`\`\`mush\nthink {first:Red Blue Green}\n\`\`\``,
	"rest": `**Usage:** \`rest(text)\`\n\nReturns all words except the first.\n\n**Example:**\n\`\`\`mush\nthink {rest:Red Blue Green}\n\`\`\``,
};

// Defined set of built-in escapes
const builtInAttributes = new Set([
	'R',
	'B',
	'T',
	'n',
]);

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// ——————————————————————————————
	// 1) Diagnostics
	const diagnostics = vscode.languages.createDiagnosticCollection('pennmush');
	context.subscriptions.push(diagnostics);
	context.subscriptions.push(
		vscode.workspace.onDidOpenTextDocument(doc => updateDiagnostics(doc, diagnostics)),
		vscode.workspace.onDidChangeTextDocument(e => updateDiagnostics(e.document, diagnostics)),
		vscode.workspace.onDidCloseTextDocument(doc => diagnostics.delete(doc.uri))
	);
	// run on already-open docs
	vscode.workspace.textDocuments.forEach(doc => updateDiagnostics(doc, diagnostics));

	// optional output channel
	const outputChannel = vscode.window.createOutputChannel('PennMUSH');
	context.subscriptions.push(outputChannel);

	// ——————————————————————————————
	// 2) Completions
	const pennmushCompletions = vscode.languages.registerCompletionItemProvider(
		'pennmush',
		{
			provideCompletionItems(document, position, token, context) {
				const completions: vscode.CompletionItem[] = [];
				for (const cmd of allCommands) {
					const item = new vscode.CompletionItem(cmd, vscode.CompletionItemKind.Keyword);
					item.detail = 'PennMUSH Command';
					if (commandDocs[cmd]) item.documentation = new vscode.MarkdownString(commandDocs[cmd]);
					completions.push(item);
				}
				for (const func of allFunctions) {
					const item = new vscode.CompletionItem(func, vscode.CompletionItemKind.Function);
					item.detail = 'PennMUSH Function';
					if (functionDocs[func]) item.documentation = new vscode.MarkdownString(functionDocs[func]);
					switch (func) {
						case 'if':
							item.insertText = new vscode.SnippetString('if(${1:condition}, ${2:true}, ${3:false})$0');
							break;
						case 'switch':
							item.insertText = new vscode.SnippetString('switch(${1:value}, ${2:pattern1}, ${3:result1}, ${4:default})$0');
							break;
						// … your other snippet cases …
						default:
							item.insertText = func;
					}
					completions.push(item);
				}
				return completions;
			}
		},
		'@', '(', ':'
	);
	context.subscriptions.push(pennmushCompletions);

	// ——————————————————————————————
	// 3) Command to prettify PennMUSH softcode - LOCKED
	const prettifyCommand = vscode.commands.registerCommand(
		'pennmush.prettifySoftcode',
		async () => {
			const editor = vscode.window.activeTextEditor;
			if (!editor) return;

			const doc = editor.document;
			const lines = doc.getText().split(/\r?\n/);
			const edits = new vscode.WorkspaceEdit();
			const headerRx = /^(&[^\s=]+)\s+([^\s=]+)=(.*)$/;

			interface Block { start: number; end: number; header: string; value: string; }
			const blocks: Block[] = [];

			// 1) Gather only the &…= blocks that actually have content
			for (let i = 0; i < lines.length; i++) {
				const m = headerRx.exec(lines[i]);
				if (!m) continue;

				const [, cmd, obj, rawVal] = m;
				const header = `${cmd} ${obj}=`;
				const vals: string[] = [];

				// seed with firstVal only if non-empty
				const first = rawVal.trim();
				if (first) vals.push(first);

				// collect any following non-blank, non-&… header, non-@ command lines
				let j = i + 1;
				while (
					j < lines.length &&
					!headerRx.test(lines[j]) &&
					!lines[j].startsWith('@') &&
					lines[j].trim() !== ''
				) {
					vals.push(lines[j].trim());
					j++;
				}

				const value = vals.join(' ').trim();
				// only keep blocks that have something to expand
				if (value) {
					blocks.push({ start: i, end: j, header, value });
				}

				i = j - 1;  // jump past any lines we just consumed
			}

			// 2) Replace them bottom-up so edits don’t shift subsequent ranges
			for (const b of blocks.sort((a, b) => b.start - a.start)) {
				const formatted = formatSoftcodeValue(b.value);
				const indented = formatted.map(l => '  ' + l).join('\n');
				const replacement = `${b.header}\n${indented}\n`;

				edits.replace(
					doc.uri,
					new vscode.Range(b.start, 0, b.end, 0),
					replacement
				);
			}

			await vscode.workspace.applyEdit(edits);
		}
	);
	context.subscriptions.push(prettifyCommand);

	/**
	 * Recursively splits a softcode value into:
	 *  • any prefix before the first “[”
	 *  • each “[…]” block (including nested)
	 *  • %R codes as their own lines
	 */
	function formatSoftcodeValue(value: string): string[] {
		const out: string[] = [];
		let buf = '';
		let depth = 0;
		let idx = 0;

		while (idx < value.length) {
			const ch = value[idx];

			if (ch === '[') {
				// flush text before the “[”
				if (buf.trim()) {
					out.push(indentLine(buf.trim(), depth));
				}
				buf = '[';
				depth++;
				idx++;
			}
			else if (ch === ']') {
				buf += ']';
				out.push(indentLine(buf.trim(), depth));
				buf = '';
				depth = Math.max(0, depth - 1);
				idx++;
			}
			else if (value.startsWith('%R', idx)) {
				// flush preceding text
				if (buf.trim()) {
					out.push(indentLine(buf.trim(), depth));
					buf = '';
				}
				out.push(indentLine('%R', depth));
				idx += 2;
			}
			else {
				buf += ch;
				idx++;
			}
		}
		if (buf.trim()) {
			out.push(indentLine(buf.trim(), depth));
		}
		return out;
	}

	function indentLine(line: string, depth: number): string {
		return '  '.repeat(depth) + line;
	}

	// ——————————————————————————————
	// 4) Formatter: collapse indented PennMUSH blocks back to single lines
	const pennmushFormatter = vscode.languages.registerDocumentFormattingEditProvider(
		'pennmush',
		{
			provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
				const text = document.getText();
				const lines = text.split(/\r?\n/);
				const edits: vscode.TextEdit[] = [];
				// match any &Something Something= header
				const headerRx = /^(&[^\s=]+)\s+([^\s=]+)=/;

				// work from bottom up so edits don't shift later ranges
				for (let i = lines.length - 1; i >= 0; i--) {
					if (!headerRx.test(lines[i])) continue;

					// collapse this header plus any following indented lines
					let j = i + 1;
					let collapsed = lines[i];
					while (j < lines.length && lines[j].startsWith('  ')) {
						collapsed += lines[j].trim();
						j++;
					}

					edits.push(
						vscode.TextEdit.replace(
							new vscode.Range(
								new vscode.Position(i, 0),
								new vscode.Position(j, 0)
							),
							collapsed + '\n'
						)
					);
				}

				return edits;
			}
		}
	);
	context.subscriptions.push(pennmushFormatter);

	context.subscriptions.push(
		vscode.languages.registerSignatureHelpProvider(
			'pennmush',
			{
				provideSignatureHelp(
					document: vscode.TextDocument,
					position: vscode.Position,
					token: vscode.CancellationToken,
					context: vscode.SignatureHelpContext
				): vscode.SignatureHelp | null {
					// get text up to the cursor
					const line = document.lineAt(position.line).text.substring(0, position.character);
					// find “name(” right before cursor
					const fnMatch = /([A-Za-z_]\w*)\($/.exec(line);
					if (!fnMatch) return null;
					const fnName = fnMatch[1];
					const sigDef = functionSignatures[fnName];
					if (!sigDef) return null;

					// build ParameterInformation
					const params = sigDef.params.map(p => new vscode.ParameterInformation(p));
					const sigInfo = new vscode.SignatureInformation(sigDef.label, sigDef.documentation);
					sigInfo.parameters = params;

					const help = new vscode.SignatureHelp();
					help.signatures = [sigInfo];
					help.activeSignature = 0;
					// count commas to set activeParameter
					const commaCount = (line.match(/,/g) || []).length;
					help.activeParameter = Math.min(commaCount, params.length - 1);

					return help;
				}
			},
			'(', ','  // trigger on open‐paren and commas
		)
	);
}

// This function updates the diagnostics for a given document
// It checks for unmatched brackets, unknown functions, and other syntax issues
export function updateDiagnostics(
	doc: vscode.TextDocument,
	diagnostics: vscode.DiagnosticCollection
): void {
	if (doc.languageId !== 'pennmush') return;

	const text = doc.getText();
	const lines = text.split(/\r?\n/);
	const diags: vscode.Diagnostic[] = [];

	// 1) Defined attributes from @set commands
	const definedAttrs = new Set<string>();
	const attrDefRegex = /@set\s+\S+\/([A-Za-z_]\w*)=/g;
	for (const line of lines) {
		let m: RegExpExecArray | null;
		while ((m = attrDefRegex.exec(line))) {
			definedAttrs.add(m[1]);
		}
	}
	const knownAttrs = new Set([...definedAttrs, ...builtInAttributes]);
	const knownCommands = new Set(allCommands.map(c => c.toLowerCase()));
	const knownFunctions = new Set(allFunctions.map(f => f.toLowerCase()));

	// 2) Bracket stack
	const stack: { char: string; line: number; col: number }[] = [];

	lines.forEach((line, i) => {
		// 2a) Skip @decompile comment headers like @@ Object (#1234)
		if (line.trim().startsWith('@@')) {
			return;
		}
		// 2b) Track brackets
		for (let j = 0; j < line.length; j++) {
			const ch = line[j];
			const prev = line[j - 1];

			// Skip escaped characters
			if (prev === '\\') continue;

			if ('({['.includes(ch)) {
				stack.push({ char: ch, line: i, col: j });
			} else if (')}]'.includes(ch)) {
				const matchFor: Record<string, string> = { ')': '(', '}': '{', ']': '[' };
				const expected = matchFor[ch];
				const last = stack[stack.length - 1];
				if (last && last.char === expected) {
					stack.pop();
				} else {
					diags.push(new vscode.Diagnostic(
						new vscode.Range(i, j, i, j + 1),
						`Unmatched '${ch}'`,
						vscode.DiagnosticSeverity.Error
					));
				}
			}
		}

		// 2c) Function calls (nested-aware)
		const fnNameRegex = /\b([A-Za-z_]\w*)\s*\(/g;
		let fnMatch: RegExpExecArray | null;
		while ((fnMatch = fnNameRegex.exec(line))) {
			const name = fnMatch[1];
			const funcStart = fnMatch.index;
			const openParenPos = fnNameRegex.lastIndex - 1;

			// Find matching ')' with nesting
			let depth = 1, pos = openParenPos;
			while (pos < line.length - 1 && depth > 0) {
				pos++;
				const ch = line[pos];
				if (ch === '(') depth++;
				else if (ch === ')') depth--;
			}
			if (depth !== 0) continue;

			const endParenPos = pos;
			const fullRange = new vscode.Range(i, funcStart, i, endParenPos + 1);
			const argsStr = line.slice(openParenPos + 1, endParenPos);

			// Split arguments by top-level commas (handle nested calls)
			const args: string[] = [];
			let buf = '', parenDepth = 0;
			for (let k = 0; k < argsStr.length; k++) {
				const c = argsStr[k];
				const prev = argsStr[k - 1];

				if (prev === '\\') {
					buf += c;
					continue;
				}

				if (c === '(') { parenDepth++; buf += c; }
				else if (c === ')') { parenDepth--; buf += c; }
				else if (c === ',' && parenDepth === 0) {
					args.push(buf.trim());
					buf = '';
				} else {
					buf += c;
				}
			}
			if (buf.trim()) args.push(buf.trim());

			const argCount = argsStr.trim() === '' ? 0 : args.length;

			if (!knownFunctions.has(name.toLowerCase())) {
				diags.push(new vscode.Diagnostic(
					fullRange,
					`Unknown function '${name}'`,
					vscode.DiagnosticSeverity.Warning
				));
			}
			if (name.toLowerCase() === 'if' && argCount < 2) {
				diags.push(new vscode.Diagnostic(
					fullRange,
					`'if' expects at least 2 arguments (condition and true-result), got ${argCount}`,
					vscode.DiagnosticSeverity.Error
				));
			}
			if (name.toLowerCase() === 'switch' && argCount < 4) {
				diags.push(new vscode.Diagnostic(
					fullRange,
					`'switch' expects at least 4 arguments, got ${argCount}`,
					vscode.DiagnosticSeverity.Error
				));
			}
		}

		// 2d) Unknown commands
		const cmdRegex = /(^|\s)([@!][A-Za-z_]\w*)/g;
		let cmdMatch: RegExpExecArray | null;
		while ((cmdMatch = cmdRegex.exec(line))) {
			const cmd = cmdMatch[2];
			const startPos = cmdMatch.index + cmdMatch[1].length;
			if (!knownCommands.has(cmd.toLowerCase())) {
				diags.push(new vscode.Diagnostic(
					new vscode.Range(i, startPos, i, startPos + cmd.length),
					`Unknown command '${cmd}'`,
					vscode.DiagnosticSeverity.Warning
				));
			}
		}

		// 2e) Substitutions like %q0, %q<foo>, %va, %$, etc.
		const substRegex = /%([0-9!@#nN~:kqva-wxzi$+=SOpA])(?:<([^>]+)>)?/g;
		let substMatch: RegExpExecArray | null;
		while ((substMatch = substRegex.exec(line))) {
			const fullMatch = substMatch[0];
			const type = substMatch[1];
			const named = substMatch[2];

			// Named register: %q<foo>
			if (type === 'q' && named) {
				if (!knownAttrs.has(named)) {
					const range = new vscode.Range(i, substMatch.index, i, substMatch.index + fullMatch.length);
					diags.push(new vscode.Diagnostic(
						range,
						`Use of undefined named register '%q<${named}>'`,
						vscode.DiagnosticSeverity.Warning
					));
				}
			}
		}
	});

	// 3) Flush any leftover open brackets
	for (const un of stack) {
		diags.push(new vscode.Diagnostic(
			new vscode.Range(un.line, un.col, un.line, un.col + 1),
			`Unmatched '${un.char}'`,
			vscode.DiagnosticSeverity.Error
		));
	}

	// 4) Apply all collected diagnostics
	diagnostics.set(doc.uri, diags);
}

// This method is called when your extension is deactivated
export function deactivate() { }