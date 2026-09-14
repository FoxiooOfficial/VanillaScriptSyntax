"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
const tree = {
    "va": {
        "Library": {
            "Math": {
                "Consts": {
                    "__PI": "Return 3.14159265358979323846",
                    "__NAN": "Return a NaN",
                    "__INF": "Return a infinity",
                    "__INFN": "Return a -infinity",
                },
                "abs": "Return absolute value of x",
                "fma": "Return fused multiply-add",
                "mad": "Return multiply-add",
                "dim": "Return the positive difference between x and y",
                "fmod": "Return the remainder of a floating-point division",
                "remainder": "Return the remainder of the division",
                "mod": "Return modulo of x and y",
                "min": "Return minimum of x and y",
                "max": "Return maximum of x and y",
                "clamp": "Return a value to the range between the minimum and maximum",
                "saturate": "Return a value limited to a range between 0 and 1",
                "range": "Return maps a value from one range to another",
                "lerp": "Return linear interpolation",
                "invlerp": "Return inverse linear interpolation",
                "cos": "Return cosine of x",
                "sin": "Return sine of x",
                "tan": "Return tangent of x",
                "sec": "Return secant of x",
                "csc": "Return cosecant of x",
                "cot": "Return cotangent of x",
                "acos": "Return arc cosine of x",
                "asin": "Return arc sine of x",
                "atan": "Return arc tangent of x",
                "atan2": "Return arc tangent of y / x",
                "asec": "Return arc secant of x",
                "acsc": "Return arc cosecant of x",
                "acot": "Return arc cotangent of x",
                "cosh": "Return hyperbolic cosine of x",
                "sinh": "Return hyperbolic sine of x",
                "tanh": "Return hyperbolic tangent of x",
                "sech": "Return hyperbolic secant of x",
                "csch": "Return hyperbolic cosecant of x",
                "coth": "Return hyperbolic cotangent of x",
                "acosh": "Return inverse hyperbolic cosine of x",
                "asinh": "Return inverse hyperbolic sine of x",
                "atanh": "Return inverse hyperbolic tangent of x",
                "asech": "Return inverse hyperbolic secant of x",
                "acsch": "Return inverse hyperbolic cosecant of x",
                "acoth": "Return inverse hyperbolic cotangent of x",
                "degrees": "Convert radians to degrees",
                "radians": "Convert degrees to radians",
                "sqrt": "Return square root of x",
                "rsqrt": "Return inverse square root of x",
                "cbrt": "Return cube root of x",
                "sqrtw": "Return root of x with base y",
                "rsqrtw": "Return inverse root of x with base y",
                "pow": "Return x raised to the power y",
                "hypot2D": "Return length of the hypotenuse in a 2D",
                "hypot3D": "Return length of the hypotenuse in a 3D",
                "hypot4D": "Return length of the hypotenuse in a 4D",
                "exp": "Return e raised to the given power",
                "exp2": "Return 2 raised to the given power",
                "exp10": "Return common (base 10) raised to the given power",
                "expm1": "Return e raised to the given power, minus 1",
                "log": "Return natural (base e) logarithm",
                "log2": "Return the base 2 logarithm",
                "log10": "Return common (base 10) logarithm",
                "logp1": "Retrun natural logarithm (to base e) of 1 plus",
                "erf": "Error function",
                "erfc": "Complementary error function",
                "tgamma": "Gamma function",
                "lgamma": "Natural logarithm of absolute value of gamma function",
                "factorial": "Return factorial of x",
                "dot2D": "Return the 2D dot product",
                "dot3D": "Return the 3D dot product",
                "dot4D": "Return the 4D dot product",
                "cross2D": "Return the 2D vector product",
                "cross3D": "Return the 3D vector product (target)",
                "cross4D": "Return the 4D vector product (target)",
                "normalize2D": "Return the 2D normalized vector component (target)",
                "normalize3D": "Return the 3D normalized vector component (target)",
                "normalize4D": "Return the 4D normalized vector component (target)",
                "dist2D": "Return the 2D distance between two points",
                "dist3D": "Return the 3D distance between two points",
                "dist4D": "Return the 4D distance between two points",
                "reflect2D": "Return the 2D reflection vector (target)",
                "reflect3D": "Return the 3D reflection vector (target)",
                "reflect4D": "Return the 4D reflection vector (target)",
                "refract2D": "Return the 2D reflection vector for a refraction (target)",
                "refract3D": "Return the 3D reflection vector for a refraction (target)",
                "refract4D": "Return the 4D reflection vector for a refraction (target)",
                "length2D": "Return the length of a 2D vector",
                "length3D": "Return the length of a 3D vector",
                "length4D": "Return the length of a 4D vector",
                "ceil": "Return nearest integer not less than the given value",
                "floor": "Return nearest integer not greater than the given value",
                "round": "Return nearest integer, rounding away from zero in halfway cases",
                "trunc": "Return nearest integer not greater in magnitude than the given value",
                "fract": "Return fractional part",
                "nearbyint": "Return nearest integer using current rounding mode",
                "rint": "Return like nearbyint with exception if the result differs",
                "frexpf": "Return mantissa * 2^exp (fraction)",
                "frexpe": "Return mantissa * 2^exp (exponent)",
                "ldexp": "Return x * 2^exp",
                "scalbn": "Return x * FLT_RADIX^n (usually 2^n)",
                "ilogb": "Return the exponent of x as a signed integer",
                "logb": "Return the exponent of x as a floating-point number",
                "gcd": "Greatest common divisor",
                "lcm": "Least Common Multiple",
                "iseven": "Returns 1 IF the number is even, ELSE 0",
                "isodd": "Returns 1 IF the number is odd, ELSE 0",
                "isprime": "Returns 1 IF the number is prime, ELSE 0 ",
                "isperfect": "Returns 1 IF the number is perfect, ELSE 0",
                "randf": "Random float in (0, 1)",
                "randrangef": "Random float in (x, y)",
                "randrange": "Random integer in (x, y)",
                "beta": "Return Euler integral of the first kind",
                "isnan": "Return 1 IF x is NaN, ELSE 0",
                "isinf": "Return 1 IF x is infinite, ELSE 0",
                "isfinite": "Return 1 IF x is finite, ELSE 0",
                "isnormal": "Return 1 IF x is normal, ELSE 0",
                "signbit": "Return non-zero IF sign of x is negative",
                "sign": "Return sign of x",
                "copysign": "Return x with the sign of y",
                "flipsign": "Return x with the sign of x * y",
                "step": "Return 0.0 IF x < edge, ELSE 1.0",
                "smoothstep": "Hermite interpolation between 0 and 1"
            },
            "String": {
                "length": "Returns the length of the character string",
                "toupper": "",
                "tolower": "",
                "toswap": "",
            },
            "System": {},
            "File": {},
            "Network": {},
            "Time": {},
            "IO": {
                "println": "Displays the message specified within the function and adds a new line at the end",
                "print": "Displays the message specified within the function",
                "errorln": "Displays the error message specified within the function and adds a new line at the end",
                "error": "Displays the error message specified within the function",
                "warnln": "Displays the warning message specified within the function and adds a new line at the end",
                "warn": "Displays the warning message specified within the function"
            }
        },
        "Conv": {
            "bool": "Convert the input data type to bool",
            "int_8": "Convert the input data type to int_8",
            "int_16": "Convert the input data type to int_16",
            "int_32": "Convert the input data type to int_32",
            "int_64": "Convert the input data type to int_64",
            "float_16": "Convert the input data type to float_16",
            "float_8": "Convert the input data type to float_8",
            "float_32": "Convert the input data type to float_32",
            "float_64": "Convert the input data type to float_64",
            "bool_2": "Convert the input data type to bool_2",
            "int2_8": "Convert the input data type to int2_8",
            "int2_16": "Convert the input data type to int2_16",
            "int2_32": "Convert the input data type to int2_32",
            "int2_64": "Convert the input data type to int2_64",
            "float2_16": "Convert the input data type to float2_16",
            "float2_8": "Convert the input data type to float2_8",
            "float2_32": "Convert the input data type to float2_32",
            "float2_64": "Convert the input data type to float2_64",
            "bool_3": "Convert the input data type to bool_3",
            "int3_8": "Convert the input data type to int3_8",
            "int3_16": "Convert the input data type to int3_16",
            "int3_32": "Convert the input data type to int3_32",
            "int3_64": "Convert the input data type to int3_64",
            "float3_16": "Convert the input data type to float3_16",
            "float3_8": "Convert the input data type to float3_8",
            "float3_32": "Convert the input data type to float3_32",
            "float3_64": "Convert the input data type to float3_64",
            "bool_4": "Convert the input data type to bool_4",
            "int4_8": "Convert the input data type to int4_8",
            "int4_16": "Convert the input data type to int4_16",
            "int4_32": "Convert the input data type to int4_32",
            "int4_64": "Convert the input data type to int4_64",
            "float4_16": "Convert the input data type to float4_16",
            "float4_8": "Convert the input data type to float4_8",
            "float4_32": "Convert the input data type to float4_32",
            "float4_64": "Convert the input data type to float4_64",
            "string": "Convert the input data type to string",
            //"void"      : "Convert the input data type to void",
            //"lambda"    : "Convert the input data type to lambda",
            "point": "Convert the input data type to point",
            "pointer": "Convert the input data type to pointer",
            "object": "Convert the input data type to object",
            //"auto"      : "Convert the input data type to auto"
        },
    },
    "CTFMMF2": {},
    "Vanilla": "va"
};
const types = [
    'bool', 'bool2', 'bool3', 'bool4',
    'bool1x2', 'bool2x2', 'bool3x2', 'bool4x2',
    'bool1x3', 'bool2x3', 'bool3x3', 'bool4x3',
    'bool1x4', 'bool2x4', 'bool3x4', 'bool4x4',
    'int_8', 'int2_8', 'int3_8', 'int4_8',
    'int1x2_8', 'int2x2_8', 'int3x2_8', 'int4x2_8',
    'int1x3_8', 'int2x3_8', 'int3x3_8', 'int4x3_8',
    'int1x4_8', 'int2x4_8', 'int3x4_8', 'int4x4_8',
    'int_16', 'int2_16', 'int3_16', 'int4_16',
    'int1x2_16', 'int2x2_16', 'int3x2_16', 'int4x2_16',
    'int1x3_16', 'int2x3_16', 'int3x3_16', 'int4x3_16',
    'int1x4_16', 'int2x4_16', 'int3x4_16', 'int4x4_16',
    'int_32', 'int2_32', 'int3_32', 'int4_32',
    'int1x2_32', 'int2x2_32', 'int3x2_32', 'int4x2_32',
    'int1x3_32', 'int2x3_32', 'int3x3_32', 'int4x3_32',
    'int1x4_32', 'int2x4_32', 'int3x4_32', 'int4x4_32',
    'int_64', 'int2_64', 'int3_64', 'int4_64',
    'int1x2_64', 'int2x2_64', 'int3x2_64', 'int4x2_64',
    'int1x3_64', 'int2x3_64', 'int3x3_64', 'int4x3_64',
    'int1x4_64', 'int2x4_64', 'int3x4_64', 'int4x4_64',
    'float_8', 'float2_8', 'float3_8', 'float4_8',
    'float1x2_8', 'float2x2_8', 'float3x2_8', 'float4x2_8',
    'float1x3_8', 'float2x3_8', 'float3x3_8', 'float4x3_8',
    'float1x4_8', 'float2x4_8', 'float3x4_8', 'float4x4_8',
    'float_16', 'float2_16', 'float3_16', 'float4_16',
    'float1x2_16', 'float2x2_16', 'float3x2_16', 'float4x2_16',
    'float1x3_16', 'float2x3_16', 'float3x3_16', 'float4x3_16',
    'float1x4_16', 'float2x4_16', 'float3x4_16', 'float4x4_16',
    'float_32', 'float2_32', 'float3_32', 'float4_32',
    'float1x2_32', 'float2x2_32', 'float3x2_32', 'float4x2_32',
    'float1x3_32', 'float2x3_32', 'float3x3_32', 'float4x3_32',
    'float1x4_32', 'float2x4_32', 'float3x4_32', 'float4x4_32',
    'float_64', 'float2_64', 'float3_64', 'float4_64',
    'float1x2_64', 'float2x2_64', 'float3x2_64', 'float4x2_64',
    'float1x3_64', 'float2x3_64', 'float3x3_64', 'float4x3_64',
    'float1x4_64', 'float2x4_64', 'float3x4_64', 'float4x4_64',
    'string',
    'void', 'lambda',
    'point', 'pointer',
    'object', 'auto'
];
const keywords = [
    'if', 'elif', 'unless', 'elless', 'else',
    'for', 'while', 'until', 'break', 'continue',
    'return', 'fun', 'crash', 'noperation'
];
const constants = ['true', 'false', 'null', 'maybe'];
const systemvar = ['__VANILLA_FUNCTION_CALL', '__VANILLA_VERSION_TARGET', '__VANILLA_PROGRAM_TYPE', '__VANILLA_FUNCTION_EXECUTE_MODE'];
const directives = [
    { label: '#PROGRAM.PRE', desc: 'Program Preprocessor Block and Runtime Flags' },
    { label: '#LOAD.LIBRARY', desc: 'Block defining library pointers' },
    { label: '#LOAD.SOURCE', desc: 'Block defining pointers to external scripts' }
];
function activate(context) {
    const dotprovider = vscode.languages.registerCompletionItemProvider('va', {
        provideCompletionItems(document, position) {
            const prefix = document.lineAt(position).text.substring(0, position.character);
            const match = prefix.match(/([a-zA-Z0-9_.]+)\.$/);
            if (!match) {
                return undefined;
            }
            let path = match[1].split('.');
            if (path[0] === 'Vanilla')
                path[0] = 'va';
            let curr = tree;
            for (const part of path) {
                if (curr[part]) {
                    curr = curr[part];
                }
                else {
                    return undefined;
                }
            }
            const items = [];
            for (const key in curr) {
                const item = new vscode.CompletionItem(key);
                if (typeof curr[key] === 'string') {
                    item.kind = vscode.CompletionItemKind.Method;
                    item.detail = curr[key];
                }
                else {
                    item.kind = vscode.CompletionItemKind.Module;
                    item.detail = `Module ${key}`;
                }
                items.push(item);
            }
            return items;
        }
    }, '.');
    context.subscriptions.push(dotprovider);
    const globalprovider = vscode.languages.registerCompletionItemProvider('va', {
        provideCompletionItems(document, position) {
            const prefix = document.lineAt(position).text.substring(0, position.character);
            if (prefix.match(/[a-zA-Z0-9_]+\.[a-zA-Z0-9_]*$/)) {
                return undefined;
            }
            const items = [];
            types.forEach(t => {
                const item = new vscode.CompletionItem(t, vscode.CompletionItemKind.TypeParameter);
                item.detail = "Data type";
                items.push(item);
            });
            keywords.forEach(k => {
                const item = new vscode.CompletionItem(k, vscode.CompletionItemKind.Keyword);
                items.push(item);
            });
            constants.forEach(c => {
                const item = new vscode.CompletionItem(c, vscode.CompletionItemKind.Constant);
                items.push(item);
            });
            systemvar.forEach(v => {
                const item = new vscode.CompletionItem(v, vscode.CompletionItemKind.Variable);
                item.detail = "System variable";
                items.push(item);
            });
            directives.forEach(d => {
                const item = new vscode.CompletionItem(d.label, vscode.CompletionItemKind.Snippet);
                item.detail = d.desc;
                item.insertText = new vscode.SnippetString(`${d.label} :(\n\t$1\n):\n$0`);
                items.push(item);
            });
            return items;
        }
    }, '#', '_');
    context.subscriptions.push(dotprovider, globalprovider);
}
function deactivate() { }
