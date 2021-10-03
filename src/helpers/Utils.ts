export class Utils {
    public static isStringEmpty(str: string, checkWhitespace = true): boolean {
        if (str != undefined) {
            if (checkWhitespace) {
                return str.trim().length == 0;
            }
            else {
                return str.length == 0;
            }
        }
        else {
            return true;
        }
    }
}