// NOTE: This file is generated. Do NOT modify it manually.
import type { Denops } from "https://deno.land/x/denops_core@v5.0.0/mod.ts";
import {
  getbufvar,
  getwinvar,
  setbufvar,
  setwinvar,
} from "./../function/mod.ts";
import { globalOptions, localOptions, options } from "./../variable/mod.ts";
import type {
  GlobalOption,
  GlobalOrLocalOption,
  LocalOption,
} from "./types.ts";

/**
 * The ASCII code for the first letter of the Hebrew alphabet.  The
 * routine that maps the keyboard in Hebrew mode, both in Insert mode
 * (when hkmap is set) and on the command-line (when hitting CTRL-_)
 * outputs the Hebrew characters in the range [aleph..aleph+26].
 * aleph=128 applies to PC code, and aleph=224 applies to ISO 8859-8.
 * See `rileft.txt`.
 *
 * (default 128 for MS-Windows, 224 otherwise)
 *
 * *only available when compiled with the `+rightleft` feature*
 */
export const aleph: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "aleph");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "aleph", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "aleph");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "aleph");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "aleph", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "aleph");
  },
};

/**
 * Allow CTRL-_ in Insert and Command-line mode.  This is default off, to
 * avoid that users that accidentally type CTRL-_ instead of SHIFT-_ get
 * into reverse Insert mode, and don't know how to get out.  See
 * 'revins'.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *only available when compiled with the `+rightleft` feature*
 */
export const allowrevins: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "allowrevins");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "allowrevins", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "allowrevins");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "allowrevins");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "allowrevins", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "allowrevins");
  },
};

/**
 * Only effective when 'encoding' is "utf-8" or another Unicode encoding.
 * Tells Vim what to do with characters with East Asian Width Class
 * Ambiguous (such as Euro, Registered Sign, Copyright Sign, Greek
 * letters, Cyrillic letters).
 *
 * There are currently two possible values:
 * "single":       Use the same width as characters in US-ASCII.  This is
 *                 expected by most users.
 * "double":       Use twice the width of ASCII characters.
 *
 * The value "double" cannot be used if 'listchars' or 'fillchars'
 * contains a character that would be double width.  These errors may
 * also be given when calling setcellwidths().
 *
 * The values are overruled for characters specified with
 * `setcellwidths()`.
 *
 * There are a number of CJK fonts for which the width of glyphs for
 * those characters are solely based on how many octets they take in
 * legacy/traditional CJK encodings.  In those encodings, Euro,
 * Registered sign, Greek/Cyrillic letters are represented by two octets,
 * therefore those fonts have "wide" glyphs for them.  This is also
 * true of some line drawing characters used to make tables in text
 * file.  Therefore, when a CJK font is used for GUI Vim or
 * Vim is running inside a terminal (emulators) that uses a CJK font
 * (or Vim is run inside an xterm invoked with "-cjkwidth" option.),
 * this option should be set to "double" to match the width perceived
 * by Vim with the width of glyphs in the font.  Perhaps it also has
 * to be set to "double" under CJK MS-Windows when the system locale is
 * set to one of CJK locales.  See Unicode Standard Annex #11
 * (http://www.unicode.org/reports/tr11).
 *
 * Vim may set this option automatically at startup time when Vim is
 * compiled with the `+termresponse` feature and if `t_u7` is set to the
 * escape sequence to request cursor position report.  The response can
 * be found in `v:termu7resp`.
 *
 * (default: "single")
 */
export const ambiwidth: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "ambiwidth");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "ambiwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ambiwidth");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "ambiwidth");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "ambiwidth", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ambiwidth");
  },
};

/**
 * When on, Vim will change the current working directory whenever you
 * open a file, switch buffers, delete a buffer or open/close a window.
 * It will change to the directory containing the file which was opened
 * or selected.  When a buffer has no name it also has no directory, thus
 * the current directory won't change when navigating to it.
 * Note: When this option is on some plugins may not work.
 *
 * (default off)
 *
 * *only available when compiled with it, use exists("+autochdir") to check*
 */
export const autochdir: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "autochdir");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "autochdir", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "autochdir");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "autochdir");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "autochdir", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "autochdir");
  },
};

/**
 * This option can be set to start editing Arabic text.
 * Setting this option will:
 * - Set the 'rightleft' option, unless 'termbidi' is set.
 * - Set the 'arabicshape' option, unless 'termbidi' is set.
 * - Set the 'keymap' option to "arabic"; in Insert mode CTRL-^ toggles
 *   between typing English and Arabic key mapping.
 * - Set the 'delcombine' option
 * Note that 'encoding' must be "utf-8" for working with Arabic text.
 *
 * Resetting this option will:
 * - Reset the 'rightleft' option.
 * - Disable the use of 'keymap' (without changing its value).
 * Note that 'arabicshape' and 'delcombine' are not reset (it is a global
 * option).
 * NOTE: This option is reset when 'compatible' is set.
 * Also see `arabic.txt`.
 *
 * (default off)
 *
 * *only available when compiled with the `+arabic` feature*
 */
export const arabic: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "arabic");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "arabic", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "arabic");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "arabic");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "arabic", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "arabic");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&arabic");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&arabic", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&arabic");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&arabic", value);
  },
};

/**
 * When on and 'termbidi' is off, the required visual character
 * corrections that need to take place for displaying the Arabic language
 * take effect.  Shaping, in essence, gets enabled; the term is a broad
 * one which encompasses:
 *   a) the changing/morphing of characters based on their location
 *      within a word (initial, medial, final and stand-alone).
 *   b) the enabling of the ability to compose characters
 *   c) the enabling of the required combining of some characters
 * When disabled the display shows each character's true stand-alone
 * form.
 * Arabic is a complex language which requires other settings, for
 * further details see `arabic.txt`.
 * NOTE: This option is set when 'compatible' is set.
 *
 * (default on)
 *
 * *only available when compiled with the `+arabic` feature*
 */
export const arabicshape: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "arabicshape");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "arabicshape", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "arabicshape");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "arabicshape");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "arabicshape", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "arabicshape");
  },
};

/**
 * Copy indent from current line when starting a new line (typing `<CR>`
 * in Insert mode or when using the "o" or "O" command).  If you do not
 * type anything on the new line except `<BS>` or CTRL-D and then type
 * `<Esc>`, CTRL-O or `<CR>`, the indent is deleted again.  Moving the cursor
 * to another line has the same effect, unless the 'I' flag is included
 * in 'cpoptions'.
 * When autoindent is on, formatting (with the "gq" command or when you
 * reach 'textwidth' in Insert mode) uses the indentation of the first
 * line.
 * When 'smartindent' or 'cindent' is on the indent is changed in
 * a different way.
 * The 'autoindent' option is reset when the 'paste' option is set and
 * restored when 'paste' is reset.
 *
 * (default off)
 */
export const autoindent: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "autoindent");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "autoindent", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "autoindent");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "autoindent");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "autoindent", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "autoindent");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&autoindent");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&autoindent", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&autoindent");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&autoindent", value);
  },
};

/**
 * When a file has been detected to have been changed outside of Vim and
 * it has not been changed inside of Vim, automatically read it again.
 * When the file has been deleted this is not done, so you have the text
 * from before it was deleted.  When it appears again then it is read.
 * `timestamp`
 * If this option has a local value, use this command to switch back to
 * using the global value:
 *
 *     :set autoread<
 *
 * (default off)
 */
export const autoread: GlobalOrLocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "autoread");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "autoread", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "autoread");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "autoread");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "autoread", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "autoread");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "autoread");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "autoread", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "autoread");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&autoread");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&autoread", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&autoread");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&autoread", value);
  },
};

/**
 * Write the contents of the file, if it has been modified, on each
 * `:next`, `:rewind`, `:last`, `:first`, `:previous`, `:stop`,
 * `:suspend`, `:tag`, `:!`, `:make`, CTRL-] and CTRL-^ command; and when
 * a `:buffer`, CTRL-O, CTRL-I, `'{A-Z0-9}`, or `` `{A-Z0-9}`` command takes one
 * to another file.
 * A buffer is not written if it becomes hidden, e.g. when 'bufhidden' is
 * set to "hide" and `:next` is used.
 * Note that for some commands the 'autowrite' option is not used, see
 * 'autowriteall' for that.
 * Some buffers will not be written, specifically when 'buftype' is
 * "nowrite", "nofile", "terminal" or "prompt".
 *
 * (default off)
 */
export const autowrite: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "autowrite");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "autowrite", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "autowrite");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "autowrite");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "autowrite", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "autowrite");
  },
};

/**
 * Like 'autowrite', but also used for commands ":edit", ":enew", ":quit",
 * ":qall", ":exit", ":xit", ":recover" and closing the Vim window.
 * Setting this option also implies that Vim behaves like 'autowrite' has
 * been set.
 *
 * (default off)
 */
export const autowriteall: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "autowriteall");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "autowriteall", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "autowriteall");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "autowriteall");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "autowriteall", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "autowriteall");
  },
};

/**
 * When set to "dark", Vim will try to use colors that look good on a
 * dark background.  When set to "light", Vim will try to use colors that
 * look good on a light background.  Any other value is illegal.
 * Vim tries to set the default value according to the terminal used.
 * This will not always be correct.
 * Setting this option does not change the background color, it tells Vim
 * what the background color looks like.  For changing the background
 * color, see `:hi-normal`.
 *
 * When 'background' is set Vim will adjust the default color groups for
 * the new value.  But the colors used for syntax highlighting will not
 * change.
 * When a color scheme is loaded (the "g:colors_name" variable is set)
 * setting 'background' will cause the color scheme to be reloaded.  If
 * the color scheme adjusts to the value of 'background' this will work.
 * However, if the color scheme sets 'background' itself the effect may
 * be undone.  First delete the "g:colors_name" variable when needed.
 *
 * When setting 'background' to the default value with:
 *
 *     :set background&
 *
 * Vim will guess the value.  In the GUI this should work correctly,
 * in other cases Vim might not be able to guess the right value.
 * If the GUI supports a dark theme, you can use the "d" flag in
 * 'guioptions', see 'go-d'.
 *
 * When the `t_RB` option is set, Vim will use it to request the background
 * color from the terminal.  If the returned RGB value is dark/light and
 * 'background' is not dark/light, 'background' will be set and the
 * screen is redrawn.  This may have side effects, make t_BG empty in
 * your .vimrc if you suspect this problem.  The response to `t_RB` can
 * be found in `v:termrbgresp`.
 *
 * When starting the GUI, the default value for 'background' will be
 * "light".  When the value is not set in the .gvimrc, and Vim detects
 * that the background is actually quite dark, 'background' is set to
 * "dark".  But this happens only AFTER the .gvimrc file has been read
 * (because the window needs to be opened to find the actual background
 * color).  To get around this, force the GUI window to be opened by
 * putting a ":gui" command in the .gvimrc file, before where the value
 * of 'background' is used (e.g., before ":syntax on").
 *
 * For MS-Windows the default is "dark".
 * For other systems "dark" is used when 'term' is "linux",
 * "screen.linux", "cygwin" or "putty", or $COLORFGBG suggests a dark
 * background.  Otherwise the default is "light".
 *
 * The `:terminal` command and the `term_start()` function use the
 * 'background' value to decide whether the terminal window will start
 * with a white or black background.
 *
 * Normally this option would be set in the .vimrc file.  Possibly
 * depending on the terminal name.  Example:
 *
 *     :if &term == "pcterm"
 *     :  set background=dark
 *     :endif
 *
 * When this option is set, the default settings for the highlight groups
 * will change.  To use other settings, place ":highlight" commands AFTER
 * the setting of the 'background' option.
 * This option is also used in the "$VIMRUNTIME/syntax/syntax.vim" file
 * to select the colors for syntax highlighting.  After changing this
 * option, you must load syntax.vim again to see the result.  This can be
 * done with ":syntax on".
 *
 * (default "dark" or "light", see below)
 */
export const background: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "background");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "background", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "background");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "background");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "background", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "background");
  },
};

/**
 * Influences the working of `<BS>`, `<Del>`, CTRL-W and CTRL-U in Insert
 * mode.  This is a list of items, separated by commas.  Each item allows
 * a way to backspace over something:
 * value   effect
 * indent  allow backspacing over autoindent
 * eol     allow backspacing over line breaks (join lines)
 * start   allow backspacing over the start of insert; CTRL-W and CTRL-U
 *         stop once at the start of insert.
 * nostop  like start, except CTRL-W and CTRL-U do not stop at the start of
 *         insert.
 *
 * When the value is empty, Vi compatible backspacing is used, none of
 * the ways mentioned for the items above are possible.
 *
 * For backwards compatibility with version 5.4 and earlier:
 * value   effect
 *   0     same as ":set backspace=" (Vi compatible)
 *   1     same as ":set backspace=indent,eol"
 *   2     same as ":set backspace=indent,eol,start"
 *   3     same as ":set backspace=indent,eol,nostop"
 *
 * See `:fixdel` if your `<BS>` or `<Del>` key does not do what you want.
 * NOTE: This option is set to "" when 'compatible' is set.
 *
 * (default "", set to "indent,eol,start"
 *  in `defaults.vim`)
 */
export const backspace: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "backspace");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "backspace", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "backspace");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "backspace");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "backspace", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "backspace");
  },
};

/**
 * Make a backup before overwriting a file.  Leave it around after the
 * file has been successfully written.  If you do not want to keep the
 * backup file, but you do want a backup while the file is being
 * written, reset this option and set the 'writebackup' option (this is
 * the default).  If you do not want a backup file at all reset both
 * options (use this if your file system is almost full).  See the
 * `backup-table` for more explanations.
 * When the 'backupskip' pattern matches, a backup is not made anyway.
 * When 'patchmode' is set, the backup may be renamed to become the
 * oldest version of a file.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 */
export const backup: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "backup");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "backup", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "backup");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "backup");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "backup", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "backup");
  },
};

/**
 * When writing a file and a backup is made, this option tells how it's
 * done.  This is a comma-separated list of words.
 *
 * The main values are:
 * "yes"   make a copy of the file and overwrite the original one
 * "no"    rename the file and write a new one
 * "auto"  one of the previous, what works best
 *
 * Extra values that can be combined with the ones above are:
 * "breaksymlink"  always break symlinks when writing
 * "breakhardlink" always break hardlinks when writing
 *
 * Making a copy and overwriting the original file:
 * - Takes extra time to copy the file.
 * + When the file has special attributes, is a (hard/symbolic) link or
 *   has a resource fork, all this is preserved.
 * - When the file is a link the backup will have the name of the link,
 *   not of the real file.
 *
 * Renaming the file and writing a new one:
 * + It's fast.
 * - Sometimes not all attributes of the file can be copied to the new
 *   file.
 * - When the file is a link the new file will not be a link.
 *
 * The "auto" value is the middle way: When Vim sees that renaming the
 * file is possible without side effects (the attributes can be passed on
 * and the file is not a link) that is used.  When problems are expected,
 * a copy will be made.
 *
 * The "breaksymlink" and "breakhardlink" values can be used in
 * combination with any of "yes", "no" and "auto".  When included, they
 * force Vim to always break either symbolic or hard links by doing
 * exactly what the "no" option does, renaming the original file to
 * become the backup and writing a new file in its place.  This can be
 * useful for example in source trees where all the files are symbolic or
 * hard links and any changes should stay in the local source tree, not
 * be propagated back to the original source.
 *
 * One situation where "no" and "auto" will cause problems: A program
 * that opens a file, invokes Vim to edit that file, and then tests if
 * the open file was changed (through the file descriptor) will check the
 * backup file instead of the newly created file.  "crontab -e" is an
 * example.
 *
 * When a copy is made, the original file is truncated and then filled
 * with the new text.  This means that protection bits, owner and
 * symbolic links of the original file are unmodified.  The backup file,
 * however, is a new file, owned by the user who edited the file.  The
 * group of the backup is set to the group of the original file.  If this
 * fails, the protection bits for the group are made the same as for
 * others.
 *
 * When the file is renamed, this is the other way around: The backup has
 * the same attributes of the original file, and the newly written file
 * is owned by the current user.  When the file was a (hard/symbolic)
 * link, the new file will not!  That's why the "auto" value doesn't
 * rename when the file is a link.  The owner and group of the newly
 * written file will be set to the same ones as the original file, but
 * the system may refuse to do this.  In that case the "auto" value will
 * again not rename the file.
 *
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (Vi default for Unix: "yes", otherwise: "auto")
 */
export const backupcopy: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "backupcopy");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "backupcopy", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "backupcopy");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "backupcopy");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "backupcopy", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "backupcopy");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "backupcopy");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "backupcopy", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "backupcopy");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&backupcopy");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&backupcopy", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&backupcopy");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&backupcopy", value);
  },
};

/**
 * List of directories for the backup file, separated with commas.
 * - The backup file will be created in the first directory in the list
 *   where this is possible.  The directory must exist, Vim will not
 *   create it for you.
 * - Empty means that no backup file will be created ('patchmode' is
 *   impossible!).  Writing may fail because of this.
 * - A directory "." means to put the backup file in the same directory
 *   as the edited file.
 * - A directory starting with "./" (or ".\" for MS-Windows) means to put
 *   the backup file relative to where the edited file is.  The leading
 *   "." is replaced with the path name of the edited file.
 *   ("." inside a directory name has no special meaning).
 * - Spaces after the comma are ignored, other spaces are considered part
 *   of the directory name.  To have a space at the start of a directory
 *   name, precede it with a backslash.
 * - To include a comma in a directory name precede it with a backslash.
 * - A directory name may end in an '/'.
 * - For Unix and Win32, if a directory ends in two path separators "//",
 *   the backup file name will be built from the complete path to the
 *   file with all path separators changed to percent '%' signs. This
 *   will ensure file name uniqueness in the backup directory.
 *   On Win32, it is also possible to end with "\\".  However, When a
 *   separating comma is following, you must use "//", since "\\" will
 *   include the comma in the file name. Therefore it is recommended to
 *   use '//', instead of '\\'.
 * - Environment variables are expanded `:set_env`.
 * - Careful with '\' characters, type one before a space, type two to
 *   get one in the option (see `option-backslash`), for example:
 *
 *       :set bdir=c:\\tmp,\ dir\\,with\\,commas,\\\ dir\ with\ spaces
 *
 * - For backwards compatibility with Vim version 3.0 a '>' at the start
 *   of the option is removed.
 * See also 'backup' and 'writebackup' options.
 * If you want to hide your backup files on Unix, consider this value:
 *
 *     :set backupdir=./.backup,~/.backup,.,/tmp
 *
 * You must create a ".backup" directory in each directory and in your
 * home directory for this to work properly.
 * The use of `:set+=` and `:set-=` is preferred when adding or removing
 * directories from the list.  This avoids problems when a future version
 * uses another default.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default for Amiga: ".,t:",
 *  for Win32: ".,$TEMP,c:/tmp,c:/temp"
 *  for Unix: `".,~/tmp,~/"`)
 */
export const backupdir: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "backupdir");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "backupdir", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "backupdir");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "backupdir");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "backupdir", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "backupdir");
  },
};

/**
 * String which is appended to a file name to make the name of the
 * backup file.  The default is quite unusual, because this avoids
 * accidentally overwriting existing files with a backup file.  You might
 * prefer using ".bak", but make sure that you don't have files with
 * ".bak" that you want to keep.
 * Only normal file name characters can be used; `"/\*?[|<>"` are illegal.
 *
 * If you like to keep a lot of backups, you could use a BufWritePre
 * autocommand to change 'backupext' just before writing the file to
 * include a timestamp.
 *
 *     :au BufWritePre * let &bex = '-' .. strftime("%Y%b%d%X") .. '~'
 *
 * Use 'backupdir' to put the backup in a different directory.
 *
 * (default `"~"`, for VMS: "_")
 */
export const backupext: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "backupext");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "backupext", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "backupext");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "backupext");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "backupext", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "backupext");
  },
};

/**
 * A list of file patterns.  When one of the patterns matches with the
 * name of the file which is written, no backup file is created.  Both
 * the specified file name and the full path name of the file are used.
 * The pattern is used like with `:autocmd`, see `autocmd-patterns`.
 * Watch out for special characters, see `option-backslash`.
 * When $TMPDIR, $TMP or $TEMP is not defined, it is not used for the
 * default value.  "/tmp/*" is only used for Unix.
 *
 * WARNING: Not having a backup file means that when Vim fails to write
 * your buffer correctly and then, for whatever reason, Vim exits, you
 * lose both the original file and what you were writing.  Only disable
 * backups if you don't care about losing the file.
 *
 * Note that environment variables are not expanded.  If you want to use
 * $HOME you must expand it explicitly, e.g.:
 *
 *     :let &backupskip = escape(expand('$HOME'), '\') .. '/tmp/*'
 *
 * Note that the default also makes sure that "crontab -e" works (when a
 * backup would be made by renaming the original file crontab won't see
 * the newly created file).  Also see 'backupcopy' and `crontab`.
 *
 * (default: "$TMPDIR/*,$TMP/*,$TEMP/*"
 *  Unix: "/tmp/*,$TMPDIR/*,$TMP/*,$TEMP/*"
 *  Mac: "/private/tmp/*,$TMPDIR/*,$TMP/*,$TEMP/*")
 */
export const backupskip: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "backupskip");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "backupskip", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "backupskip");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "backupskip");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "backupskip", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "backupskip");
  },
};

/**
 * Specifies for which events the bell will not be rung. It is a comma
 * separated list of items. For each item that is present, the bell
 * will be silenced. This is most useful to specify specific events in
 * insert mode to be silenced.
 * You can also make it flash by using 'visualbell'.
 *
 * item        meaning when present
 * all         All events.
 * backspace   When hitting `<BS>` or `<Del>` and deleting results in an
 *             error.
 * cursor      Fail to move around using the cursor keys or
 *             <PageUp>/<PageDown> in `Insert-mode`.
 * complete    Error occurred when using `i_CTRL-X_CTRL-K` or
 *             `i_CTRL-X_CTRL-T`.
 * copy        Cannot copy char from insert mode using `i_CTRL-Y` or
 *             `i_CTRL-E`.
 * ctrlg       Unknown Char after `<C-G>` in Insert mode.
 * error       Other Error occurred (e.g. try to join last line)
 *             (mostly used in `Normal-mode` or `Cmdline-mode`).
 * esc         hitting `<Esc>` in `Normal-mode`.
 * ex          In `Visual-mode`, hitting `Q` results in an error.
 * hangul      Ignored.
 * insertmode  Pressing `<Esc>` in 'insertmode'.
 * lang        Calling the beep module for Lua/Mzscheme/TCL.
 * mess        No output available for `g<`.
 * showmatch   Error occurred for 'showmatch' function.
 * operator    Empty region error `cpo-E`.
 * register    Unknown register after `<C-R>` in `Insert-mode`.
 * shell       Bell from shell output `:!`.
 * spell       Error happened on spell suggest.
 * term        Bell from `:terminal` output.
 * wildmode    More matches in `cmdline-completion` available
 *             (depends on the 'wildmode' setting).
 *
 * This is most useful to fine tune when in Insert mode the bell should
 * be rung. For Normal mode and Ex commands, the bell is often rung to
 * indicate that an error occurred. It can be silenced by adding the
 * "error" keyword.
 *
 * (default "")
 */
export const belloff: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "belloff");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "belloff", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "belloff");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "belloff");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "belloff", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "belloff");
  },
};

/**
 * This option should be set before editing a binary file.  You can also
 * use the `-b` Vim argument.  When this option is switched on a few
 * options will be changed (also when it already was on):
 *         'textwidth'  will be set to 0
 *         'wrapmargin' will be set to 0
 *         'modeline'   will be off
 *         'expandtab'  will be off
 * Also, 'fileformat' and 'fileformats' options will not be used, the
 * file is read and written like 'fileformat' was "unix" (a single `<NL>`
 * separates lines).
 * The 'fileencoding' and 'fileencodings' options will not be used, the
 * file is read without conversion.
 * NOTE: When you start editing a(nother) file while the 'bin' option is
 * on, settings from autocommands may change the settings again (e.g.,
 * 'textwidth'), causing trouble when editing.  You might want to set
 * 'bin' again when the file has been loaded.
 * The previous values of these options are remembered and restored when
 * 'bin' is switched from on to off.  Each buffer has its own set of
 * saved option values.
 * To edit a file with 'binary' set you can use the `++bin` argument.
 * This avoids you have to do ":set bin", which would have effect for all
 * files you edit.
 * When writing a file the `<EOL>` for the last line is only written if
 * there was one in the original file (normally Vim appends an `<EOL>` to
 * the last line if there is none; this would make the file longer).  See
 * the 'endofline' option.
 *
 * (default off)
 */
export const binary: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "binary");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "binary", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "binary");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "binary");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "binary", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "binary");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&binary");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&binary", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&binary");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&binary", value);
  },
};

/**
 * When writing a file and the following conditions are met, a BOM (Byte
 * Order Mark) is prepended to the file:
 * - this option is on
 * - the 'binary' option is off
 * - 'fileencoding' is "utf-8", "ucs-2", "ucs-4" or one of the little/big
 *   endian variants.
 * Some applications use the BOM to recognize the encoding of the file.
 * Often used for UCS-2 files on MS-Windows.  For other applications it
 * causes trouble, for example: "cat file1 file2" makes the BOM of file2
 * appear halfway the resulting file.  Gcc doesn't accept a BOM.
 * When Vim reads a file and 'fileencodings' starts with "ucs-bom", a
 * check for the presence of the BOM is done and 'bomb' set accordingly.
 * Unless 'binary' is set, it is removed from the first line, so that you
 * don't see it when editing.  When you don't change the options, the BOM
 * will be restored when writing the file.
 *
 * (default off)
 */
export const bomb: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "bomb");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "bomb", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "bomb");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "bomb");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "bomb", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "bomb");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&bomb");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&bomb", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&bomb");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&bomb", value);
  },
};

/**
 * This option lets you choose which characters might cause a line
 * break if 'linebreak' is on.  Only works for ASCII and also for 8-bit
 * characters when 'encoding' is an 8-bit encoding.
 *
 * (default " ^I!@*-+;:,./?")
 *
 * *not available when compiled without the `+linebreak` feature*
 */
export const breakat: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "breakat");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "breakat", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "breakat");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "breakat");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "breakat", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "breakat");
  },
};

/**
 * Every wrapped line will continue visually indented (same amount of
 * space as the beginning of that line), thus preserving horizontal blocks
 * of text.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *not available when compiled without the `+linebreak` feature*
 */
export const breakindent: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "breakindent");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "breakindent", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "breakindent");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "breakindent");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "breakindent", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "breakindent");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&breakindent");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&breakindent", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&breakindent");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&breakindent", value);
  },
};

/**
 * Settings for 'breakindent'. It can consist of the following optional
 * items and must be separated by a comma:
 *         min:**{n}**     Minimum text width that will be kept after
 *                     applying 'breakindent', even if the resulting
 *                     text should normally be narrower. This prevents
 *                     text indented almost to the right window border
 *                     occupying lot of vertical space when broken.
 *                     (default: 20)
 *         shift:**{n}**   After applying 'breakindent', the wrapped line's
 *                     beginning will be shifted by the given number of
 *                     characters.  It permits dynamic French paragraph
 *                     indentation (negative) or emphasizing the line
 *                     continuation (positive).
 *                     (default: 0)
 *         sbr         Display the 'showbreak' value before applying the
 *                     additional indent.
 *                     (default: off)
 *         list:**{n}**    Adds an additional indent for lines that match a
 *                     numbered or bulleted list (using the
 *                     'formatlistpat' setting).
 *         list:-1     Uses the length of a match with 'formatlistpat'
 *                     for indentation.
 *                     (default: 0)
 *         column:**{n}**  Indent at column **{n}**. Will overrule the other
 *                     sub-options. Note: an additional indent may be
 *                     added for the 'showbreak' setting.
 *                     (default: off)
 *
 * (default empty)
 *
 * *not available when compiled without the `+linebreak` feature*
 */
export const breakindentopt: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "breakindentopt");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "breakindentopt", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "breakindentopt");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "breakindentopt");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "breakindentopt", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "breakindentopt");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&breakindentopt");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&breakindentopt", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&breakindentopt");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&breakindentopt", value);
  },
};

/**
 * Which directory to use for the file browser:
 *    last         Use same directory as with last file browser, where a
 *                 file was opened or saved.
 *    buffer       Use the directory of the related buffer.
 *    current      Use the current directory.
 *    **{path}**       Use the specified directory
 *
 * (default: "last")
 *
 * *only for Motif, GTK, Mac and Win32 GUI*
 */
export const browsedir: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "browsedir");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "browsedir", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "browsedir");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "browsedir");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "browsedir", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "browsedir");
  },
};

/**
 * This option specifies what happens when a buffer is no longer
 * displayed in a window:
 *   `<empty>`       follow the global 'hidden' option
 *   hide          hide the buffer (don't unload it), even if 'hidden' is
 *                 not set
 *   unload        unload the buffer, even if 'hidden' is set; the
 *                 `:hide` command will also unload the buffer
 *   delete        delete the buffer from the buffer list, even if
 *                 'hidden' is set; the `:hide` command will also delete
 *                 the buffer, making it behave like `:bdelete`
 *   wipe          wipe the buffer from the buffer list, even if
 *                 'hidden' is set; the `:hide` command will also wipe
 *                 out the buffer, making it behave like `:bwipeout`
 *
 * CAREFUL: when "unload", "delete" or "wipe" is used changes in a buffer
 * are lost without a warning.  Also, these values may break autocommands
 * that switch between buffers temporarily.
 * This option is used together with 'buftype' and 'swapfile' to specify
 * special kinds of buffers.   See `special-buffers`.
 *
 * (default: "")
 */
export const bufhidden: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "bufhidden");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "bufhidden", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "bufhidden");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "bufhidden");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "bufhidden", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "bufhidden");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&bufhidden");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&bufhidden", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&bufhidden");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&bufhidden", value);
  },
};

/**
 * When this option is set, the buffer shows up in the buffer list.  If
 * it is reset it is not used for ":bnext", "ls", the Buffers menu, etc.
 * This option is reset by Vim for buffers that are only used to remember
 * a file name or marks.  Vim sets it when starting to edit a buffer.
 * But not when moving to a buffer with ":buffer".
 *
 * (default: on)
 */
export const buflisted: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "buflisted");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "buflisted", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "buflisted");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "buflisted");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "buflisted", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "buflisted");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&buflisted");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&buflisted", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&buflisted");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&buflisted", value);
  },
};

/**
 * The value of this option specifies the type of a buffer:
 *   `<empty>`       normal buffer
 *   nofile        buffer which is not related to a file and will not be
 *                 written
 *   nowrite       buffer which will not be written
 *   acwrite       buffer which will always be written with BufWriteCmd
 *                 autocommands.
 *   quickfix      quickfix buffer, contains list of errors `:cwindow`
 *                 or list of locations `:lwindow`
 *   help          help buffer (you are not supposed to set this
 *                 manually)
 *   terminal      buffer for a `terminal` (you are not supposed to set
 *                 this manually)
 *   prompt        buffer where only the last line can be edited, meant
 *                 to be used by a plugin, see `prompt-buffer`
 *                 *only when compiled with the `+channel` feature*
 *   popup         buffer used in a popup window, see `popup`.
 *                 *only when compiled with the `+textprop` feature*
 *
 * This option is used together with 'bufhidden' and 'swapfile' to
 * specify special kinds of buffers.   See `special-buffers`.
 * Also see `win_gettype()`, which returns the type of the window.
 *
 * Be careful with changing this option, it can have many side effects!
 * One such effect is that Vim will not check the timestamp of the file,
 * if the file is changed by another program this will not be noticed.
 *
 * A "quickfix" buffer is only used for the error list and the location
 * list.  This value is set by the `:cwindow` and `:lwindow` commands and
 * you are not supposed to change it.
 *
 * "nofile" and "nowrite" buffers are similar:
 * both:           The buffer is not to be written to disk, ":w" doesn't
 *                 work (":w filename" does work though).
 * both:           The buffer is never considered to be `'modified'`.
 *                 There is no warning when the changes will be lost, for
 *                 example when you quit Vim.
 * both:           A swap file is only created when using too much memory
 *                 (when 'swapfile' has been reset there is never a swap
 *                 file).
 * nofile only:    The buffer name is fixed, it is not handled like a
 *                 file name.  It is not modified in response to a `:cd`
 *                 command.
 * both:           When using ":e bufname" and already editing "bufname"
 *                 the buffer is made empty and autocommands are
 *                 triggered as usual for `:edit`.
 *
 * "acwrite" implies that the buffer name is not related to a file, like
 * "nofile", but it will be written.  Thus, in contrast to "nofile" and
 * "nowrite", ":w" does work and a modified buffer can't be abandoned
 * without saving.  For writing there must be matching `BufWriteCmd`,
 * `FileWriteCmd` or `FileAppendCmd` autocommands.
 *
 * (default: "")
 */
export const buftype: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "buftype");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "buftype", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "buftype");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "buftype");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "buftype", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "buftype");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&buftype");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&buftype", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&buftype");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&buftype", value);
  },
};

/**
 * Specifies details about changing the case of letters.  It may contain
 * these words, separated by a comma:
 * internal        Use internal case mapping functions, the current
 *                 locale does not change the case mapping.  This only
 *                 matters when 'encoding' is a Unicode encoding,
 *                 "latin1" or "iso-8859-15".  When "internal" is
 *                 omitted, the towupper() and towlower() system library
 *                 functions are used when available.
 * keepascii       For the ASCII characters (0x00 to 0x7f) use the US
 *                 case mapping, the current locale is not effective.
 *                 This probably only matters for Turkish.
 *
 * (default: "internal,keepascii")
 */
export const casemap: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "casemap");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "casemap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "casemap");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "casemap");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "casemap", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "casemap");
  },
};

/**
 * When on, `:cd`, `:tcd` and `:lcd` without an argument changes the
 * current working directory to the `$HOME` directory like in Unix.
 * When off, those commands just print the current directory name.
 * On Unix this option has no effect.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default: off)
 */
export const cdhome: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "cdhome");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "cdhome", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cdhome");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "cdhome");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "cdhome", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cdhome");
  },
};

/**
 * This is a list of directories which will be searched when using the
 * `:cd`, `:tcd` and `:lcd` commands, provided that the directory being
 * searched for has a relative path, not an absolute part starting with
 * "/", "./" or "../", the 'cdpath' option is not used then.
 * The 'cdpath' option's value has the same form and semantics as
 * `'path'`.  Also see `file-searching`.
 * The default value is taken from $CDPATH, with a "," prepended to look
 * in the current directory first.
 * If the default value taken from $CDPATH is not what you want, include
 * a modified version of the following command in your vimrc file to
 * override it:
 *
 *     :let &cdpath = ',' .. substitute(substitute($CDPATH, '[, ]', '\\\0', 'g'), ':', ',', 'g')
 *
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 * (parts of 'cdpath' can be passed to the shell to expand file names).
 *
 * (default: equivalent to $CDPATH or ",,")
 */
export const cdpath: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "cdpath");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cdpath", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cdpath");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "cdpath");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "cdpath", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cdpath");
  },
};

/**
 * The key used in Command-line Mode to open the command-line window.
 * The default is CTRL-F when 'compatible' is off.
 * Only non-printable keys are allowed.
 * The key can be specified as a single character, but it is difficult to
 * type.  The preferred way is to use the `<>` notation.  Examples:
 *
 *     :exe "set cedit=\<C-Y>"
 *     :exe "set cedit=\<Esc>"
 *
 * `Nvi` also has this option, but it only uses the first character.
 * See `cmdwin`.
 * NOTE: This option is set to the Vim default value when 'compatible'
 * is reset.
 *
 * (Vi default: "", Vim default: CTRL-F)
 */
export const cedit: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "cedit");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cedit", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cedit");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "cedit");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "cedit", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cedit");
  },
};

/**
 * An expression that is used for character encoding conversion.  It is
 * evaluated when a file that is to be read or has been written has a
 * different encoding from what is desired.
 * 'charconvert' is not used when the internal iconv() function is
 * supported and is able to do the conversion.  Using iconv() is
 * preferred, because it is much faster.
 * 'charconvert' is not used when reading stdin `--`, because there is no
 * file to convert from.  You will have to save the text in a file first.
 * The expression must return zero, false or an empty string for success,
 * non-zero or true for failure.
 * The possible encoding names encountered are in 'encoding'.
 * Additionally, names given in 'fileencodings' and 'fileencoding' are
 * used.
 * Conversion between "latin1", "unicode", "ucs-2", "ucs-4" and "utf-8"
 * is done internally by Vim, 'charconvert' is not used for this.
 * 'charconvert' is also used to convert the viminfo file, if the 'c'
 * flag is present in 'viminfo'.  Also used for Unicode conversion.
 * Example:
 *
 *     set charconvert=CharConvert()
 *     fun CharConvert()
 *       system("recode "
 *             \ .. v:charconvert_from .. ".." .. v:charconvert_to
 *             \ .. " <" .. v:fname_in .. " >" .. v:fname_out)
 *       return v:shell_error
 *     endfun
 *
 * The related Vim variables are:
 *         v:charconvert_from      name of the current encoding
 *         v:charconvert_to        name of the desired encoding
 *         v:fname_in              name of the input file
 *         v:fname_out             name of the output file
 * Note that v:fname_in and v:fname_out will never be the same.
 * Note that v:charconvert_from and v:charconvert_to may be different
 * from 'encoding'.  Vim internally uses UTF-8 instead of UCS-2 or UCS-4.
 *
 * The advantage of using a function call without arguments is that it is
 * faster, see `expr-option-function`.
 *
 * Encryption is not done by Vim when using 'charconvert'.  If you want
 * to encrypt the file after conversion, 'charconvert' should take care
 * of this.
 *
 * If the 'charconvert' expression starts with s: or `<SID>`, then it is
 * replaced with the script ID (`local-function`). Example:
 *
 *     set charconvert=s:MyConvert()
 *     set charconvert=<SID>SomeConvert()
 *
 * Otherwise the expression is evaluated in the context of the script
 * where the option was set, thus script-local items are available.
 *
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "")
 *
 * *only available when compiled with the `+eval` feature*
 */
export const charconvert: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "charconvert");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "charconvert", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "charconvert");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "charconvert");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "charconvert", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "charconvert");
  },
};

/**
 * Enables automatic C program indenting.  See 'cinkeys' to set the keys
 * that trigger reindenting in insert mode and 'cinoptions' to set your
 * preferred indent style.
 * If 'indentexpr' is not empty, it overrules 'cindent'.
 * If 'lisp' is not on and both 'indentexpr' and 'equalprg' are empty,
 * the "=" operator indents using this algorithm rather than calling an
 * external program.
 * See `C-indenting`.
 * When you don't like the way 'cindent' works, try the 'smartindent'
 * option or 'indentexpr'.
 * This option is not used when 'paste' is set.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 */
export const cindent: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "cindent");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "cindent", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cindent");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "cindent");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "cindent", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cindent");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&cindent");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&cindent", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&cindent");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&cindent", value);
  },
};

/**
 * A list of keys that, when typed in Insert mode, cause reindenting of
 * the current line.  Only used if 'cindent' is on and 'indentexpr' is
 * empty.
 * For the format of this option see `cinkeys-format`.
 * See `C-indenting`.
 *
 * (default "0**{,0}**,0),0],:,0#,!^F,o,O,e")
 */
export const cinkeys: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "cinkeys");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cinkeys", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cinkeys");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "cinkeys");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "cinkeys", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cinkeys");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&cinkeys");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&cinkeys", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&cinkeys");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&cinkeys", value);
  },
};

/**
 * The 'cinoptions' affect the way 'cindent' reindents lines in a C
 * program.  See `cinoptions-values` for the values of this option, and
 * `C-indenting` for info on C indenting in general.
 *
 * (default "")
 */
export const cinoptions: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "cinoptions");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cinoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cinoptions");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "cinoptions");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "cinoptions", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cinoptions");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&cinoptions");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&cinoptions", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&cinoptions");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&cinoptions", value);
  },
};

/**
 * These keywords start an extra indent in the next line when
 * 'smartindent' or 'cindent' is set.  For 'cindent' this is only done at
 * an appropriate place (inside {}).
 * Note that 'ignorecase' isn't used for 'cinwords'.  If case doesn't
 * matter, include the keyword both the uppercase and lowercase:
 * "if,If,IF".
 *
 * (default "if,else,while,do,for,switch")
 */
export const cinwords: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "cinwords");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cinwords", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cinwords");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "cinwords");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "cinwords", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cinwords");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&cinwords");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&cinwords", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&cinwords");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&cinwords", value);
  },
};

/**
 * Keywords that are interpreted as a C++ scope declaration by `cino-g`.
 * Useful e.g. for working with the Qt framework that defines additional
 * scope declarations "signals", "public slots" and "private slots":
 *
 *     set cinscopedecls+=signals,public\ slots,private\ slots
 *
 * (default "public,protected,private")
 */
export const cinscopedecls: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "cinscopedecls");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cinscopedecls", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cinscopedecls");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "cinscopedecls");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "cinscopedecls", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cinscopedecls");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&cinscopedecls");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&cinscopedecls", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&cinscopedecls");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&cinscopedecls", value);
  },
};

/**
 * This option is a list of comma-separated names.
 * Note: if one of the items is "exclude:", then you can't add an item
 * after that.  Therefore do not append an item with += but use ^= to
 * prepend, e.g.:
 *
 *     set clipboard^=unnamed
 *
 * When using the GUI see `'go-A'`.
 * These names are recognized:
 *
 * unnamed         When included, Vim will use the clipboard register '*'
 *                 for all yank, delete, change and put operations which
 *                 would normally go to the unnamed register.  When a
 *                 register is explicitly specified, it will always be
 *                 used regardless of whether "unnamed" is in 'clipboard'
 *                 or not.  The clipboard register can always be
 *                 explicitly accessed using the "* notation.  Also see
 *                 `gui-clipboard`.
 *
 * unnamedplus     A variant of the "unnamed" flag which uses the
 *                 clipboard register '+' (`quoteplus`) instead of
 *                 register '*' for all yank, delete, change and put
 *                 operations which would normally go to the unnamed
 *                 register.  When "unnamed" is also included to the
 *                 option, yank operations (but not delete, change or
 *                 put) will additionally copy the text into register
 *                 '*'.
 *                 Only available with the `+X11` feature.
 *                 Availability can be checked with:
 *
 *                     if has('unnamedplus')
 *
 * autoselect      Works like the 'a' flag in 'guioptions': If present,
 *                 then whenever Visual mode is started, or the Visual
 *                 area extended, Vim tries to become the owner of the
 *                 windowing system's global selection or put the
 *                 selected text on the clipboard used by the selection
 *                 register "*.  See `'go-a'` and `quotestar` for details.
 *                 When the GUI is active, the 'a' flag in 'guioptions'
 *                 is used, when the GUI is not active, this "autoselect"
 *                 flag is used.
 *                 Also applies to the modeless selection.
 *
 * autoselectplus  Like "autoselect" but using the + register instead of
 *                 the * register.  Compare to the 'P' flag in
 *                 'guioptions'.
 *
 * autoselectml    Like "autoselect", but for the modeless selection
 *                 only.  Compare to the 'A' flag in 'guioptions'.
 *
 * html            When the clipboard contains HTML, use this when
 *                 pasting.  When putting text on the clipboard, mark it
 *                 as HTML.  This works to copy rendered HTML from
 *                 Firefox, paste it as raw HTML in Vim, select the HTML
 *                 in Vim and paste it in a rich edit box in Firefox.
 *                 You probably want to add this only temporarily,
 *                 possibly use BufEnter autocommands.
 *                 Only supported for GTK version 2 and later.
 *
 * exclude:**{pattern}**
 *                 Defines a pattern that is matched against the name of
 *                 the terminal 'term'.  If there is a match, no
 *                 connection will be made to the X server.  This is
 *                 useful in this situation:
 *                 - Running Vim in a console.
 *                 - $DISPLAY is set to start applications on another
 *                   display.
 *                 - You do not want to connect to the X server in the
 *                   console, but do want this in a terminal emulator.
 *                 To never connect to the X server use:
 *
 *                     exclude:.*
 *
 *                 This has the same effect as using the `-X` argument.
 *                 Note that when there is no connection to the X server
 *                 the window title won't be restored and the clipboard
 *                 cannot be accessed.
 *                 The value of 'magic' is ignored, **{pattern}** is
 *                 interpreted as if 'magic' was on.
 *                 The rest of the option value will be used for
 *                 **{pattern}**, this must be the last entry.
 *
 * (default "autoselect,exclude:cons\|linux"
 *  for X-windows, "" otherwise)
 *
 * *only in GUI versions or when the `+xterm_clipboard` feature is included*
 */
export const clipboard: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "clipboard");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "clipboard", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "clipboard");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "clipboard");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "clipboard", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "clipboard");
  },
};

/**
 * Number of screen lines to use for the command-line.  A larger value
 * helps avoiding `hit-enter` prompts.
 * The value of this option is stored with the tab page, so that each tab
 * page can have a different value.
 *
 * (default 1)
 */
export const cmdheight: GlobalOrLocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "cmdheight");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "cmdheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cmdheight");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "cmdheight");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "cmdheight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cmdheight");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "cmdheight");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "cmdheight", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cmdheight");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&cmdheight");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&cmdheight", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&cmdheight");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&cmdheight", value);
  },
};

/**
 * Number of screen lines to use for the command-line window. `cmdwin`
 *
 * (default 7)
 */
export const cmdwinheight: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "cmdwinheight");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "cmdwinheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cmdwinheight");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "cmdwinheight");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "cmdwinheight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cmdwinheight");
  },
};

/**
 * 'colorcolumn' is a comma-separated list of screen columns that are
 * highlighted with ColorColumn `hl-ColorColumn`.  Useful to align
 * text.  Will make screen redrawing slower.
 * The screen column can be an absolute number, or a number preceded with
 * '+' or '-', which is added to or subtracted from 'textwidth'.
 *
 *     :set cc=+1  " highlight column after 'textwidth'
 *     :set cc=+1,+2,+3  " highlight three columns after 'textwidth'
 *     :hi ColorColumn ctermbg=lightgrey guibg=lightgrey
 *
 * When 'textwidth' is zero then the items with '-' and '+' are not used.
 * A maximum of 256 columns are highlighted.
 *
 * (default "")
 *
 * *not available when compiled without the `+syntax` feature*
 */
export const colorcolumn: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "colorcolumn");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "colorcolumn", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "colorcolumn");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "colorcolumn");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "colorcolumn", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "colorcolumn");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&colorcolumn");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&colorcolumn", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&colorcolumn");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&colorcolumn", value);
  },
};

/**
 * Number of columns of the screen.  Normally this is set by the terminal
 * initialization and does not have to be set by hand.  Also see
 * `posix-screen-size`.
 * When Vim is running in the GUI or in a resizable window, setting this
 * option will cause the window size to be changed.  When you only want
 * to use the size for the GUI, put the command in your `gvimrc` file.
 * When you set this option and Vim is unable to change the physical
 * number of columns of the display, the display may be messed up.  For
 * the GUI it is always possible and Vim limits the number of columns to
 * what fits on the screen.  You can use this command to get the widest
 * window possible:
 *
 *     :set columns=9999
 *
 * Minimum value is 12, maximum value is 10000.
 *
 * (default 80 or terminal width)
 */
export const columns: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "columns");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "columns", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "columns");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "columns");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "columns", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "columns");
  },
};

/**
 * A comma-separated list of strings that can start a comment line.  See
 * `format-comments`.  See `option-backslash` about using backslashes to
 * insert a space.
 *
 * (default
 *  "s1:/*,mb:*,ex:* /,://,b:#,:%,:XCOMM,n:>,fb:-")
 */
export const comments: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "comments");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "comments", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "comments");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "comments");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "comments", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "comments");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&comments");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&comments", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&comments");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&comments", value);
  },
};

/**
 * A template for a comment.  The "%s" in the value is replaced with the
 * comment text.  Currently only used to add markers for folding, see
 * `fold-marker`.
 *
 * (default "/*%s* /")
 *
 * *not available when compiled without the `+folding` feature*
 */
export const commentstring: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "commentstring");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "commentstring", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "commentstring");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "commentstring");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "commentstring", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "commentstring");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&commentstring");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&commentstring", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&commentstring");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&commentstring", value);
  },
};

/**
 * This option specifies how keyword completion `ins-completion` works
 * when CTRL-P or CTRL-N are used.  It is also used for whole-line
 * completion `i_CTRL-X_CTRL-L`.  It indicates the type of completion
 * and the places to scan.  It is a comma-separated list of flags:
 * .       scan the current buffer ('wrapscan' is ignored)
 * w       scan buffers from other windows
 * b       scan other loaded buffers that are in the buffer list
 * u       scan the unloaded buffers that are in the buffer list
 * U       scan the buffers that are not in the buffer list
 * k       scan the files given with the 'dictionary' option
 * kspell  use the currently active spell checking `spell`
 * k**{dict}** scan the file **{dict}**.  Several "k" flags can be given,
 *         patterns are valid too.  For example:
 *
 *             :set cpt=k/usr/dict/*,k~/spanish
 *
 * s       scan the files given with the 'thesaurus' option
 * s**{tsr}**  scan the file **{tsr}**.  Several "s" flags can be given, patterns
 *         are valid too.
 * i       scan current and included files
 * d       scan current and included files for defined name or macro
 *         `i_CTRL-X_CTRL-D`
 * ]       tag completion
 * t       same as "]"
 *
 * Unloaded buffers are not loaded, thus their autocmds `:autocmd` are
 * not executed, this may lead to unexpected completions from some files
 * (gzipped files for example).  Unloaded buffers are not scanned for
 * whole-line completion.
 *
 * The default is ".,w,b,u,t,i", which means to scan:
 *    1. the current buffer
 *    2. buffers in other windows
 *    3. other loaded buffers
 *    4. unloaded buffers
 *    5. tags
 *    6. included files
 *
 * As you can see, CTRL-N and CTRL-P can be used to do any 'iskeyword'-
 * based expansion (e.g., dictionary `i_CTRL-X_CTRL-K`, included patterns
 * `i_CTRL-X_CTRL-I`, tags `i_CTRL-X_CTRL-]` and normal expansions).
 *
 * (default: ".,w,b,u,t,i")
 */
export const complete: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "complete");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "complete", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "complete");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "complete");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "complete", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "complete");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&complete");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&complete", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&complete");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&complete", value);
  },
};

/**
 * This option specifies a function to be used for Insert mode completion
 * with CTRL-X CTRL-U. `i_CTRL-X_CTRL-U`
 * See `complete-functions` for an explanation of how the function is
 * invoked and what it should return.  The value can be the name of a
 * function, a `lambda` or a `Funcref`. See `option-value-function` for
 * more information.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default: empty)
 *
 * *not available when compiled without the `+eval` feature*
 */
export const completefunc: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "completefunc");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "completefunc", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "completefunc");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "completefunc");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "completefunc", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "completefunc");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&completefunc");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&completefunc", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&completefunc");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&completefunc", value);
  },
};

/**
 * When this option is set it overrules 'shellslash' for completion:
 * - When this option is set to "slash", a forward slash is used for path
 *   completion in insert mode. This is useful when editing HTML tag, or
 *   Makefile with 'noshellslash' on MS-Windows.
 * - When this option is set to "backslash", backslash is used. This is
 *   useful when editing a batch file with 'shellslash' set on MS-Windows.
 * - When this option is empty, same character is used as for
 *   'shellslash'.
 * For Insert mode completion the buffer-local value is used.  For
 * command line completion the global value is used.
 *
 * (default: "")
 *
 * *only for MS-Windows*
 */
export const completeslash: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "completeslash");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "completeslash", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "completeslash");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "completeslash");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "completeslash", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "completeslash");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&completeslash");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&completeslash", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&completeslash");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&completeslash", value);
  },
};

/**
 * A comma-separated list of options for Insert mode completion
 * `ins-completion`.  The supported values are:
 *
 *    menu     Use a popup menu to show the possible completions.  The
 *             menu is only shown when there is more than one match and
 *             sufficient colors are available.  `ins-completion-menu`
 *
 *    menuone  Use the popup menu also when there is only one match.
 *             Useful when there is additional information about the
 *             match, e.g., what file it comes from.
 *
 *    longest  Only insert the longest common text of the matches.  If
 *             the menu is displayed you can use CTRL-L to add more
 *             characters.  Whether case is ignored depends on the kind
 *             of completion.  For buffer text the 'ignorecase' option is
 *             used.
 *
 *    preview  Show extra information about the currently selected
 *             completion in the preview window.  Only works in
 *             combination with "menu" or "menuone".
 *
 *    popup    Show extra information about the currently selected
 *             completion in a popup window.  Only works in combination
 *             with "menu" or "menuone".  Overrides "preview".
 *             See `'completepopup'` for specifying properties.
 *             *only works when compiled with the `+textprop` feature*
 *
 *    popuphidden
 *             Just like "popup" but initially hide the popup.  Use a
 *             `CompleteChanged` autocommand to fetch the info and call
 *             `popup_show()` once the popup has been filled.
 *             See the example at `complete-popuphidden`.
 *             *only works when compiled with the `+textprop` feature*
 *
 *    noinsert Do not insert any text for a match until the user selects
 *             a match from the menu. Only works in combination with
 *             "menu" or "menuone". No effect if "longest" is present.
 *
 *    noselect Do not select a match in the menu, force the user to
 *             select one from the menu. Only works in combination with
 *             "menu" or "menuone".
 *
 * (default: "menu,preview")
 */
export const completeopt: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "completeopt");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "completeopt", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "completeopt");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "completeopt");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "completeopt", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "completeopt");
  },
};

/**
 * Sets the modes in which text in the cursor line can also be concealed.
 * When the current mode is listed then concealing happens just like in
 * other lines.
 *   n             Normal mode
 *   v             Visual mode
 *   i             Insert mode
 *   c             Command line editing, for 'incsearch'
 *
 * 'v' applies to all lines in the Visual area, not only the cursor.
 * A useful value is "nc".  This is used in help files.  So long as you
 * are moving around text is concealed, but when starting to insert text
 * or selecting a Visual area the concealed text is displayed, so that
 * you can see what you are doing.
 * Keep in mind that the cursor position is not always where it's
 * displayed.  E.g., when moving vertically it may change column.
 *
 * (default: "")
 *
 * *not available when compiled without the `+conceal` feature*
 */
export const concealcursor: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "concealcursor");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "concealcursor", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "concealcursor");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "concealcursor");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "concealcursor", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "concealcursor");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&concealcursor");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&concealcursor", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&concealcursor");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&concealcursor", value);
  },
};

/**
 * Determine how text with the "conceal" syntax attribute `:syn-conceal`
 * is shown:
 *
 * Value           Effect
 * 0               Text is shown normally
 * 1               Each block of concealed text is replaced with one
 *                 character.  If the syntax item does not have a custom
 *                 replacement character defined (see `:syn-cchar`) the
 *                 character defined in 'listchars' is used (default is a
 *                 space).
 *                 It is highlighted with the "Conceal" highlight group.
 * 2               Concealed text is completely hidden unless it has a
 *                 custom replacement character defined (see
 *                 `:syn-cchar`).
 * 3               Concealed text is completely hidden.
 *
 * Note: in the cursor line concealed text is not hidden, so that you can
 * edit and copy the text.  This can be changed with the 'concealcursor'
 * option.
 *
 * (default 0)
 *
 * *not available when compiled without the `+conceal` feature*
 */
export const conceallevel: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "conceallevel");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "conceallevel", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "conceallevel");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "conceallevel");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "conceallevel", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "conceallevel");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&conceallevel");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&conceallevel", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&conceallevel");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&conceallevel", value);
  },
};

/**
 * When 'confirm' is on, certain operations that would normally
 * fail because of unsaved changes to a buffer, e.g. ":q" and ":e",
 * instead raise a `dialog` asking if you wish to save the current
 * file(s).  You can still use a ! to unconditionally `abandon` a buffer.
 * If 'confirm' is off you can still activate confirmation for one
 * command only (this is most useful in mappings) with the `:confirm`
 * command.
 * Also see the `confirm()` function and the 'v' flag in 'guioptions'.
 *
 * (default off)
 */
export const confirm: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "confirm");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "confirm", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "confirm");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "confirm");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "confirm", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "confirm");
  },
};

/**
 * Copy the structure of the existing lines indent when autoindenting a
 * new line.  Normally the new indent is reconstructed by a series of
 * tabs followed by spaces as required (unless `'expandtab'` is enabled,
 * in which case only spaces are used).  Enabling this option makes the
 * new line copy whatever characters were used for indenting on the
 * existing line.  'expandtab' has no effect on these characters, a Tab
 * remains a Tab.  If the new indent is greater than on the existing
 * line, the remaining space is filled in the normal manner.
 * NOTE: This option is reset when 'compatible' is set.
 * Also see 'preserveindent'.
 *
 * (default off)
 */
export const copyindent: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "copyindent");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "copyindent", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "copyindent");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "copyindent");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "copyindent", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "copyindent");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&copyindent");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&copyindent", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&copyindent");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&copyindent", value);
  },
};

/**
 * A sequence of single character flags.  When a character is present
 * this indicates Vi-compatible behavior.  This is used for things where
 * not being Vi-compatible is mostly or sometimes preferred.
 * 'cpoptions' stands for "compatible-options".
 * Commas can be added for readability.
 * To avoid problems with flags that are added in the future, use the
 * "+=" and "-=" feature of ":set" `add-option-flags`.
 *
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * NOTE: In a `Vim9` script, when `vim9script` is encountered, the value
 * is saved, 'cpoptions' is set to the Vim default, and the saved value
 * is restored at the end of the script.  Changes to the value of
 * 'cpoptions' will be applied to the saved value, but keep in mind that
 * removing a flag that is not present when 'cpoptions' is changed has no
 * effect.  In the `.vimrc` file the value is not restored, thus using
 * `vim9script` in the `.vimrc` file results in using the Vim default.
 *
 * NOTE: This option is set to the POSIX default value at startup when
 * the Vi default value would be used and the $VIM_POSIX environment
 * variable exists `posix`.  This means Vim tries to behave like the
 * POSIX specification.
 *
 *     contains    behavior
 *
 *         a       When included, a ":read" command with a file name
 *                 argument will set the alternate file name for the
 *                 current window.
 *
 *         A       When included, a ":write" command with a file name
 *                 argument will set the alternate file name for the
 *                 current window.
 *
 *         b       "\|" in a ":map" command is recognized as the end of
 *                 the map command.  The '\' is included in the mapping,
 *                 the text after the '|' is interpreted as the next
 *                 command.  Use a CTRL-V instead of a backslash to
 *                 include the '|' in the mapping.  Applies to all
 *                 mapping, abbreviation, menu and autocmd commands.
 *                 See also `map_bar`.
 *
 *         B       A backslash has no special meaning in mappings,
 *                 abbreviations, user commands and the "to" part of the
 *                 menu commands.  Remove this flag to be able to use a
 *                 backslash like a CTRL-V.  For example, the command
 *                 `":map X \<Esc>"` results in X being mapped to:
 *                         'B' included:   "\^["    (^[ is a real `<Esc>`)
 *                         'B' excluded:   `"<Esc>"`  (5 characters)
 *                         (`'<'` excluded in both cases)
 *
 *         c       Searching continues at the end of any match at the
 *                 cursor position, but not further than the start of the
 *                 next line.  When not present searching continues
 *                 one character from the cursor position.  With 'c'
 *                 "abababababab" only gets three matches when repeating
 *                 "/abab", without 'c' there are five matches.
 *
 *         C       Do not concatenate sourced lines that start with a
 *                 backslash.  See `line-continuation`.
 *
 *         d       Using "./" in the 'tags' option doesn't mean to use
 *                 the tags file relative to the current file, but the
 *                 tags file in the current directory.
 *
 *         D       Can't use CTRL-K to enter a digraph after Normal mode
 *                 commands with a character argument, like `r`, `f` and
 *                 `t`.
 *
 *         e       When executing a register with ":@r", always add a
 *                 `<CR>` to the last line, also when the register is not
 *                 linewise.  If this flag is not present, the register
 *                 is not linewise and the last line does not end in a
 *                 `<CR>`, then the last line is put on the command-line
 *                 and can be edited before hitting `<CR>`.
 *
 *         E       It is an error when using "y", "d", "c", `"g~"`, "gu" or
 *                 "gU" on an Empty region.  The operators only work when
 *                 at least one character is to be operated on.  Example:
 *                 This makes "y0" fail in the first column.
 *
 *         f       When included, a ":read" command with a file name
 *                 argument will set the file name for the current buffer,
 *                 if the current buffer doesn't have a file name yet.
 *
 *         F       When included, a ":write" command with a file name
 *                 argument will set the file name for the current
 *                 buffer, if the current buffer doesn't have a file name
 *                 yet.  Also see `cpo-P`.
 *
 *         g       Goto line 1 when using ":edit" without argument.
 *
 *         H       When using "I" on a line with only blanks, insert
 *                 before the last blank.  Without this flag insert after
 *                 the last blank.
 *
 *         i       When included, interrupting the reading of a file will
 *                 leave it modified.
 *
 *         I       When moving the cursor up or down just after inserting
 *                 indent for 'autoindent', do not delete the indent.
 *
 *         j       When joining lines, only add two spaces after a '.',
 *                 not after '!' or '?'.  Also see 'joinspaces'.
 *
 *         J       A `sentence` has to be followed by two spaces after
 *                 the '.', '!' or '?'.  A `<Tab>` is not recognized as
 *                 white space.
 *
 *         k       Disable the recognition of raw key codes in
 *                 mappings, abbreviations, and the "to" part of menu
 *                 commands.  For example, if `<Key>` sends ^[OA (where ^[
 *                 is `<Esc>`), the command ":map X ^[OA" results in X
 *                 being mapped to:
 *                         'k' included:   "^[OA"   (3 characters)
 *                         'k' excluded:   `"<Key>"`  (one key code)
 *                 Also see the `'<'` flag below.
 *
 *         K       Don't wait for a key code to complete when it is
 *                 halfway a mapping.  This breaks mapping `<F1><F1>` when
 *                 only part of the second `<F1>` has been read.  It
 *                 enables cancelling the mapping by typing `<F1><Esc>`.
 *
 *         l       Backslash in a [] range in a search pattern is taken
 *                 literally, only "\]", "\^", "\-" and "\\" are special.
 *                 See `/[]`
 *                    'l' included: "/[ \t]"  finds `<Space>`, '\' and 't'
 *                    'l' excluded: "/[ \t]"  finds `<Space>` and `<Tab>`
 *                 Also see `cpo-\`.
 *
 *         L       When the 'list' option is set, 'wrapmargin',
 *                 'textwidth', 'softtabstop' and Virtual Replace mode
 *                 (see `gR`) count a `<Tab>` as two characters, instead of
 *                 the normal behavior of a `<Tab>`.
 *
 *         m       When included, a showmatch will always wait half a
 *                 second.  When not included, a showmatch will wait half
 *                 a second or until a character is typed.  `'showmatch'`
 *
 *         M       When excluded, "%" matching will take backslashes into
 *                 account.  Thus in "( \( )" and "\( ( \)" the outer
 *                 parenthesis match.  When included "%" ignores
 *                 backslashes, which is Vi compatible.
 *
 *         n       When included, the column used for 'number' and
 *                 'relativenumber' will also be used for text of wrapped
 *                 lines.
 *
 *         o       Line offset to search command is not remembered for
 *                 next search.
 *
 *         O       Don't complain if a file is being overwritten, even
 *                 when it didn't exist when editing it.  This is a
 *                 protection against a file unexpectedly created by
 *                 someone else.  Vi didn't complain about this.
 *
 *         p       Vi compatible Lisp indenting.  When not present, a
 *                 slightly better algorithm is used.
 *
 *         P       When included, a ":write" command that appends to a
 *                 file will set the file name for the current buffer, if
 *                 the current buffer doesn't have a file name yet and
 *                 the 'F' flag is also included `cpo-F`.
 *
 *         q       When joining multiple lines leave the cursor at the
 *                 position where it would be when joining two lines.
 *
 *         r       Redo ("." command) uses "/" to repeat a search
 *                 command, instead of the actually used search string.
 *
 *         R       Remove marks from filtered lines.  Without this flag
 *                 marks are kept like `:keepmarks` was used.
 *
 *         s       Set buffer options when entering the buffer for the
 *                 first time.  This is like it is in Vim version 3.0.
 *                 And it is the default.  If not present the options are
 *                 set when the buffer is created.
 *
 *         S       Set buffer options always when entering a buffer
 *                 (except 'readonly', 'fileformat', 'filetype' and
 *                 'syntax').  This is the (most) Vi compatible setting.
 *                 The options are set to the values in the current
 *                 buffer.  When you change an option and go to another
 *                 buffer, the value is copied.  Effectively makes the
 *                 buffer options global to all buffers.
 *
 *                 's'    'S'     copy buffer options
 *                 no     no      when buffer created
 *                 yes    no      when buffer first entered (default)
 *                  X     yes     each time when buffer entered (vi comp.)
 *
 *         t       Search pattern for the tag command is remembered for
 *                 "n" command.  Otherwise Vim only puts the pattern in
 *                 the history for search pattern, but doesn't change the
 *                 last used search pattern.
 *
 *         u       Undo is Vi compatible.  See `undo-two-ways`.
 *
 *         v       Backspaced characters remain visible on the screen in
 *                 Insert mode.  Without this flag the characters are
 *                 erased from the screen right away.  With this flag the
 *                 screen newly typed text overwrites backspaced
 *                 characters.
 *
 *         w       When using "cw" on a blank character, only change one
 *                 character and not all blanks until the start of the
 *                 next word.
 *
 *         W       Don't overwrite a readonly file.  When omitted, ":w!"
 *                 overwrites a readonly file, if possible.
 *
 *         x       `<Esc>` on the command-line executes the command-line.
 *                 The default in Vim is to abandon the command-line,
 *                 because `<Esc>` normally aborts a command.  `c_<Esc>`
 *
 *         X       When using a count with "R" the replaced text is
 *                 deleted only once.  Also when repeating "R" with "."
 *                 and a count.
 *
 *         y       A yank command can be redone with ".".  Think twice if
 *                 you really want to use this, it may break some
 *                 plugins, since most people expect "." to only repeat a
 *                 change.
 *
 *         Z       When using "w!" while the 'readonly' option is set,
 *                 don't reset 'readonly'.
 *
 *         !       When redoing a filter command, use the last used
 *                 external command, whatever it was.  Otherwise the last
 *                 used -filter- command is used.
 *
 *         $       When making a change to one line, don't redisplay the
 *                 line, but put a '$' at the end of the changed text.
 *                 The changed text will be overwritten when you type the
 *                 new text.  The line is redisplayed if you type any
 *                 command that moves the cursor from the insertion
 *                 point.
 *
 *         %       Vi-compatible matching is done for the "%" command.
 *                 Does not recognize "#if", "#endif", etc.
 *                 Does not recognize "/*" and "* /".
 *                 Parens inside single and double quotes are also
 *                 counted, causing a string that contains a paren to
 *                 disturb the matching.  For example, in a line like
 *                 "if (strcmp("foo(", s))" the first paren does not
 *                 match the last one.  When this flag is not included,
 *                 parens inside single and double quotes are treated
 *                 specially.  When matching a paren outside of quotes,
 *                 everything inside quotes is ignored.  When matching a
 *                 paren inside quotes, it will find the matching one (if
 *                 there is one).  This works very well for C programs.
 *                 This flag is also used for other features, such as
 *                 C-indenting.
 *
 *         -       When included, a vertical movement command fails when
 *                 it would go above the first line or below the last
 *                 line.  Without it the cursor moves to the first or
 *                 last line, unless it already was in that line.
 *                 Applies to the commands "-", "k", CTRL-P, "+", "j",
 *                 CTRL-N, CTRL-J and ":1234".
 *
 *         +       When included, a ":write file" command will reset the
 *                 'modified' flag of the buffer, even though the buffer
 *                 itself may still be different from its file.
 *
 *         *       Use ":*" in the same way as ":@".  When not included,
 *                 ":*" is an alias for `":'<,'>"`, select the Visual area.
 *
 *         <       Disable the recognition of special key codes in `<>`
 *                 form in mappings, abbreviations, and the "to" part of
 *                 menu commands.  For example, the command
 *                 `":map X <Tab>"` results in X being mapped to:
 *                         `'<'` included:   `"<Tab>"`  (5 characters)
 *                         `'<'` excluded:   "^I"     (^I is a real `<Tab>`)
 *                 Also see the 'k' flag above.
 *
 *         >       When appending to a register, put a line break before
 *                 the appended text.
 *
 *         ;       When using `,` or `;` to repeat the last `t` search
 *                 and the cursor is right in front of the searched
 *                 character, the cursor won't move. When not included,
 *                 the cursor would skip over it and jump to the
 *                 following occurrence.
 *
 * POSIX flags.  These are not included in the Vi default value, except
 * when $VIM_POSIX was set on startup. `posix`
 *
 *     contains    behavior
 *
 *         `#`       A count before "D", "o" and "O" has no effect.
 *
 *         &       When ":preserve" was used keep the swap file when
 *                 exiting normally while this buffer is still loaded.
 *                 This flag is tested when exiting.
 *
 *         \       Backslash in a [] range in a search pattern is taken
 *                 literally, only "\]" is special  See `/[]`
 *                    '\' included: "/[ \-]"  finds `<Space>`, '\' and '-'
 *                    '\' excluded: "/[ \-]"  finds `<Space>` and '-'
 *                 Also see `cpo-l`.
 *
 *         /       When "%" is used as the replacement string in a `:s`
 *                 command, use the previous replacement string. `:s%`
 *
 *         {       The `{` and `}` commands also stop at a "{" character
 *                 at the start of a line.
 *
 *         .       The ":chdir" and ":cd" commands fail if the current
 *                 buffer is modified, unless ! is used.  Vim doesn't
 *                 need this, since it remembers the full path of an
 *                 opened file.
 *
 *         |       The value of the $LINES and $COLUMNS environment
 *                 variables overrule the terminal size values obtained
 *                 with system specific functions.
 *
 * (Vim default: "aABceFs",
 *  Vi default:  all flags)
 */
export const cpoptions: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "cpoptions");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cpoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cpoptions");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "cpoptions");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "cpoptions", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cpoptions");
  },
};

/**
 * Determines how many components of the path to show in a list of tags.
 * See `cscopepathcomp`.
 * NOTE: This option is set to 0 when 'compatible' is set.
 *
 * (default 0)
 *
 * *not available when compiled without the `+cscope` feature*
 */
export const cscopepathcomp: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "cscopepathcomp");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "cscopepathcomp", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cscopepathcomp");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "cscopepathcomp");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "cscopepathcomp", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cscopepathcomp");
  },
};

/**
 * Specifies the command to execute cscope.  See `cscopeprg`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "cscope")
 *
 * *not available when compiled without the `+cscope` feature*
 */
export const cscopeprg: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "cscopeprg");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cscopeprg", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cscopeprg");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "cscopeprg");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "cscopeprg", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cscopeprg");
  },
};

/**
 * Specifies whether to use quickfix window to show cscope results.
 * See `cscopequickfix`.
 *
 * (default "")
 *
 * *not available when compiled without the `+cscope` or `+quickfix` features*
 */
export const cscopequickfix: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "cscopequickfix");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cscopequickfix", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cscopequickfix");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "cscopequickfix");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "cscopequickfix", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cscopequickfix");
  },
};

/**
 * In the absence of a prefix (-P) for cscope. setting this option enables
 * to use the basename of cscope.out path as the prefix.
 * See `cscoperelative`.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *not available when compiled without the `+cscope` feature*
 */
export const cscoperelative: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "cscoperelative");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "cscoperelative", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cscoperelative");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "cscoperelative");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "cscoperelative", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cscoperelative");
  },
};

/**
 * Use cscope for tag commands.  See `cscope-options`.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *not available when compiled without the `+cscope` feature*
 */
export const cscopetag: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "cscopetag");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "cscopetag", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cscopetag");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "cscopetag");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "cscopetag", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cscopetag");
  },
};

/**
 * Determines the order in which ":cstag" performs a search.  See
 * `cscopetagorder`.
 * NOTE: This option is set to 0 when 'compatible' is set.
 *
 * (default 0)
 *
 * *not available when compiled without the `+cscope` feature*
 */
export const cscopetagorder: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "cscopetagorder");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "cscopetagorder", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cscopetagorder");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "cscopetagorder");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "cscopetagorder", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cscopetagorder");
  },
};

/**
 * When this option is set, as the cursor in the current
 * window moves other cursorbound windows (windows that also have
 * this option set) move their cursors to the corresponding line and
 * column.  This option is useful for viewing the
 * differences between two versions of a file (see 'diff'); in diff mode,
 * inserted and deleted lines (though not characters within a line) are
 * taken into account.
 *
 * (default off)
 */
export const cursorbind: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "cursorbind");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "cursorbind", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cursorbind");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "cursorbind");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "cursorbind", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cursorbind");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&cursorbind");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&cursorbind", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&cursorbind");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&cursorbind", value);
  },
};

/**
 * Highlight the screen column of the cursor with CursorColumn
 * `hl-CursorColumn`.  Useful to align text.  Will make screen redrawing
 * slower.
 * If you only want the highlighting in the current window you can use
 * these autocommands:
 *
 *     au WinLeave * set nocursorline nocursorcolumn
 *     au WinEnter * set cursorline cursorcolumn
 *
 * (default off)
 *
 * *not available when compiled without the `+syntax` feature*
 */
export const cursorcolumn: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "cursorcolumn");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "cursorcolumn", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cursorcolumn");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "cursorcolumn");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "cursorcolumn", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cursorcolumn");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&cursorcolumn");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&cursorcolumn", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&cursorcolumn");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&cursorcolumn", value);
  },
};

/**
 * Highlight the text line of the cursor with CursorLine `hl-CursorLine`.
 * Useful to easily spot the cursor.  Will make screen redrawing slower.
 * When Visual mode is active the highlighting isn't used to make it
 * easier to see the selected text.
 *
 * (default off)
 *
 * *not available when compiled without the `+syntax` feature*
 */
export const cursorline: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "cursorline");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "cursorline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cursorline");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "cursorline");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "cursorline", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cursorline");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&cursorline");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&cursorline", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&cursorline");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&cursorline", value);
  },
};

/**
 * Comma-separated list of settings for how 'cursorline' is displayed.
 * Valid values:
 * "line"          Highlight the text line of the cursor with
 *                 CursorLine `hl-CursorLine`.
 * "screenline"    Highlight only the screen line of the cursor with
 *                 CursorLine `hl-CursorLine`.
 * "number"        Highlight the line number of the cursor with
 *                 CursorLineNr `hl-CursorLineNr`.
 *
 * Special value:
 * "both"          Alias for the values "line,number".
 *
 * "line" and "screenline" cannot be used together.
 *
 * (default: "number,line")
 *
 * *not available when compiled without the `+syntax` feature*
 */
export const cursorlineopt: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "cursorlineopt");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cursorlineopt", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cursorlineopt");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "cursorlineopt");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "cursorlineopt", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cursorlineopt");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&cursorlineopt");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&cursorlineopt", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&cursorlineopt");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&cursorlineopt", value);
  },
};

/**
 * These values can be used:
 * msg     Error messages that would otherwise be omitted will be given
 *         anyway.
 * throw   Error messages that would otherwise be omitted will be given
 *         anyway and also throw an exception and set `v:errmsg`.
 * beep    A message will be given when otherwise only a beep would be
 *         produced.
 * The values can be combined, separated by a comma.
 * "msg" and "throw" are useful for debugging 'foldexpr', 'formatexpr' or
 * 'indentexpr'.
 *
 * (default "")
 */
export const debug: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "debug");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "debug", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "debug");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "debug");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "debug", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "debug");
  },
};

/**
 * Pattern to be used to find a macro definition.  It is a search
 * pattern, just like for the "/" command.  This option is used for the
 * commands like "[i" and "[d" `include-search`.  The 'isident' option is
 * used to recognize the defined name after the match:
 *         {match with 'define'}{non-ID chars}{defined name}{non-ID char}
 * See `option-backslash` about inserting backslashes to include a space
 * or backslash.
 * The default value is for C programs.  For C++ this value would be
 * useful, to include const type declarations:
 *
 *     ^\(#\s*define\|[a-z]*\s*const\s*[a-z]*\)
 *
 * You can also use "\ze" just before the name and continue the pattern
 * to check what is following.  E.g. for Javascript, if a function is
 * defined with "func_name = function(args)":
 *
 *     ^\s*\ze\i\+\s*=\s*function(
 *
 * If the function is defined with "func_name : function() {...":
 *
 *     ^\s*\ze\i\+\s*[:]\s*(*function\s*(
 *
 * When using the ":set" command, you need to double the backslashes!
 * To avoid that use `:let` with a single quote string:
 *
 *     let &l:define = '^\s*\ze\k\+\s*=\s*function('
 *
 * (default "^\s*#\s*define")
 */
export const define: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "define");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "define", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "define");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "define");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "define", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "define");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "define");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "define", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "define");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&define");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&define", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&define");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&define", value);
  },
};

/**
 * If editing Unicode and this option is set, backspace and Normal mode
 * "x" delete each combining character on its own.  When it is off (the
 * default) the character along with its combining characters are
 * deleted.
 * Note: When 'delcombine' is set "xx" may work differently from "2x"!
 *
 * This is useful for Arabic, Hebrew and many other languages where one
 * may have combining characters overtop of base characters, and want
 * to remove only the combining ones.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 */
export const delcombine: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "delcombine");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "delcombine", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "delcombine");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "delcombine");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "delcombine", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "delcombine");
  },
};

/**
 * List of file names, separated by commas, that are used to lookup words
 * for keyword completion commands `i_CTRL-X_CTRL-K`.  Each file should
 * contain a list of words.  This can be one word per line, or several
 * words per line, separated by non-keyword characters (white space is
 * preferred).  Maximum line length is 510 bytes.
 *
 * When this option is empty or an entry "spell" is present, and spell
 * checking is enabled, words in the word lists for the currently active
 * 'spelllang' are used. See `spell`.
 *
 * To include a comma in a file name precede it with a backslash.  Spaces
 * after a comma are ignored, otherwise spaces are included in the file
 * name.  See `option-backslash` about using backslashes.
 * This has nothing to do with the `Dictionary` variable type.
 * Where to find a list of words?
 * - On FreeBSD, there is the file "/usr/share/dict/words".
 * - In the Simtel archive, look in the "msdos/linguist" directory.
 * - In "miscfiles" of the GNU collection.
 * The use of `:set+=` and `:set-=` is preferred when adding or removing
 * directories from the list.  This avoids problems when a future version
 * uses another default.
 * Backticks cannot be used in this option for security reasons.
 *
 * (default "")
 */
export const dictionary: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "dictionary");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "dictionary", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "dictionary");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "dictionary");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "dictionary", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "dictionary");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "dictionary");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "dictionary", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "dictionary");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&dictionary");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&dictionary", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&dictionary");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&dictionary", value);
  },
};

/**
 * Join the current window in the group of windows that shows differences
 * between files.  See `vimdiff`.
 *
 * (default off)
 *
 * *not available when compiled without the `+diff` feature*
 */
export const diff: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "diff");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "diff", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "diff");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "diff");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "diff", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "diff");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&diff");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&diff", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&diff");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&diff", value);
  },
};

/**
 * Expression which is evaluated to obtain a diff file (either ed-style
 * or unified-style) from two versions of a file.  See `diff-diffexpr`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "")
 *
 * *not available when compiled without the `+diff` feature*
 */
export const diffexpr: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "diffexpr");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "diffexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "diffexpr");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "diffexpr");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "diffexpr", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "diffexpr");
  },
};

/**
 * Option settings for diff mode.  It can consist of the following items.
 * All are optional.  Items must be separated by a comma.
 *
 *         filler          Show filler lines, to keep the text
 *                         synchronized with a window that has inserted
 *                         lines at the same position.  Mostly useful
 *                         when windows are side-by-side and 'scrollbind'
 *                         is set.
 *
 *         context:**{n}**     Use a context of **{n}** lines between a change
 *                         and a fold that contains unchanged lines.
 *                         When omitted a context of six lines is used.
 *                         When using zero the context is actually one,
 *                         since folds require a line in between, also
 *                         for a deleted line.
 *                         See `fold-diff`.
 *
 *         iblank          Ignore changes where lines are all blank.  Adds
 *                         the "-B" flag to the "diff" command if
 *                         'diffexpr' is empty.  Check the documentation
 *                         of the "diff" command for what this does
 *                         exactly.
 *                         NOTE: the diff windows will get out of sync,
 *                         because no differences between blank lines are
 *                         taken into account.
 *
 *         icase           Ignore changes in case of text.  "a" and "A"
 *                         are considered the same.  Adds the "-i" flag
 *                         to the "diff" command if 'diffexpr' is empty.
 *
 *         iwhite          Ignore changes in amount of white space.  Adds
 *                         the "-b" flag to the "diff" command if
 *                         'diffexpr' is empty.  Check the documentation
 *                         of the "diff" command for what this does
 *                         exactly.  It should ignore adding trailing
 *                         white space, but not leading white space.
 *
 *         iwhiteall       Ignore all white space changes.  Adds
 *                         the "-w" flag to the "diff" command if
 *                         'diffexpr' is empty.  Check the documentation
 *                         of the "diff" command for what this does
 *                         exactly.
 *
 *         iwhiteeol       Ignore white space changes at end of line.
 *                         Adds the "-Z" flag to the "diff" command if
 *                         'diffexpr' is empty.  Check the documentation
 *                         of the "diff" command for what this does
 *                         exactly.
 *
 *         horizontal      Start diff mode with horizontal splits (unless
 *                         explicitly specified otherwise).
 *
 *         vertical        Start diff mode with vertical splits (unless
 *                         explicitly specified otherwise).
 *
 *         closeoff        When a window is closed where 'diff' is set
 *                         and there is only one window remaining in the
 *                         same tab page with 'diff' set, execute
 *                         `:diffoff` in that window.  This undoes a
 *                         `:diffsplit` command.
 *
 *         hiddenoff       Do not use diff mode for a buffer when it
 *                         becomes hidden.
 *
 *         foldcolumn:**{n}**  Set the 'foldcolumn' option to **{n}** when
 *                         starting diff mode.  Without this 2 is used.
 *
 *         followwrap      Follow the 'wrap' option and leave as it is.
 *
 *         internal        Use the internal diff library.  This is
 *                         ignored when 'diffexpr' is set.
 *                         When running out of memory when writing a
 *                         buffer this item will be ignored for diffs
 *                         involving that buffer.  Set the 'verbose'
 *                         option to see when this happens.
 *
 *         indent-heuristic
 *                         Use the indent heuristic for the internal
 *                         diff library.
 *
 *         algorithm:**{text}** Use the specified diff algorithm with the
 *                         internal diff engine. Currently supported
 *                         algorithms are:
 *                         myers      the default algorithm
 *                         minimal    spend extra time to generate the
 *                                    smallest possible diff
 *                         patience   patience diff algorithm
 *                         histogram  histogram diff algorithm
 *
 * Examples:
 *
 *     :set diffopt=internal,filler,context:4
 *     :set diffopt=
 *     :set diffopt=internal,filler,foldcolumn:3
 *     :set diffopt-=internal  " do NOT use the internal diff parser
 *
 * (default "internal,filler,closeoff")
 *
 * *not available when compiled without the `+diff` feature*
 */
export const diffopt: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "diffopt");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "diffopt", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "diffopt");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "diffopt");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "diffopt", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "diffopt");
  },
};

/**
 * Enable the entering of digraphs in Insert mode with **{char1}** `<BS>`
 * **{char2}**.  See `digraphs`.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *not available when compiled without the `+digraphs` feature*
 */
export const digraph: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "digraph");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "digraph", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "digraph");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "digraph");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "digraph", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "digraph");
  },
};

/**
 * List of directory names for the swap file, separated with commas.
 * Recommended value:  `".,~/vimswap//"` - this will put the swap file next
 * to the edited file if possible, and in your personal swap directory
 * otherwise.  Make sure `"~/vimswap//"` is only readable for you.
 *
 * Possible items:
 * - The swap file will be created in the first directory where this is
 *   possible.
 * - Empty means that no swap file will be used (recovery is
 *   impossible!) and no `E303` error will be given.
 * - A directory "." means to put the swap file in the same directory as
 *   the edited file.  On Unix, a dot is prepended to the file name, so
 *   it doesn't show in a directory listing.  On MS-Windows the "hidden"
 *   attribute is set and a dot prepended if possible.
 * - A directory starting with "./" (or ".\" for MS-Windows) means to put
 *   the swap file relative to where the edited file is.  The leading "."
 *   is replaced with the path name of the edited file.
 * - For Unix and Win32, if a directory ends in two path separators "//",
 *   the swap file name will be built from the complete path to the file
 *   with all path separators replaced by percent '%' signs (including
 *   the colon following the drive letter on Win32). This will ensure
 *   file name uniqueness in the preserve directory.
 *   On Win32, it is also possible to end with "\\".  However, When a
 *   separating comma is following, you must use "//", since "\\" will
 *   include the comma in the file name. Therefore it is recommended to
 *   use '//', instead of '\\'.
 * - Spaces after the comma are ignored, other spaces are considered part
 *   of the directory name.  To have a space at the start of a directory
 *   name, precede it with a backslash.
 * - To include a comma in a directory name precede it with a backslash.
 * - A directory name may end in an ':' or '/'.
 * - Environment variables are expanded `:set_env`.
 * - Careful with '\' characters, type one before a space, type two to
 *   get one in the option (see `option-backslash`), for example:
 *
 *       :set dir=c:\\tmp,\ dir\\,with\\,commas,\\\ dir\ with\ spaces
 *
 * - For backwards compatibility with Vim version 3.0 a '>' at the start
 *   of the option is removed.
 * Using "." first in the list is recommended.  This means that editing
 * the same file twice will result in a warning.  Using "/tmp" on Unix is
 * discouraged: When the system crashes you lose the swap file.
 * "/var/tmp" is often not cleared when rebooting, thus is a better
 * choice than "/tmp".  But others on the computer may be able to see the
 * files, and it can contain a lot of files, your swap files get lost in
 * the crowd.  That is why a "tmp" directory in your home directory is
 * tried first.
 * The use of `:set+=` and `:set-=` is preferred when adding or removing
 * directories from the list.  This avoids problems when a future version
 * uses another default.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default for Amiga: ".,t:",
 *  for Win32: ".,$TEMP,c:\tmp,c:\temp"
 *  for Unix: `".,~/tmp,/var/tmp,/tmp"`)
 */
export const directory: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "directory");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "directory", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "directory");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "directory");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "directory", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "directory");
  },
};

/**
 * Change the way text is displayed.  This is a comma-separated list of
 * flags:
 * lastline        When included, as much as possible of the last line
 *                 in a window will be displayed.  "@@@" is put in the
 *                 last columns of the last screen line to indicate the
 *                 rest of the line is not displayed.
 * truncate        Like "lastline", but "@@@" is displayed in the first
 *                 column of the last screen line.  Overrules "lastline".
 * uhex            Show unprintable characters hexadecimal as `<xx>`
 *                 instead of using ^C and `~C`.
 *
 * When neither "lastline" nor "truncate" is included, a last line that
 * doesn't fit is replaced with "@" lines.
 *
 * The "@" character can be changed by setting the "lastline" item in
 * 'fillchars'.  The character is highlighted with `hl-NonText`.
 *
 * (default "", set to "truncate" in
 *  `defaults.vim`)
 */
export const display: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "display");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "display", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "display");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "display");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "display", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "display");
  },
};

/**
 * Tells when the 'equalalways' option applies:
 *         ver     vertically, width of windows is not affected
 *         hor     horizontally, height of windows is not affected
 *         both    width and height of windows is affected
 *
 * (default "both")
 */
export const eadirection: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "eadirection");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "eadirection", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "eadirection");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "eadirection");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "eadirection", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "eadirection");
  },
};

/**
 * When on all Unicode emoji characters are considered to be full width.
 * This excludes "text emoji" characters, which are normally displayed as
 * single width.  Unfortunately there is no good specification for this
 * and it has been determined on trial-and-error basis.  Use the
 * `setcellwidths()` function to change the behavior.
 *
 * (default: on)
 */
export const emoji: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "emoji");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "emoji", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "emoji");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "emoji");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "emoji", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "emoji");
  },
};

/**
 * Sets the character encoding used inside Vim.  It applies to text in
 * the buffers, registers, Strings in expressions, text stored in the
 * viminfo file, etc.  It sets the kind of characters which Vim can work
 * with.  See `encoding-names` for the possible values.
 *
 * NOTE: Changing this option will not change the encoding of the
 * existing text in Vim.  It may cause non-ASCII text to become invalid.
 * It should normally be kept at its default value, or set when Vim
 * starts up.  See `multibyte`.  To reload the menus see `:menutrans`.
 *
 * This option cannot be set from a `modeline`.  It would most likely
 * corrupt the text.
 *
 * NOTE: For GTK+ 2 or later, it is highly recommended to set 'encoding'
 * to "utf-8".  Although care has been taken to allow different values of
 * 'encoding', "utf-8" is the natural choice for the environment and
 * avoids unnecessary conversion overhead.  "utf-8" has not been made
 * the default to prevent different behavior of the GUI and terminal
 * versions, and to avoid changing the encoding of newly created files
 * without your knowledge (in case 'fileencodings' is empty).
 *
 * The character encoding of files can be different from 'encoding'.
 * This is specified with 'fileencoding'.  The conversion is done with
 * iconv() or as specified with 'charconvert'.
 *
 * If you need to know whether 'encoding' is a multibyte encoding, you
 * can use:
 *
 *     if has("multi_byte_encoding")
 *
 * Normally 'encoding' will be equal to your current locale.  This will
 * be the default if Vim recognizes your environment settings.  If
 * 'encoding' is not set to the current locale, 'termencoding' must be
 * set to convert typed and displayed text.  See `encoding-table`.
 *
 * When you set this option, it fires the `EncodingChanged` autocommand
 * event so that you can set up fonts if necessary.
 *
 * When the option is set, the value is converted to lowercase.  Thus
 * you can set it with uppercase values too.  Underscores are translated
 * to '-' signs.
 * When the encoding is recognized, it is changed to the standard name.
 * For example "Latin-1" becomes "latin1", "ISO_88592" becomes
 * "iso-8859-2" and "utf8" becomes "utf-8".
 *
 * Note: "latin1" is also used when the encoding could not be detected.
 * This only works when editing files in the same encoding!  When the
 * actual character set is not latin1, make sure 'fileencoding' and
 * 'fileencodings' are empty.  When conversion is needed, switch to using
 * utf-8.
 *
 * When "unicode", "ucs-2" or "ucs-4" is used, Vim internally uses utf-8.
 * You don't notice this while editing, but it does matter for the
 * `viminfo-file`.  And Vim expects the terminal to use utf-8 too.  Thus
 * setting 'encoding' to one of these values instead of utf-8 only has
 * effect for encoding used for files when 'fileencoding' is empty.
 *
 * When 'encoding' is set to a Unicode encoding, and 'fileencodings' was
 * not set yet, the default for 'fileencodings' is changed.
 *
 * (default for MS-Windows: "utf-8",
 *  otherwise: value from $LANG or "latin1")
 */
export const encoding: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "encoding");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "encoding", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "encoding");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "encoding");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "encoding", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "encoding");
  },
};

/**
 * When writing a file and this option is off and the 'binary' option
 * is on, or 'fixeol' option is off, no `<EOL>` will be written for the
 * last line in the file.  This option is automatically set or reset when
 * starting to edit a new file, depending on whether file has an `<EOL>`
 * for the last line in the file.  Normally you don't have to set or
 * reset this option.
 * When 'binary' is off and 'fixeol' is on the value is not used when
 * writing the file.  When 'binary' is on or 'fixeol' is off it is used
 * to remember the presence of a `<EOL>` for the last line in the file, so
 * that when you write the file the situation from the original file can
 * be kept.  But you can change it if you want to.
 * See `eol-and-eof` for example settings.
 *
 * (default on)
 */
export const endofline: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "endofline");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "endofline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "endofline");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "endofline");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "endofline", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "endofline");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&endofline");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&endofline", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&endofline");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&endofline", value);
  },
};

/**
 * When on, all the windows are automatically made the same size after
 * splitting or closing a window.  This also happens the moment the
 * option is switched on.  When off, splitting a window will reduce the
 * size of the current window and leave the other windows the same.  When
 * closing a window the extra lines are given to the window next to it
 * (depending on 'splitbelow' and 'splitright').
 * When mixing vertically and horizontally split windows, a minimal size
 * is computed and some windows may be larger if there is room.  The
 * 'eadirection' option tells in which direction the size is affected.
 * Changing the height and width of a window can be avoided by setting
 * 'winfixheight' and 'winfixwidth', respectively.
 * If a window size is specified when creating a new window sizes are
 * currently not equalized (it's complicated, but may be implemented in
 * the future).
 *
 * (default on)
 */
export const equalalways: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "equalalways");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "equalalways", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "equalalways");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "equalalways");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "equalalways", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "equalalways");
  },
};

/**
 * External program to use for "=" command.  When this option is empty
 * the internal formatting functions are used; either 'lisp', 'cindent'
 * or 'indentexpr'.  When Vim was compiled without internal formatting,
 * the "indent" program is used.
 * Environment variables are expanded `:set_env`.  See `option-backslash`
 * about including spaces and backslashes.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "")
 */
export const equalprg: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "equalprg");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "equalprg", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "equalprg");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "equalprg");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "equalprg", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "equalprg");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "equalprg");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "equalprg", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "equalprg");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&equalprg");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&equalprg", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&equalprg");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&equalprg", value);
  },
};

/**
 * Ring the bell (beep or screen flash) for error messages.  This only
 * makes a difference for error messages, the bell will be used always
 * for a lot of errors without a message (e.g., hitting `<Esc>` in Normal
 * mode).  See 'visualbell' on how to make the bell behave like a beep,
 * screen flash or do nothing. See 'belloff' to finetune when to ring the
 * bell.
 *
 * (default off)
 */
export const errorbells: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "errorbells");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "errorbells", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "errorbells");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "errorbells");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "errorbells", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "errorbells");
  },
};

/**
 * Name of the errorfile for the QuickFix mode (see `:cf`).
 * When the "-q" command-line argument is used, 'errorfile' is set to the
 * following argument.  See `-q`.
 * NOT used for the ":make" command.  See 'makeef' for that.
 * Environment variables are expanded `:set_env`.
 * See `option-backslash` about including spaces and backslashes.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (Amiga default: "AztecC.Err",
 *  others: "errors.err")
 *
 * *not available when compiled without the `+quickfix` feature*
 */
export const errorfile: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "errorfile");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "errorfile", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "errorfile");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "errorfile");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "errorfile", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "errorfile");
  },
};

/**
 * Scanf-like description of the format for the lines in the error file
 * (see `errorformat`).
 *
 * (default is very long)
 *
 * *not available when compiled without the `+quickfix` feature*
 */
export const errorformat: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "errorformat");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "errorformat", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "errorformat");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "errorformat");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "errorformat", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "errorformat");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "errorformat");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "errorformat", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "errorformat");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&errorformat");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&errorformat", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&errorformat");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&errorformat", value);
  },
};

/**
 * A list of autocommand event names, which are to be ignored.
 * When set to "all" or when "all" is one of the items, all autocommand
 * events are ignored, autocommands will not be executed.
 * Otherwise this is a comma-separated list of event names.  Example:
 *
 *     :set ei=WinEnter,WinLeave
 *
 * (default "")
 */
export const eventignore: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "eventignore");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "eventignore", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "eventignore");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "eventignore");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "eventignore", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "eventignore");
  },
};

/**
 * In Insert mode: Use the appropriate number of spaces to insert a
 * `<Tab>`.  Spaces are used in indents with the '>' and `'<'` commands and
 * when 'autoindent' is on.  To insert a real tab when 'expandtab' is
 * on, use CTRL-V<Tab>.  See also `:retab` and `ins-expandtab`.
 * This option is reset when the 'paste' option is set and restored when
 * the 'paste' option is reset.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 */
export const expandtab: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "expandtab");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "expandtab", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "expandtab");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "expandtab");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "expandtab", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "expandtab");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&expandtab");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&expandtab", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&expandtab");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&expandtab", value);
  },
};

/**
 * Sets the character encoding for the file of this buffer.
 *
 * When 'fileencoding' is different from 'encoding', conversion will be
 * done when writing the file.  For reading see below.
 * When 'fileencoding' is empty, the same value as 'encoding' will be
 * used (no conversion when reading or writing a file).
 * No error will be given when the value is set, only when it is used,
 * only when writing a file.
 * Conversion will also be done when 'encoding' and 'fileencoding' are
 * both a Unicode encoding and 'fileencoding' is not utf-8.  That's
 * because internally Unicode is always stored as utf-8.
 *         WARNING: Conversion can cause loss of information!  When
 *         'encoding' is "utf-8" or another Unicode encoding, conversion
 *         is most likely done in a way that the reverse conversion
 *         results in the same text.  When 'encoding' is not "utf-8" some
 *         characters may be lost!
 *
 * See 'encoding' for the possible values.  Additionally, values may be
 * specified that can be handled by the converter, see
 * `mbyte-conversion`.
 *
 * When reading a file 'fileencoding' will be set from 'fileencodings'.
 * To read a file in a certain encoding it won't work by setting
 * 'fileencoding', use the `++enc` argument.  One exception: when
 * 'fileencodings' is empty the value of 'fileencoding' is used.
 * For a new file the global value of 'fileencoding' is used.
 *
 * Prepending "8bit-" and "2byte-" has no meaning here, they are ignored.
 * When the option is set, the value is converted to lowercase.  Thus
 * you can set it with uppercase values too.  '_' characters are
 * replaced with '-'.  If a name is recognized from the list for
 * 'encoding', it is replaced by the standard name.  For example
 * "ISO8859-2" becomes "iso-8859-2".
 *
 * When this option is set, after starting to edit a file, the 'modified'
 * option is set, because the file would be different when written.
 *
 * Keep in mind that changing 'fenc' from a modeline happens
 * AFTER the text has been read, thus it applies to when the file will be
 * written.  If you do set 'fenc' in a modeline, you might want to set
 * 'nomodified' to avoid not being able to ":q".
 *
 * This option can not be changed when 'modifiable' is off.
 *
 * NOTE: Before version 6.0 this option specified the encoding for the
 * whole of Vim, this was a mistake.  Now use 'encoding' instead.  The
 * old short name was 'fe', which is no longer used.
 *
 * (default: "")
 */
export const fileencoding: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "fileencoding");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "fileencoding", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fileencoding");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "fileencoding");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "fileencoding", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "fileencoding");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&fileencoding");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&fileencoding", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&fileencoding");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&fileencoding", value);
  },
};

/**
 * This is a list of character encodings considered when starting to edit
 * an existing file.  When a file is read, Vim tries to use the first
 * mentioned character encoding.  If an error is detected, the next one
 * in the list is tried.  When an encoding is found that works,
 * 'fileencoding' is set to it.  If all fail, 'fileencoding' is set to
 * an empty string, which means the value of 'encoding' is used.
 *         WARNING: Conversion can cause loss of information!  When
 *         'encoding' is "utf-8" (or one of the other Unicode variants)
 *         conversion is most likely done in a way that the reverse
 *         conversion results in the same text.  When 'encoding' is not
 *         "utf-8" some non-ASCII characters may be lost!  You can use
 *         the `++bad` argument to specify what is done with characters
 *         that can't be converted.
 * For an empty file or a file with only ASCII characters most encodings
 * will work and the first entry of 'fileencodings' will be used (except
 * "ucs-bom", which requires the BOM to be present).  If you prefer
 * another encoding use an BufReadPost autocommand event to test if your
 * preferred encoding is to be used.  Example:
 *
 *     au BufReadPost * if search('\S', 'w') == 0 |
 *             \ set fenc=iso-2022-jp | endif
 *
 * This sets 'fileencoding' to "iso-2022-jp" if the file does not contain
 * non-blank characters.
 * When the `++enc` argument is used then the value of 'fileencodings' is
 * not used.
 * Note that 'fileencodings' is not used for a new file, the global value
 * of 'fileencoding' is used instead.  You can set it with:
 *
 *     :setglobal fenc=iso-8859-2
 *
 * This means that a non-existing file may get a different encoding than
 * an empty file.
 * The special value "ucs-bom" can be used to check for a Unicode BOM
 * (Byte Order Mark) at the start of the file.  It must not be preceded
 * by "utf-8" or another Unicode encoding for this to work properly.
 * An entry for an 8-bit encoding (e.g., "latin1") should be the last,
 * because Vim cannot detect an error, thus the encoding is always
 * accepted.
 * The special value "default" can be used for the encoding from the
 * environment.  On MS-Windows this is the system encoding.  Otherwise
 * this is the default value for 'encoding'.  It is useful when
 * 'encoding' is set to "utf-8" and your environment uses a non-latin1
 * encoding, such as Russian.
 * When 'encoding' is "utf-8" and a file contains an illegal byte
 * sequence it won't be recognized as UTF-8.  You can use the `8g8`
 * command to find the illegal byte sequence.
 * WRONG VALUES:                   WHAT'S WRONG:
 *         latin1,utf-8            "latin1" will always be used
 *         utf-8,ucs-bom,latin1    BOM won't be recognized in an utf-8
 *                                 file
 *         cp1250,latin1           "cp1250" will always be used
 * If 'fileencodings' is empty, 'fileencoding' is not modified.
 * See 'fileencoding' for the possible values.
 * Setting this option does not have an effect until the next time a file
 * is read.
 *
 * (default: "ucs-bom",
 *  "ucs-bom,utf-8,default,latin1" when
 *  'encoding' is set to a Unicode value)
 */
export const fileencodings: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "fileencodings");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "fileencodings", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fileencodings");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "fileencodings");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "fileencodings", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "fileencodings");
  },
};

/**
 * This gives the `<EOL>` of the current buffer, which is used for
 * reading/writing the buffer from/to a file:
 *     dos     `<CR><NL>`
 *     unix    `<NL>`
 *     mac     `<CR>`
 * When "dos" is used, CTRL-Z at the end of a file is ignored.
 * See `file-formats` and `file-read`.
 * For the character encoding of the file see 'fileencoding'.
 * When 'binary' is set, the value of 'fileformat' is ignored, file I/O
 * works like it was set to "unix".
 * This option is set automatically when starting to edit a file and
 * 'fileformats' is not empty and 'binary' is off.
 * When this option is set, after starting to edit a file, the 'modified'
 * option is set, because the file would be different when written.
 * This option can not be changed when 'modifiable' is off.
 * For backwards compatibility: When this option is set to "dos",
 * 'textmode' is set, otherwise 'textmode' is reset.
 *
 * (MS-Windows default: "dos",
 *  Unix, macOS default: "unix")
 */
export const fileformat: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "fileformat");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "fileformat", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fileformat");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "fileformat");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "fileformat", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "fileformat");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&fileformat");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&fileformat", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&fileformat");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&fileformat", value);
  },
};

/**
 * This gives the end-of-line (`<EOL>`) formats that will be tried when
 * starting to edit a new buffer and when reading a file into an existing
 * buffer:
 * - When empty, the format defined with 'fileformat' will be used
 *   always.  It is not set automatically.
 * - When set to one name, that format will be used whenever a new buffer
 *   is opened.  'fileformat' is set accordingly for that buffer.  The
 *   'fileformats' name will be used when a file is read into an existing
 *   buffer, no matter what 'fileformat' for that buffer is set to.
 * - When more than one name is present, separated by commas, automatic
 *   `<EOL>` detection will be done when reading a file.  When starting to
 *   edit a file, a check is done for the `<EOL>`:
 *   1. If all lines end in `<CR><NL>`, and 'fileformats' includes "dos",
 *      'fileformat' is set to "dos".
 *   2. If a `<NL>` is found and 'fileformats' includes "unix", 'fileformat'
 *      is set to "unix".  Note that when a `<NL>` is found without a
 *      preceding `<CR>`, "unix" is preferred over "dos".
 *   3. If 'fileformat' has not yet been set, and if a `<CR>` is found, and
 *      if 'fileformats' includes "mac", 'fileformat' is set to "mac".
 *      This means that "mac" is only chosen when:
 *       "unix" is not present or no `<NL>` is found in the file, and
 *       "dos" is not present or no `<CR><NL>` is found in the file.
 *      Except: if "unix" was chosen, but there is a `<CR>` before
 *      the first `<NL>`, and there appear to be more `<CR>`s than `<NL>`s in
 *      the first few lines, "mac" is used.
 *   4. If 'fileformat' is still not set, the first name from
 *      'fileformats' is used.
 *   When reading a file into an existing buffer, the same is done, but
 *   this happens like 'fileformat' has been set appropriately for that
 *   file only, the option is not changed.
 * When 'binary' is set, the value of 'fileformats' is not used.
 *
 * When Vim starts up with an empty buffer the first item is used.  You
 * can overrule this by setting 'fileformat' in your .vimrc.
 *
 * For systems with a Dos-like `<EOL>` (`<CR><NL>`), when reading files that
 * are ":source"ed and for vimrc files, automatic `<EOL>` detection may be
 * done:
 * - When 'fileformats' is empty, there is no automatic detection.  Dos
 *   format will be used.
 * - When 'fileformats' is set to one or more names, automatic detection
 *   is done.  This is based on the first `<NL>` in the file: If there is a
 *   `<CR>` in front of it, Dos format is used, otherwise Unix format is
 *   used.
 * Also see `file-formats`.
 * For backwards compatibility: When this option is set to an empty
 * string or one format (no comma is included), 'textauto' is reset,
 * otherwise 'textauto' is set.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (default:
 *  Vim+Vi MS-Windows: "dos,unix",
 *  Vim    Unix, macOS: "unix,dos",
 *  Vi     Cygwin: "unix,dos",
 *  Vi     others: "")
 */
export const fileformats: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "fileformats");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "fileformats", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fileformats");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "fileformats");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "fileformats", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "fileformats");
  },
};

/**
 * When set case is ignored when using file names and directories.
 * See 'wildignorecase' for only ignoring case when doing completion.
 *
 * (default on for systems where case in file
 *  names is normally ignored)
 */
export const fileignorecase: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "fileignorecase");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "fileignorecase", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fileignorecase");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "fileignorecase");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "fileignorecase", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "fileignorecase");
  },
};

/**
 * When this option is set, the FileType autocommand event is triggered.
 * All autocommands that match with the value of this option will be
 * executed.  Thus the value of 'filetype' is used in place of the file
 * name.
 * Otherwise this option does not always reflect the current file type.
 * This option is normally set when the file type is detected.  To enable
 * this use the ":filetype on" command. `:filetype`
 * Setting this option to a different value is most useful in a modeline,
 * for a file for which the file type is not automatically recognized.
 * Example, for in an IDL file:
 *         /* vim: set filetype=idl : * /
 * `FileType` `filetypes`
 * When a dot appears in the value then this separates two filetype
 * names.  Example:
 *         /* vim: set filetype=c.doxygen : * /
 * This will use the "c" filetype first, then the "doxygen" filetype.
 * This works both for filetype plugins and for syntax files.  More than
 * one dot may appear.
 * This option is not copied to another buffer, independent of the 's' or
 * 'S' flag in 'cpoptions'.
 * Only normal file name characters can be used, `"/\*?[|<>"` are illegal.
 *
 * (default: "")
 */
export const filetype: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "filetype");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "filetype", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "filetype");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "filetype");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "filetype", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "filetype");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&filetype");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&filetype", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&filetype");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&filetype", value);
  },
};

/**
 * Characters to fill the statuslines, vertical separators and special
 * lines in the window.
 * It is a comma-separated list of items.  Each item has a name, a colon
 * and the value of that item:
 *
 *   item name     default         Used for
 *   stl           ' ' or '^'      statusline of the current window
 *   stlnc         ' ' or '='      statusline of the non-current windows
 *   vert          '|'             vertical separators `:vsplit`
 *   fold          '-'             filling 'foldtext'
 *   foldopen      '-'             mark the beginning of a fold
 *   foldclose     '+'             show a closed fold
 *   foldsep       '|'             open fold middle character
 *   diff          '-'             deleted lines of the 'diff' option
 *   eob           `'~'`             empty lines below the end of a buffer
 *   lastline      '@'             'display' contains lastline/truncate
 *
 * Any one that is omitted will fall back to the default.  For "stl" and
 * "stlnc" the space will be used when there is highlighting, '^' or '='
 * otherwise.
 *
 * Example:
 *
 *     :set fillchars=stl:^,stlnc:=,vert:\|,fold:-,diff:-
 *
 * This is similar to the default, except that these characters will also
 * be used when there is highlighting.
 *
 * For the "stl", "stlnc", "foldopen", "foldclose" and "foldsep" items
 * single-byte and multibyte characters are supported.  But double-width
 * characters are not supported.
 *
 * The highlighting used for these items:
 *   item name     highlight group
 *   stl           StatusLine              `hl-StatusLine`
 *   stlnc         StatusLineNC            `hl-StatusLineNC`
 *   vert          VertSplit               `hl-VertSplit`
 *   fold          Folded                  `hl-Folded`
 *   diff          DiffDelete              `hl-DiffDelete`
 *   eob           EndOfBuffer             `hl-EndOfBuffer`
 *   lastline      NonText                 `hl-NonText`
 *
 * (default `"vert:|,fold:-,eob:~"`)
 *
 * *not available when compiled without the `+folding` feature*
 */
export const fillchars: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "fillchars");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "fillchars", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fillchars");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "fillchars");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "fillchars", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "fillchars");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "fillchars");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "fillchars", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "fillchars");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&fillchars");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&fillchars", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&fillchars");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&fillchars", value);
  },
};

/**
 * When writing a file and this option is on, `<EOL>` at the end of file
 * will be restored if missing.  Turn this option off if you want to
 * preserve the situation from the original file.
 * When the 'binary' option is set the value of this option doesn't
 * matter.
 * See the 'endofline' option.
 * See `eol-and-eof` for example settings.
 *
 * (default on)
 */
export const fixendofline: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "fixendofline");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "fixendofline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fixendofline");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "fixendofline");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "fixendofline", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "fixendofline");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&fixendofline");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&fixendofline", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&fixendofline");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&fixendofline", value);
  },
};

/**
 * When set to "all", a fold is closed when the cursor isn't in it and
 * its level is higher than 'foldlevel'.  Useful if you want folds to
 * automatically close when moving out of them.
 *
 * (default "")
 *
 * *not available when compiled without the `+folding` feature*
 */
export const foldclose: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "foldclose");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "foldclose", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldclose");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "foldclose");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "foldclose", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "foldclose");
  },
};

/**
 * When non-zero, a column with the specified width is shown at the side
 * of the window which indicates open and closed folds.  The maximum
 * value is 12.
 * See `folding`.
 *
 * (default 0)
 *
 * *not available when compiled without the `+folding` feature*
 */
export const foldcolumn: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "foldcolumn");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "foldcolumn", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldcolumn");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "foldcolumn");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "foldcolumn", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldcolumn");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&foldcolumn");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&foldcolumn", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&foldcolumn");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&foldcolumn", value);
  },
};

/**
 * When off, all folds are open.  This option can be used to quickly
 * switch between showing all text unfolded and viewing the text with
 * folds (including manually opened or closed folds).  It can be toggled
 * with the `zi` command.  The 'foldcolumn' will remain blank when
 * 'foldenable' is off.
 * This option is set by commands that create a new fold or close a fold.
 * See `folding`.
 *
 * (default on)
 *
 * *not available when compiled without the `+folding` feature*
 */
export const foldenable: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "foldenable");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "foldenable", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldenable");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "foldenable");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "foldenable", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldenable");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&foldenable");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&foldenable", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&foldenable");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&foldenable", value);
  },
};

/**
 * The expression used for when 'foldmethod' is "expr".  It is evaluated
 * for each line to obtain its fold level.  The context is set to the
 * script where 'foldexpr' was set, script-local items can be accessed.
 * See `fold-expr` for the usage.
 *
 * The expression will be evaluated in the `sandbox` if set from a
 * modeline, see `sandbox-option`.
 * This option can't be set from a `modeline` when the 'diff' option is
 * on or the 'modelineexpr' option is off.
 *
 * It is not allowed to change text or jump to another window while
 * evaluating 'foldexpr' `textlock`.
 *
 * (default: "0")
 *
 * *not available when compiled without the `+folding` or `+eval` features*
 */
export const foldexpr: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "foldexpr");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "foldexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldexpr");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "foldexpr");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "foldexpr", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldexpr");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&foldexpr");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&foldexpr", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&foldexpr");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&foldexpr", value);
  },
};

/**
 * Used only when 'foldmethod' is "indent".  Lines starting with
 * characters in 'foldignore' will get their fold level from surrounding
 * lines.  White space is skipped before checking for this character.
 * The default "#" works well for C programs.  See `fold-indent`.
 *
 * (default: "#")
 *
 * *not available when compiled without the `+folding` feature*
 */
export const foldignore: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "foldignore");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "foldignore", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldignore");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "foldignore");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "foldignore", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldignore");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&foldignore");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&foldignore", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&foldignore");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&foldignore", value);
  },
};

/**
 * Sets the fold level: Folds with a higher level will be closed.
 * Setting this option to zero will close all folds.  Higher numbers will
 * close fewer folds.
 * This option is set by commands like `zm`, `zM` and `zR`.
 * See `fold-foldlevel`.
 *
 * (default: 0)
 *
 * *not available when compiled without the `+folding` feature*
 */
export const foldlevel: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "foldlevel");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "foldlevel", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldlevel");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "foldlevel");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "foldlevel", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldlevel");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&foldlevel");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&foldlevel", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&foldlevel");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&foldlevel", value);
  },
};

/**
 * Sets 'foldlevel' when starting to edit another buffer in a window.
 * Useful to always start editing with all folds closed (value zero),
 * some folds closed (one) or no folds closed (99).
 * This is done before reading any modeline, thus a setting in a modeline
 * overrules this option.  Starting to edit a file for `diff-mode` also
 * ignores this option and closes all folds.
 * It is also done before BufReadPre autocommands, to allow an autocmd to
 * overrule the 'foldlevel' value for specific files.
 * When the value is negative, it is not used.
 *
 * (default: -1)
 *
 * *not available when compiled without the `+folding` feature*
 */
export const foldlevelstart: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "foldlevelstart");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "foldlevelstart", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldlevelstart");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "foldlevelstart");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "foldlevelstart", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "foldlevelstart");
  },
};

/**
 * The start and end marker used when 'foldmethod' is "marker".  There
 * must be one comma, which separates the start and end marker.  The
 * marker is a literal string (a regular expression would be too slow).
 * See `fold-marker`.
 *
 * (default: "{{**{,}**}}")
 *
 * *not available when compiled without the `+folding` feature*
 */
export const foldmarker: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "foldmarker");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "foldmarker", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldmarker");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "foldmarker");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "foldmarker", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldmarker");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&foldmarker");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&foldmarker", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&foldmarker");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&foldmarker", value);
  },
};

/**
 * The kind of folding used for the current window.  Possible values:
 * `fold-manual`   manual      Folds are created manually.
 * `fold-indent`   indent      Lines with equal indent form a fold.
 * `fold-expr`     expr        'foldexpr' gives the fold level of a line.
 * `fold-marker`   marker      Markers are used to specify folds.
 * `fold-syntax`   syntax      Syntax highlighting items specify folds.
 * `fold-diff`     diff        Fold text that is not changed.
 *
 * (default: "manual")
 *
 * *not available when compiled without the `+folding` feature*
 */
export const foldmethod: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "foldmethod");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "foldmethod", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldmethod");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "foldmethod");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "foldmethod", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldmethod");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&foldmethod");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&foldmethod", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&foldmethod");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&foldmethod", value);
  },
};

/**
 * Sets the number of screen lines above which a fold can be displayed
 * closed.  Also for manually closed folds.  With the default value of
 * one a fold can only be closed if it takes up two or more screen lines.
 * Set to zero to be able to close folds of just one screen line.
 * Note that this only has an effect on what is displayed.  After using
 * "zc" to close a fold, which is displayed open because it's smaller
 * than 'foldminlines', a following "zc" may close a containing fold.
 *
 * (default: 1)
 *
 * *not available when compiled without the `+folding` feature*
 */
export const foldminlines: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "foldminlines");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "foldminlines", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldminlines");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "foldminlines");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "foldminlines", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldminlines");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&foldminlines");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&foldminlines", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&foldminlines");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&foldminlines", value);
  },
};

/**
 * Sets the maximum nesting of folds for the "indent" and "syntax"
 * methods.  This avoids that too many folds will be created.  Using more
 * than 20 doesn't work, because the internal limit is 20.
 *
 * (default: 20)
 *
 * *not available when compiled without the `+folding` feature*
 */
export const foldnestmax: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "foldnestmax");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "foldnestmax", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldnestmax");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "foldnestmax");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "foldnestmax", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldnestmax");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&foldnestmax");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&foldnestmax", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&foldnestmax");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&foldnestmax", value);
  },
};

/**
 * Specifies for which type of commands folds will be opened, if the
 * command moves the cursor into a closed fold.  It is a comma-separated
 * list of items.
 * NOTE: When the command is part of a mapping this option is not used.
 * Add the `zv` command to the mapping to get the same effect.
 * (rationale: the mapping may want to control opening folds itself)
 *
 *         item            commands
 *         all             any
 *         block           "(", "{", "[[", "[{", etc.
 *         hor             horizontal movements: "l", "w", "fx", etc.
 *         insert          any command in Insert mode
 *         jump            far jumps: "G", "gg", etc.
 *         mark            jumping to a mark: "'m", CTRL-O, etc.
 *         percent         "%"
 *         quickfix        ":cn", ":crew", ":make", etc.
 *         search          search for a pattern: "/", "n", "*", "gd", etc.
 *                         (not for a search pattern in a ":" command)
 *                         Also for `[s` and `]s`.
 *         tag             jumping to a tag: ":ta", CTRL-T, etc.
 *         undo            undo or redo: "u" and CTRL-R
 * When a movement command is used for an operator (e.g., "dl" or "y%")
 * this option is not used.  This means the operator will include the
 * whole closed fold.
 * Note that vertical movements are not here, because it would make it
 * very difficult to move onto a closed fold.
 * In insert mode the folds containing the cursor will always be open
 * when text is inserted.
 * To close folds you can re-apply 'foldlevel' with the `zx` command or
 * set the 'foldclose' option to "all".
 *
 * (default: "block,hor,mark,percent,quickfix,
 *  search,tag,undo")
 *
 * *not available when compiled without the `+folding` feature*
 */
export const foldopen: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "foldopen");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "foldopen", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldopen");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "foldopen");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "foldopen", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "foldopen");
  },
};

/**
 * An expression which is used to specify the text displayed for a closed
 * fold.  The context is set to the script where 'foldexpr' was set,
 * script-local items can be accessed.  See `fold-foldtext` for the
 * usage.
 *
 * The expression will be evaluated in the `sandbox` if set from a
 * modeline, see `sandbox-option`.
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 *
 * It is not allowed to change text or jump to another window while
 * evaluating 'foldtext' `textlock`.
 *
 * (default: "foldtext()")
 *
 * *not available when compiled without the `+folding` feature*
 */
export const foldtext: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "foldtext");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "foldtext", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldtext");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "foldtext");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "foldtext", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldtext");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&foldtext");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&foldtext", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&foldtext");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&foldtext", value);
  },
};

/**
 * Expression which is evaluated to format a range of lines for the `gq`
 * operator or automatic formatting (see 'formatoptions').  When this
 * option is empty 'formatprg' is used.
 *
 * The `v:lnum`  variable holds the first line to be formatted.
 * The `v:count` variable holds the number of lines to be formatted.
 * The `v:char`  variable holds the character that is going to be
 *               inserted if the expression is being evaluated due to
 *               automatic formatting.  This can be empty.  Don't insert
 *               it yet!
 *
 * Example:
 *
 *     :set formatexpr=mylang#Format()
 *
 * This will invoke the mylang#Format() function in the
 * autoload/mylang.vim file in 'runtimepath'. `autoload`
 *
 * The advantage of using a function call without arguments is that it is
 * faster, see `expr-option-function`.
 *
 * The expression is also evaluated when 'textwidth' is set and adding
 * text beyond that limit.  This happens under the same conditions as
 * when internal formatting is used.  Make sure the cursor is kept in the
 * same spot relative to the text then!  The `mode()` function will
 * return "i" or "R" in this situation.
 *
 * When the expression evaluates to non-zero Vim will fall back to using
 * the internal format mechanism.
 *
 * If the expression starts with s: or `<SID>`, then it is replaced with
 * the script ID (`local-function`). Example:
 *
 *     set formatexpr=s:MyFormatExpr()
 *     set formatexpr=<SID>SomeFormatExpr()
 *
 * Otherwise, the expression is evaluated in the context of the script
 * where the option was set, thus script-local items are available.
 *
 * The expression will be evaluated in the `sandbox` when set from a
 * modeline, see `sandbox-option`.  That stops the option from working,
 * since changing the buffer text is not allowed.
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 * NOTE: This option is set to "" when 'compatible' is set.
 *
 * (default "")
 *
 * *not available when compiled without the `+eval` feature*
 */
export const formatexpr: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "formatexpr");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "formatexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "formatexpr");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "formatexpr");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "formatexpr", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "formatexpr");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&formatexpr");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&formatexpr", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&formatexpr");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&formatexpr", value);
  },
};

/**
 * A pattern that is used to recognize a list header.  This is used for
 * the "n" flag in 'formatoptions'.
 * The pattern must match exactly the text that will be the indent for
 * the line below it.  You can use `/\ze` to mark the end of the match
 * while still checking more characters.  There must be a character
 * following the pattern, when it matches the whole line it is handled
 * like there is no match.
 * The default recognizes a number, followed by an optional punctuation
 * character and white space.
 *
 * (default: "^\s*\d\+[\]:.)}\t ]\s*")
 */
export const formatlistpat: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "formatlistpat");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "formatlistpat", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "formatlistpat");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "formatlistpat");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "formatlistpat", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "formatlistpat");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&formatlistpat");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&formatlistpat", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&formatlistpat");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&formatlistpat", value);
  },
};

/**
 * This is a sequence of letters which describes how automatic
 * formatting is to be done.  See `fo-table`.  When the 'paste' option is
 * on, no formatting is done (like 'formatoptions' is empty).  Commas can
 * be inserted for readability.
 * To avoid problems with flags that are added in the future, use the
 * "+=" and "-=" feature of ":set" `add-option-flags`.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (Vim default: "tcq", Vi default: "vt")
 */
export const formatoptions: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "formatoptions");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "formatoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "formatoptions");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "formatoptions");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "formatoptions", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "formatoptions");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&formatoptions");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&formatoptions", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&formatoptions");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&formatoptions", value);
  },
};

/**
 * The name of an external program that will be used to format the lines
 * selected with the `gq` operator.  The program must take the input on
 * stdin and produce the output on stdout.  The Unix program "fmt" is
 * such a program.
 * If the 'formatexpr' option is not empty it will be used instead.
 * Otherwise, if 'formatprg' option is an empty string, the internal
 * format function will be used `C-indenting`.
 * Environment variables are expanded `:set_env`.  See `option-backslash`
 * about including spaces and backslashes.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "")
 */
export const formatprg: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "formatprg");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "formatprg", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "formatprg");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "formatprg");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "formatprg", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "formatprg");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "formatprg");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "formatprg", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "formatprg");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&formatprg");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&formatprg", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&formatprg");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&formatprg", value);
  },
};

/**
 * When on, the library function fsync() will be called after writing a
 * file.  This will flush a file to disk, ensuring that it is safely
 * written even on filesystems which do metadata-only journaling.  This
 * will force the harddrive to spin up on Linux systems running in laptop
 * mode, so it may be undesirable in some situations.  Be warned that
 * turning this off increases the chances of data loss after a crash.  On
 * systems without an fsync() implementation, this variable is always
 * off.
 * Also see 'swapsync' for controlling fsync() on swap files.
 * 'fsync' also applies to `writefile()` (unless a flag is used to
 * overrule it) and when writing undo files (see `undo-persistence`).
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default on)
 */
export const fsync: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "fsync");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "fsync", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fsync");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "fsync");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "fsync", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "fsync");
  },
};

/**
 * When on, the ":substitute" flag 'g' is default on.  This means that
 * all matches in a line are substituted instead of one.  When a 'g' flag
 * is given to a ":substitute" command, this will toggle the substitution
 * of all or one match.  See `complex-change`.
 *
 *         command         'gdefault' on   'gdefault' off
 *         :s///             subst. all      subst. one
 *         :s///g            subst. one      subst. all
 *         :s///gg           subst. all      subst. one
 *
 * NOTE: This option is reset when 'compatible' is set.
 * DEPRECATED: Setting this option may break plugins that are not aware
 * of this option.  Also, many users get confused that adding the /g flag
 * has the opposite effect of that it normally does.
 * This option is not used in `Vim9` script.
 *
 * (default off)
 */
export const gdefault: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "gdefault");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "gdefault", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "gdefault");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "gdefault");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "gdefault", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "gdefault");
  },
};

/**
 * Format to recognize for the ":grep" command output.
 * This is a scanf-like string that uses the same format as the
 * 'errorformat' option: see `errorformat`.
 *
 * (default "%f:%l:%m,%f:%l%m,%f  %l%m")
 */
export const grepformat: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "grepformat");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "grepformat", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "grepformat");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "grepformat");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "grepformat", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "grepformat");
  },
};

/**
 * Program to use for the `:grep` command.  This option may contain '%'
 * and '#' characters, which are expanded like when used in a command-
 * line.  The placeholder "$*" is allowed to specify where the arguments
 * will be included.  Environment variables are expanded `:set_env`.  See
 * `option-backslash` about including spaces and backslashes.
 * When your "grep" accepts the "-H" argument, use this to make ":grep"
 * also work well with a single file:
 *
 *     :set grepprg=grep\ -nH
 *
 * Special value: When 'grepprg' is set to "internal" the `:grep` command
 * works like `:vimgrep`, `:lgrep` like `:lvimgrep`, `:grepadd` like
 * `:vimgrepadd` and `:lgrepadd` like `:lvimgrepadd`.
 * See also the section `:make_makeprg`, since most of the comments there
 * apply equally to 'grepprg'.
 * For Win32, the default is "findstr /n" if "findstr.exe" can be found,
 * otherwise it's "grep -n".
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "grep -n ",
 *  Unix: "grep -n $* /dev/null",
 *  Win32: "findstr /n" or "grep -n",
 *  VMS: "SEARCH/NUMBERS ")
 */
export const grepprg: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "grepprg");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "grepprg", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "grepprg");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "grepprg");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "grepprg", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "grepprg");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "grepprg");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "grepprg", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "grepprg");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&grepprg");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&grepprg", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&grepprg");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&grepprg", value);
  },
};

/**
 * This option tells Vim what the cursor should look like in different
 * modes.  It fully works in the GUI.  In a Win32 console, only the
 * height of the cursor can be changed.  This can be done by specifying a
 * block cursor, or a percentage for a vertical or horizontal cursor.
 * For a console the 't_SI', 't_SR', and 't_EI' escape sequences are
 * used.
 *
 * The option is a comma-separated list of parts.  Each part consist of a
 * mode-list and an argument-list:
 *         mode-list:argument-list,mode-list:argument-list,..
 * The mode-list is a dash separated list of these modes:
 *         n       Normal mode
 *         v       Visual mode
 *         ve      Visual mode with 'selection' "exclusive" (same as 'v',
 *                 if not specified)
 *         o       Operator-pending mode
 *         i       Insert mode
 *         r       Replace mode
 *         c       Command-line Normal (append) mode
 *         ci      Command-line Insert mode
 *         cr      Command-line Replace mode
 *         sm      showmatch in Insert mode
 *         a       all modes
 * The argument-list is a dash separated list of these arguments:
 *         hor**{N}**  horizontal bar, **{N}** percent of the character height
 *         ver**{N}**  vertical bar, **{N}** percent of the character width
 *         block   block cursor, fills the whole character
 *                 [only one of the above three should be present]
 *         blinkwait**{N}**
 *         blinkon**{N}**
 *         blinkoff**{N}**
 *                 blink times for cursor: blinkwait is the delay before
 *                 the cursor starts blinking, blinkon is the time that
 *                 the cursor is shown and blinkoff is the time that the
 *                 cursor is not shown.  The times are in msec.  When one
 *                 of the numbers is zero, there is no blinking.  The
 *                 default is: "blinkwait700-blinkon400-blinkoff250".
 *                 These numbers are used for a missing entry.  This
 *                 means that blinking is enabled by default.  To switch
 *                 blinking off you can use "blinkon0".  The cursor only
 *                 blinks when Vim is waiting for input, not while
 *                 executing a command.
 *                 To make the cursor blink in an xterm, see
 *                 `xterm-blink`.
 *         **{group-name}**
 *                 a highlight group name, that sets the color and font
 *                 for the cursor
 *         **{group-name}** /**{group-name}**
 *                 Two highlight group names, the first is used when
 *                 no language mappings are used, the other when they
 *                 are. `language-mapping`
 *
 * Examples of parts:
 *    n-c-v:block-nCursor  in Normal, Command-line and Visual mode, use a
 *                         block cursor with colors from the "nCursor"
 *                         highlight group
 *    i-ci:ver30-iCursor-blinkwait300-blinkon200-blinkoff150
 *                         In Insert and Command-line Insert mode, use a
 *                         30% vertical bar cursor with colors from the
 *                         "iCursor" highlight group.  Blink a bit
 *                         faster.
 *
 * The 'a' mode is different.  It will set the given argument-list for
 * all modes.  It does not reset anything to defaults.  This can be used
 * to do a common setting for all modes.  For example, to switch off
 * blinking: "a:blinkon0"
 *
 * Examples of cursor highlighting:
 *
 *     :highlight Cursor gui=reverse guifg=NONE guibg=NONE
 *     :highlight Cursor gui=NONE guifg=bg guibg=fg
 *
 * (default "n-v-c:block-Cursor/lCursor,
 *  ve:ver35-Cursor,
 *  o:hor50-Cursor,
 *  i-ci:ver25-Cursor/lCursor,
 *  r-cr:hor20-Cursor/lCursor,
 *  sm:block-Cursor
 *  -blinkwait175-blinkoff150-blinkon175",
 *  for Win32 console:
 *  "n-v-c:block,o:hor50,i-ci:hor15,
 *  r-cr:hor30,sm:block")
 *
 * *only available when compiled with GUI enabled, and for Win32 console*
 */
export const guicursor: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "guicursor");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "guicursor", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guicursor");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "guicursor");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "guicursor", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guicursor");
  },
};

/**
 * This is a list of fonts which will be used for the GUI version of Vim.
 * In its simplest form the value is just one font name.
 * See `gui-font` for the details.
 *
 * (default "")
 *
 * *only available when compiled with GUI enabled*
 */
export const guifont: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "guifont");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "guifont", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guifont");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "guifont");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "guifont", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guifont");
  },
};

/**
 * When not empty, specifies a comma-separated list of fonts to be used
 * for double-width characters.  The first font that can be loaded is
 * used.  See `gui-fontwide`.
 *
 * (default "")
 *
 * *only available when compiled with GUI enabled*
 */
export const guifontwide: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "guifontwide");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "guifontwide", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guifontwide");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "guifontwide");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "guifontwide", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guifontwide");
  },
};

/**
 * This option only has an effect in the GUI version of Vim.  It is a
 * sequence of letters which describes what components and options of the
 * GUI should be used.
 * To avoid problems with flags that are added in the future, use the
 * "+=" and "-=" feature of ":set" `add-option-flags`.
 *
 * Valid characters are as follows:
 *
 *   '!'   External commands are executed in a terminal window.  Without
 *         this flag the MS-Windows GUI will open a console window to
 *         execute the command.  The Unix GUI will simulate a dumb
 *         terminal to list the command output.
 *         The terminal window will be positioned at the bottom, and grow
 *         upwards as needed.
 *
 *   'a'   Autoselect:  If present, then whenever VISUAL mode is started,
 *         or the Visual area extended, Vim tries to become the owner of
 *         the windowing system's global selection.  This means that the
 *         Visually highlighted text is available for pasting into other
 *         applications as well as into Vim itself.  When the Visual mode
 *         ends, possibly due to an operation on the text, or when an
 *         application wants to paste the selection, the highlighted text
 *         is automatically yanked into the "* selection register.
 *         Thus the selection is still available for pasting into other
 *         applications after the VISUAL mode has ended.
 *             If not present, then Vim won't become the owner of the
 *         windowing system's global selection unless explicitly told to
 *         by a yank or delete operation for the "* register.
 *         The same applies to the modeless selection.
 *
 *   'P'   Like autoselect but using the "+ register instead of the "*
 *         register.
 *
 *   'A'   Autoselect for the modeless selection.  Like 'a', but only
 *         applies to the modeless selection.
 *
 *             'guioptions'   autoselect Visual  autoselect modeless
 *                  ""              -                       -
 *                  "a"            yes                     yes
 *                  "A"             -                      yes
 *                  "aA"           yes                     yes
 *
 *         When using a terminal see the 'clipboard' option.
 *
 *   'c'   Use console dialogs instead of popup dialogs for simple
 *         choices.
 *
 *   'd'   Use dark theme variant if available. Currently only works for
 *         GTK+ GUI.
 *
 *   'e'   Add tab pages when indicated with 'showtabline'.
 *         'guitablabel' can be used to change the text in the labels.
 *         When 'e' is missing a non-GUI tab pages line may be used.
 *         The GUI tabs are only supported on some systems, currently
 *         GTK, Motif, Mac OS/X, Haiku, and MS-Windows.
 *
 *   'f'   Foreground: Don't use fork() to detach the GUI from the shell
 *         where it was started.  Use this for programs that wait for the
 *         editor to finish (e.g., an e-mail program).  Alternatively you
 *         can use "gvim -f" or ":gui -f" to start the GUI in the
 *         foreground.  `gui-fork`
 *         Note: Set this option in the vimrc file.  The forking may have
 *         happened already when the `gvimrc` file is read.
 *
 *   'i'   Use a Vim icon.  For GTK with KDE it is used in the left-upper
 *         corner of the window.  It's black&white on non-GTK, because of
 *         limitations of X11.  For a color icon, see `X11-icon`.
 *
 *   'm'   Menu bar is present.
 *
 *   'M'   The system menu "$VIMRUNTIME/menu.vim" is not sourced.  Note
 *         that this flag must be added in the .vimrc file, before
 *         switching on syntax or filetype recognition (when the `gvimrc`
 *         file is sourced the system menu has already been loaded; the
 *         `:syntax on` and `:filetype on` commands load the menu too).
 *
 *   'g'   Grey menu items: Make menu items that are not active grey.  If
 *         'g' is not included inactive menu items are not shown at all.
 *
 *   't'   Include tearoff menu items.  Currently only works for Win32,
 *         GTK+, and Motif 1.2 GUI.
 *
 *   'T'   Include Toolbar.  Currently only in Win32, GTK+, Motif and
 *         Photon GUIs.
 *
 *   'r'   Right-hand scrollbar is always present.
 *
 *   'R'   Right-hand scrollbar is present when there is a vertically
 *         split window.
 *
 *   'l'   Left-hand scrollbar is always present.
 *
 *   'L'   Left-hand scrollbar is present when there is a vertically
 *         split window.
 *
 *   'b'   Bottom (horizontal) scrollbar is present.  Its size depends on
 *         the longest visible line, or on the cursor line if the 'h'
 *         flag is included. `gui-horiz-scroll`
 *
 *   'h'   Limit horizontal scrollbar size to the length of the cursor
 *         line.  Reduces computations. `gui-horiz-scroll`
 *
 * And yes, you may even have scrollbars on the left AND the right if
 * you really want to :-).  See `gui-scrollbars` for more information.
 *
 *   'v'   Use a vertical button layout for dialogs.  When not included,
 *         a horizontal layout is preferred, but when it doesn't fit a
 *         vertical layout is used anyway.  Not supported in GTK 3.
 *
 *   'p'   Use Pointer callbacks for X11 GUI.  This is required for some
 *         window managers.  If the cursor is not blinking or hollow at
 *         the right moment, try adding this flag.  This must be done
 *         before starting the GUI.  Set it in your `gvimrc`.  Adding or
 *         removing it after the GUI has started has no effect.
 *
 *   'F'   Add a footer.  Only for Motif.  See `gui-footer`.
 *
 *   'k'   Keep the GUI window size when adding/removing a scrollbar, or
 *         toolbar, tabline, etc.  Instead, the behavior is similar to
 *         when the window is maximized and will adjust 'lines' and
 *         'columns' to fit to the window.  Without the 'k' flag Vim will
 *         try to keep 'lines' and 'columns' the same when adding and
 *         removing GUI components.
 *
 * (default "egmrLtT"   (MS-Windows,
 *  "t" is removed in `defaults.vim`),
 *  "aegimrLtT" (GTK and Motif),
 *  )
 *
 * *only available when compiled with GUI enabled*
 */
export const guioptions: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "guioptions");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "guioptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guioptions");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "guioptions");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "guioptions", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guioptions");
  },
};

/**
 * When non-empty describes the text to use in a label of the GUI tab
 * pages line.  When empty and when the result is empty Vim will use a
 * default label.  See `setting-guitablabel` for more info.
 *
 * The format of this option is like that of 'statusline'.
 * 'guitabtooltip' is used for the tooltip, see below.
 * The expression will be evaluated in the `sandbox` when set from a
 * modeline, see `sandbox-option`.
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 *
 * Only used when the GUI tab pages line is displayed.  'e' must be
 * present in 'guioptions'.  For the non-GUI tab pages line 'tabline' is
 * used.
 *
 * (default empty)
 *
 * *only available when compiled with GUI enabled*
 */
export const guitablabel: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "guitablabel");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "guitablabel", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guitablabel");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "guitablabel");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "guitablabel", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guitablabel");
  },
};

/**
 * When non-empty describes the text to use in a tooltip for the GUI tab
 * pages line.  When empty Vim will use a default tooltip.
 * This option is otherwise just like 'guitablabel' above.
 * You can include a line break.  Simplest method is to use `:let`:
 *
 *     :let &guitabtooltip = "line one\nline two"
 *
 * (default empty)
 *
 * *only available when compiled with GUI enabled*
 */
export const guitabtooltip: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "guitabtooltip");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "guitabtooltip", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guitabtooltip");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "guitabtooltip");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "guitabtooltip", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guitabtooltip");
  },
};

/**
 * Name of the main help file.  All distributed help files should be
 * placed together in one directory.  Additionally, all "doc" directories
 * in 'runtimepath' will be used.
 * Environment variables are expanded `:set_env`.  For example:
 * "$VIMRUNTIME/doc/help.txt".  If $VIMRUNTIME is not set, $VIM is also
 * tried.  Also see `$VIMRUNTIME` and `option-backslash` about including
 * spaces and backslashes.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default (MS-Windows) "$VIMRUNTIME\doc\help.txt"
 *  (others) "$VIMRUNTIME/doc/help.txt")
 */
export const helpfile: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "helpfile");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "helpfile", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "helpfile");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "helpfile");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "helpfile", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "helpfile");
  },
};

/**
 * Minimal initial height of the help window when it is opened with the
 * ":help" command.  The initial height of the help window is half of the
 * current window, or (when the 'ea' option is on) the same as other
 * windows.  When the height is less than 'helpheight', the height is
 * set to 'helpheight'.  Set to zero to disable.
 *
 * (default 20)
 */
export const helpheight: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "helpheight");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "helpheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "helpheight");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "helpheight");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "helpheight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "helpheight");
  },
};

/**
 * Comma-separated list of languages.  Vim will use the first language
 * for which the desired help can be found.  The English help will always
 * be used as a last resort.  You can add "en" to prefer English over
 * another language, but that will only find tags that exist in that
 * language and not in the English help.
 * Example:
 *
 *     :set helplang=de,it
 *
 * This will first search German, then Italian and finally English help
 * files.
 * When using `CTRL-]` and ":help!" in a non-English help file Vim will
 * try to find the tag in the current language before using this option.
 * See `help-translated`.
 *
 * (default: messages language or empty)
 *
 * *only available when compiled with the `+multi_lang` feature*
 */
export const helplang: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "helplang");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "helplang", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "helplang");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "helplang");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "helplang", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "helplang");
  },
};

/**
 * When off a buffer is unloaded when it is `abandon`ed.  When on a
 * buffer becomes hidden when it is `abandon`ed.  If the buffer is still
 * displayed in another window, it does not become hidden, of course.
 *
 * The commands that move through the buffer list sometimes make a buffer
 * hidden even if the 'hidden' option is off when these three are true:
 * - the buffer is modified
 * - 'autowrite' is off or writing is not possible
 * - the '!' flag was used
 * Also see `windows.txt`.
 *
 * To only make one buffer hidden use the 'bufhidden' option.
 * This option is set for one command with ":hide **{command}**" `:hide`.
 * WARNING: It's easy to forget that you have changes in hidden buffers.
 * Think twice when using ":q!" or ":qa!".
 *
 * (default off)
 */
export const hidden: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "hidden");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "hidden", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "hidden");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "hidden");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "hidden", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "hidden");
  },
};

/**
 * A history of ":" commands, and a history of previous search patterns
 * is remembered.  This option decides how many entries may be stored in
 * each of these histories (see `cmdline-editing`).
 * The maximum value is 10000.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (Vim default: 50, Vi default: 0,
 *  set to 200 in `defaults.vim`)
 */
export const history: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "history");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "history", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "history");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "history");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "history", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "history");
  },
};

/**
 * When on, the keyboard is mapped for the Hebrew character set.
 * Normally you would set 'allowrevins' and use CTRL-_ in insert mode to
 * toggle this option.  See `rileft.txt`.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *only available when compiled with the `+rightleft` feature*
 */
export const hkmap: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "hkmap");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "hkmap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "hkmap");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "hkmap");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "hkmap", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "hkmap");
  },
};

/**
 * When on, phonetic keyboard mapping is used.  'hkmap' must also be on.
 * This is useful if you have a non-Hebrew keyboard.
 * See `rileft.txt`.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *only available when compiled with the `+rightleft` feature*
 */
export const hkmapp: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "hkmapp");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "hkmapp", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "hkmapp");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "hkmapp");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "hkmapp", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "hkmapp");
  },
};

/**
 * When there is a previous search pattern, highlight all its matches.
 * The type of highlighting used can be set with the 'l' occasion in the
 * 'highlight' option.  This uses the "Search" highlight group by
 * default.  Note that only the matching text is highlighted, any offsets
 * are not applied.  If the "CurSearch" highlight group is set then the
 * current match is highlighted with that.
 * See also: 'incsearch' and `:match`.
 * When you get bored looking at the highlighted matches, you can turn it
 * off with `:nohlsearch`.  This does not change the option value, as
 * soon as you use a search command, the highlighting comes back.
 * 'redrawtime' specifies the maximum time spent on finding matches.
 * When the search pattern can match an end-of-line, Vim will try to
 * highlight all of the matched text.  However, this depends on where the
 * search starts.  This will be the first line in the window or the first
 * line below a closed fold.  A match in a previous line which is not
 * drawn may not continue in a newly drawn line.
 * You can specify whether the highlight status is restored on startup
 * with the 'h' flag in 'viminfo' `viminfo-h`.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *not available when compiled without the `+extra_search` feature*
 */
export const hlsearch: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "hlsearch");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "hlsearch", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "hlsearch");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "hlsearch");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "hlsearch", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "hlsearch");
  },
};

/**
 * When on, the icon text of the window will be set to the value of
 * 'iconstring' (if it is not empty), or to the name of the file
 * currently being edited.  Only the last part of the name is used.
 * Overridden by the 'iconstring' option.
 * Only works if the terminal supports setting window icons (currently
 * only X11 GUI and terminals with a non-empty 't_IS' option - these are
 * Unix xterm and iris-ansi by default, where 't_IS' is taken from the
 * builtin termcap).
 * When Vim was compiled with HAVE_X11 defined, the original icon will be
 * restored if possible `X11`.  See `X11-icon` for changing the icon on
 * X11.
 * For MS-Windows the icon can be changed, see `windows-icon`.
 *
 * (default off, on when title can be restored)
 */
export const icon: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "icon");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "icon", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "icon");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "icon");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "icon", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "icon");
  },
};

/**
 * When this option is not empty, it will be used for the icon text of
 * the window.  This happens only when the 'icon' option is on.
 * Only works if the terminal supports setting window icon text
 * (currently only X11 GUI and terminals with a non-empty 't_IS' option).
 * Does not work for MS-Windows.
 * When Vim was compiled with HAVE_X11 defined, the original icon will be
 * restored if possible `X11`.
 * When this option contains printf-style '%' items, they will be
 * expanded according to the rules used for 'statusline'.  See
 * 'titlestring' for example settings.
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 * *not available when compiled without the `+statusline` feature*
 *
 * (default "")
 */
export const iconstring: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "iconstring");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "iconstring", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "iconstring");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "iconstring");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "iconstring", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "iconstring");
  },
};

/**
 * Ignore case in search patterns.  Also used when searching in the tags
 * file.
 * Also see 'smartcase' and 'tagcase'.
 * Can be overruled by using "\c" or "\C" in the pattern, see
 * `/ignorecase`.
 *
 * (default off)
 */
export const ignorecase: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "ignorecase");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "ignorecase", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ignorecase");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "ignorecase");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "ignorecase", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ignorecase");
  },
};

/**
 * When set the Input Method is always on when starting to edit a command
 * line, unless entering a search pattern (see 'imsearch' for that).
 * Setting this option is useful when your input method allows entering
 * English characters directly, e.g., when it's used to type accented
 * characters with dead keys.
 *
 * (default off)
 */
export const imcmdline: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "imcmdline");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "imcmdline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "imcmdline");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "imcmdline");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "imcmdline", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "imcmdline");
  },
};

/**
 * When set the Input Method is never used.  This is useful to disable
 * the IM when it doesn't work properly.
 * Currently this option is on by default for SGI/IRIX machines.  This
 * may change in later releases.
 *
 * (default off, on for some systems (SGI))
 */
export const imdisable: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "imdisable");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "imdisable", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "imdisable");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "imdisable");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "imdisable", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "imdisable");
  },
};

/**
 * Specifies whether :lmap or an Input Method (IM) is to be used in
 * Insert mode.  Valid values:
 *         0       :lmap is off and IM is off
 *         1       :lmap is ON and IM is off
 *         2       :lmap is off and IM is ON
 * To always reset the option to zero when leaving Insert mode with `<Esc>`
 * this can be used:
 *
 *     :inoremap <ESC> <ESC>:set iminsert=0<CR>
 *
 * This makes :lmap and IM turn off automatically when leaving Insert
 * mode.
 * Note that this option changes when using CTRL-^ in Insert mode
 * `i_CTRL-^`.
 * The value is set to 1 when setting 'keymap' to a valid keymap name.
 * It is also used for the argument of commands like "r" and "f".
 * The value 0 may not work correctly with Motif with some XIM
 * methods.  Use 'imdisable' to disable XIM then.
 *
 * You can set 'imactivatefunc' and 'imstatusfunc' to handle IME/XIM
 * via external command if Vim is not compiled with the `+xim`,
 * `+multi_byte_ime` or `global-ime`.
 *
 * (default 0)
 */
export const iminsert: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "iminsert");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "iminsert", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "iminsert");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "iminsert");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "iminsert", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "iminsert");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&iminsert");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&iminsert", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&iminsert");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&iminsert", value);
  },
};

/**
 * Specifies whether :lmap or an Input Method (IM) is to be used when
 * entering a search pattern.  Valid values:
 *         -1      the value of 'iminsert' is used, makes it look like
 *                 'iminsert' is also used when typing a search pattern
 *         0       :lmap is off and IM is off
 *         1       :lmap is ON and IM is off
 *         2       :lmap is off and IM is ON
 * Note that this option changes when using CTRL-^ in Command-line mode
 * `c_CTRL-^`.
 * The value is set to 1 when it is not -1 and setting the 'keymap'
 * option to a valid keymap name.
 * The value 0 may not work correctly with Motif with some XIM
 * methods.  Use 'imdisable' to disable XIM then.
 *
 * (default -1)
 */
export const imsearch: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "imsearch");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "imsearch", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "imsearch");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "imsearch");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "imsearch", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "imsearch");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&imsearch");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&imsearch", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&imsearch");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&imsearch", value);
  },
};

/**
 * Pattern to be used to find an include command.  It is a search
 * pattern, just like for the "/" command (See `pattern`).  The default
 * value is for C programs.  This option is used for the commands "[i",
 * "]I", "[d", etc.
 * Normally the 'isfname' option is used to recognize the file name that
 * comes after the matched pattern.  But if "\zs" appears in the pattern
 * then the text matched from "\zs" to the end, or until "\ze" if it
 * appears, is used as the file name.  Use this to include characters
 * that are not in 'isfname', such as a space.  You can then use
 * 'includeexpr' to process the matched text.
 * See `option-backslash` about including spaces and backslashes.
 *
 * (default "^\s*#\s*include")
 *
 * *not available when compiled without the `+find_in_path` feature*
 */
export const include: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "include");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "include", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "include");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "include");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "include", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "include");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "include");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "include", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "include");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&include");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&include", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&include");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&include", value);
  },
};

/**
 * Expression to be used to transform the string found with the 'include'
 * option to a file name.  Mostly useful to change "." to "/" for Java:
 *
 *     :setlocal includeexpr=substitute(v:fname,'\\.','/','g')
 *
 * The "v:fname" variable will be set to the file name that was detected.
 * Note the double backslash: the `:set` command first halves them, then
 * one remains it the value, where "\." matches a dot literally.  For
 * simple character replacements `tr()` avoids the need for escaping:
 *
 *     :setlocal includeexpr=tr(v:fname,'.','/')
 *
 * Also used for the `gf` command if an unmodified file name can't be
 * found.  Allows doing "gf" on the name after an 'include' statement.
 * Also used for `<cfile>`.
 *
 * If the expression starts with s: or `<SID>`, then it is replaced with
 * the script ID (`local-function`). Example:
 *
 *     setlocal includeexpr=s:MyIncludeExpr()
 *     setlocal includeexpr=<SID>SomeIncludeExpr()
 *
 * Otherwise, the expression is evaluated in the context of the script
 * where the option was set, thus script-local items are available.
 *
 * It is more efficient if the value is just a function call without
 * arguments, see `expr-option-function`.
 *
 * The expression will be evaluated in the `sandbox` when set from a
 * modeline, see `sandbox-option`.
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 *
 * It is not allowed to change text or jump to another window while
 * evaluating 'includeexpr' `textlock`.
 *
 * (default "")
 *
 * *not available when compiled without the `+find_in_path` or `+eval` features*
 */
export const includeexpr: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "includeexpr");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "includeexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "includeexpr");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "includeexpr");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "includeexpr", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "includeexpr");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&includeexpr");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&includeexpr", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&includeexpr");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&includeexpr", value);
  },
};

/**
 * While typing a search command, show where the pattern, as it was typed
 * so far, matches.  The matched string is highlighted.  If the pattern
 * is invalid or not found, nothing is shown.  The screen will be updated
 * often, this is only useful on fast terminals.
 * Also applies to the pattern in commands:
 *
 *     :global
 *     :lvimgrep
 *     :lvimgrepadd
 *     :smagic
 *     :snomagic
 *     :sort
 *     :substitute
 *     :vglobal
 *     :vimgrep
 *     :vimgrepadd
 *
 * Note that the match will be shown, but the cursor will return to its
 * original position when no match is found and when pressing `<Esc>`.  You
 * still need to finish the search command with `<Enter>` to move the
 * cursor to the match.
 * You can use the CTRL-G and CTRL-T keys to move to the next and
 * previous match. `c_CTRL-G` `c_CTRL-T`
 * When compiled with the `+reltime` feature Vim only searches for about
 * half a second.  With a complicated pattern and/or a lot of text the
 * match may not be found.  This is to avoid that Vim hangs while you
 * are typing the pattern.
 * The highlighting can be set with the 'i' flag in 'highlight'.
 * When 'hlsearch' is on, all matched strings are highlighted too while
 * typing a search command. See also: 'hlsearch'.
 * If you don't want to turn 'hlsearch' on, but want to highlight all
 * matches while searching, you can turn on and off 'hlsearch' with
 * autocmd.  Example:
 *
 *     augroup vimrc-incsearch-highlight
 *       autocmd!
 *       autocmd CmdlineEnter /,\? :set hlsearch
 *       autocmd CmdlineLeave /,\? :set nohlsearch
 *     augroup END
 *
 * CTRL-L can be used to add one character from after the current match
 * to the command line.  If 'ignorecase' and 'smartcase' are set and the
 * command line has no uppercase characters, the added character is
 * converted to lowercase.
 * CTRL-R CTRL-W can be used to add the word at the end of the current
 * match, excluding the characters that were already typed.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off, set in `defaults.vim` if the
 *  `+reltime` feature is supported)
 *
 * *not available when compiled without the `+extra_search` features*
 */
export const incsearch: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "incsearch");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "incsearch", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "incsearch");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "incsearch");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "incsearch", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "incsearch");
  },
};

/**
 * Expression which is evaluated to obtain the proper indent for a line.
 * It is used when a new line is created, for the `=` operator and
 * in Insert mode as specified with the 'indentkeys' option.
 * When this option is not empty, it overrules the 'cindent' and
 * 'smartindent' indenting.  When 'lisp' is set, this option is
 * is only used when 'lispoptions' contains "expr:1".
 * When 'paste' is set this option is not used for indenting.
 * The expression is evaluated with `v:lnum` set to the line number for
 * which the indent is to be computed.  The cursor is also in this line
 * when the expression is evaluated (but it may be moved around).
 *
 * If the expression starts with s: or `<SID>`, then it is replaced with
 * the script ID (`local-function`). Example:
 *
 *     set indentexpr=s:MyIndentExpr()
 *     set indentexpr=<SID>SomeIndentExpr()
 *
 * Otherwise, the expression is evaluated in the context of the script
 * where the option was set, thus script-local items are available.
 *
 * The advantage of using a function call without arguments is that it is
 * faster, see `expr-option-function`.
 *
 * The expression must return the number of spaces worth of indent.  It
 * can return "-1" to keep the current indent (this means 'autoindent' is
 * used for the indent).
 * Functions useful for computing the indent are `indent()`, `cindent()`
 * and `lispindent()`.
 * The evaluation of the expression must not have side effects!  It must
 * not change the text, jump to another window, etc.  Afterwards the
 * cursor position is always restored, thus the cursor may be moved.
 * Normally this option would be set to call a function:
 *
 *     :set indentexpr=GetMyIndent()
 *
 * Error messages will be suppressed, unless the 'debug' option contains
 * "msg".
 * See `indent-expression`.
 * NOTE: This option is set to "" when 'compatible' is set.
 *
 * The expression will be evaluated in the `sandbox` when set from a
 * modeline, see `sandbox-option`.
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 *
 * It is not allowed to change text or jump to another window while
 * evaluating 'indentexpr' `textlock`.
 *
 * (default "")
 *
 * *not available when compiled without the `+eval` feature*
 */
export const indentexpr: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "indentexpr");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "indentexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "indentexpr");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "indentexpr");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "indentexpr", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "indentexpr");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&indentexpr");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&indentexpr", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&indentexpr");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&indentexpr", value);
  },
};

/**
 * A list of keys that, when typed in Insert mode, cause reindenting of
 * the current line.  Only happens if 'indentexpr' isn't empty.
 * The format is identical to 'cinkeys', see `indentkeys-format`.
 * See `C-indenting` and `indent-expression`.
 *
 * (default "0**{,0}**,0),0],:,0#,!^F,o,O,e")
 */
export const indentkeys: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "indentkeys");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "indentkeys", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "indentkeys");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "indentkeys");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "indentkeys", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "indentkeys");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&indentkeys");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&indentkeys", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&indentkeys");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&indentkeys", value);
  },
};

/**
 * When doing keyword completion in insert mode `ins-completion`, and
 * 'ignorecase' is also on, the case of the match is adjusted depending
 * on the typed text.  If the typed text contains a lowercase letter
 * where the match has an upper case letter, the completed part is made
 * lowercase.  If the typed text has no lowercase letters and the match
 * has a lowercase letter where the typed text has an uppercase letter,
 * and there is a letter before it, the completed part is made uppercase.
 * With 'noinfercase' the match is used as-is.
 *
 * (default off)
 */
export const infercase: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "infercase");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "infercase", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "infercase");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "infercase");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "infercase", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "infercase");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&infercase");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&infercase", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&infercase");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&infercase", value);
  },
};

/**
 * The characters specified by this option are included in file names and
 * path names.  Filenames are used for commands like "gf", "[i" and in
 * the tags file.  It is also used for "\f" in a `pattern`.
 * Multi-byte characters 256 and above are always included, only the
 * characters up to 255 are specified with this option.
 * For UTF-8 the characters 0xa0 to 0xff are included as well.
 * Think twice before adding white space to this option.  Although a
 * space may appear inside a file name, the effect will be that Vim
 * doesn't know where a file name starts or ends when doing completion.
 * It most likely works better without a space in 'isfname'.
 *
 * Note that on systems using a backslash as path separator, Vim tries to
 * do its best to make it work as you would expect.  That is a bit
 * tricky, since Vi originally used the backslash to escape special
 * characters.  Vim will not remove a backslash in front of a normal file
 * name character on these systems, but it will on Unix and alikes.  The
 * '&' and '^' are not included by default, because these are special for
 * cmd.exe.
 *
 * The format of this option is a list of parts, separated with commas.
 * Each part can be a single character number or a range.  A range is two
 * character numbers with '-' in between.  A character number can be a
 * decimal number between 0 and 255 or the ASCII character itself (does
 * not work for digits).  Example:
 *         "_,-,128-140,#-43"      (include '_' and '-' and the range
 *                                 128 to 140 and '#' to 43)
 * If a part starts with '^', the following character number or range
 * will be excluded from the option.  The option is interpreted from left
 * to right.  Put the excluded character after the range where it is
 * included.  To include '^' itself use it as the last character of the
 * option or the end of a range.  Example:
 *         "^a-z,#,^"      (exclude 'a' to 'z', include '#' and '^')
 * If the character is '@', all characters where isalpha() returns TRUE
 * are included.  Normally these are the characters a to z and A to Z,
 * plus accented characters.  To include '@' itself use "@-@".  Examples:
 *         "@,^a-z"        All alphabetic characters, excluding lower
 *                         case ASCII letters.
 *         "a-z,A-Z,@-@"   All letters plus the '@' character.
 * A comma can be included by using it where a character number is
 * expected.  Example:
 *         "48-57,,,_"     Digits, comma and underscore.
 * A comma can be excluded by prepending a '^'.  Example:
 *         `" -~,^,,9"`      All characters from space to `'~'`, excluding
 *                         comma, plus `<Tab>`.
 * See `option-backslash` about including spaces and backslashes.
 *
 * (default for Win32:
 *  `"@,48-57,/,\,.,-,_,+,,,#,$,%,{,},[,],:,@-@,!,~,="`
 *  for AMIGA: "@,48-57,/,.,-,_,+,,,$,:"
 *  for VMS: `"@,48-57,/,.,-,_,+,,,#,$,%,<,>,[,],:,;,~"`
 *  for OS/390: `"@,240-249,/,.,-,_,+,,,#,$,%,~,="`
 *  otherwise: `"@,48-57,/,.,-,_,+,,,#,$,%,~,="`)
 */
export const isfname: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "isfname");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "isfname", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "isfname");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "isfname");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "isfname", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "isfname");
  },
};

/**
 * The characters given by this option are included in identifiers.
 * Identifiers are used in recognizing environment variables and after a
 * match of the 'define' option.  It is also used for "\i" in a
 * `pattern`.  See 'isfname' for a description of the format of this
 * option.  For '@' only characters up to 255 are used.
 * Careful: If you change this option, it might break expanding
 * environment variables.  E.g., when '/' is included and Vim tries to
 * expand "$HOME/.viminfo".  Maybe you should change 'iskeyword' instead.
 *
 * (default for Win32:
 *  "@,48-57,_,128-167,224-235"
 *  otherwise: "@,48-57,_,192-255")
 */
export const isident: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "isident");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "isident", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "isident");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "isident");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "isident", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "isident");
  },
};

/**
 * Keywords are used in searching and recognizing with many commands:
 * "w", "*", "[i", etc.  It is also used for "\k" in a `pattern`.  See
 * 'isfname' for a description of the format of this option.  For '@'
 * characters above 255 check the "word" character class (any character
 * that is not white space or punctuation).
 * For C programs you could use "a-z,A-Z,48-57,_,.,-,>".
 * For a help file it is set to all non-blank printable characters except
 * '*', '"' and '|' (so that CTRL-] on a command finds the help for that
 * command).
 * When the 'lisp' option is on the '-' character is always included.
 * This option also influences syntax highlighting, unless the syntax
 * uses `:syn-iskeyword`.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (Vim default for Win32:
 *  "@,48-57,_,128-167,224-235"
 *  otherwise:  "@,48-57,_,192-255"
 *  Vi default: "@,48-57,_")
 */
export const iskeyword: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "iskeyword");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "iskeyword", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "iskeyword");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "iskeyword");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "iskeyword", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "iskeyword");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&iskeyword");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&iskeyword", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&iskeyword");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&iskeyword", value);
  },
};

/**
 * The characters given by this option are displayed directly on the
 * screen.  It is also used for "\p" in a `pattern`.  The characters from
 * space (ASCII 32) to `'~'` (ASCII 126) are always displayed directly,
 * even when they are not included in 'isprint' or excluded.  See
 * 'isfname' for a description of the format of this option.
 *
 * Non-printable characters are displayed with two characters:
 *           0 -  31       "^@" - "^_"
 *          32 - 126       always single characters
 *            127          "^?"
 *         128 - 159       `"~@"` - `"~_"`
 *         160 - 254       "| " - `"|~"`
 *            255          `"~?"`
 * When 'encoding' is a Unicode one, illegal bytes from 128 to 255 are
 * displayed as `<xx>`, with the hexadecimal value of the byte.
 * When 'display' contains "uhex" all unprintable characters are
 * displayed as `<xx>`.
 * The SpecialKey highlighting will be used for unprintable characters.
 * `hl-SpecialKey`
 *
 * Multi-byte characters 256 and above are always included, only the
 * characters up to 255 are specified with this option.  When a character
 * is printable but it is not available in the current font, a
 * replacement character will be shown.
 * Unprintable and zero-width Unicode characters are displayed as `<xxxx>`.
 * There is no option to specify these characters.
 *
 * (default for Win32 and macOS:
 *  `"@,~-255"`; otherwise: "@,161-255")
 */
export const isprint: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "isprint");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "isprint", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "isprint");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "isprint");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "isprint", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "isprint");
  },
};

/**
 * Insert two spaces after a '.', '?' and '!' with a join command.
 * When 'cpoptions' includes the 'j' flag, only do this after a '.'.
 * Otherwise only one space is inserted.
 * NOTE: This option is set when 'compatible' is set.
 *
 * (default on)
 */
export const joinspaces: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "joinspaces");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "joinspaces", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "joinspaces");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "joinspaces");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "joinspaces", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "joinspaces");
  },
};

/**
 * Name of a keyboard mapping.  See `mbyte-keymap`.
 * Setting this option to a valid keymap name has the side effect of
 * setting 'iminsert' to one, so that the keymap becomes effective.
 * 'imsearch' is also set to one, unless it was -1
 * Only normal file name characters can be used, `"/\*?[|<>"` are illegal.
 *
 * (default "")
 *
 * *only available when compiled with the `+keymap` feature*
 */
export const keymap: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "keymap");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "keymap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "keymap");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "keymap");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "keymap", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "keymap");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&keymap");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&keymap", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&keymap");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&keymap", value);
  },
};

/**
 * List of comma-separated words, which enable special things that keys
 * can do.  These values can be used:
 *    startsel     Using a shifted special key starts selection (either
 *                 Select mode or Visual mode, depending on "key" being
 *                 present in 'selectmode').
 *    stopsel      Using a not-shifted special key stops selection.
 * Special keys in this context are the cursor keys, `<End>`, `<Home>`,
 * `<PageUp>` and `<PageDown>`.
 * The 'keymodel' option is set by the `:behave` command.
 *
 * (default "")
 */
export const keymodel: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "keymodel");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "keymodel", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "keymodel");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "keymodel");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "keymodel", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "keymodel");
  },
};

/**
 * Program to use for the `K` command.  Environment variables are
 * expanded `:set_env`.  ":help" may be used to access the Vim internal
 * help.  (Note that previously setting the global option to the empty
 * value did this, which is now deprecated.)
 * When the first character is ":", the command is invoked as a Vim
 * Ex command with [count] added as an argument if it is not zero.
 * When "man", "man -s" or an Ex command is used, Vim will automatically
 * translate a count for the "K" command and pass it as the first
 * argument.  For "man -s" the "-s" is removed when there is no count.
 * See `option-backslash` about including spaces and backslashes.
 * Example:
 *
 *     :set keywordprg=man\ -s
 *
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "man" or "man -s",  DOS: ":help",
 *  VMS: "help")
 */
export const keywordprg: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "keywordprg");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "keywordprg", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "keywordprg");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "keywordprg");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "keywordprg", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "keywordprg");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "keywordprg");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "keywordprg", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "keywordprg");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&keywordprg");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&keywordprg", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&keywordprg");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&keywordprg", value);
  },
};

/**
 * This option allows switching your keyboard into a special language
 * mode.  When you are typing text in Insert mode the characters are
 * inserted directly.  When in Normal mode the 'langmap' option takes
 * care of translating these special characters to the original meaning
 * of the key.  This means you don't have to change the keyboard mode to
 * be able to execute Normal mode commands.
 * This is the opposite of the 'keymap' option, where characters are
 * mapped in Insert mode.
 * Also consider setting 'langremap' to off, to prevent 'langmap' from
 * applying to characters resulting from a mapping.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * Example (for Greek, in UTF-8):
 *
 *     :set langmap=ΑA,ΒB,ΨC,ΔD,ΕE,ΦF,ΓG,ΗH,ΙI,ΞJ,ΚK,ΛL,ΜM,ΝN,ΟO,ΠP,QQ,ΡR,ΣS,ΤT,ΘU,ΩV,WW,ΧX,ΥY,ΖZ,αa,βb,ψc,δd,εe,φf,γg,ηh,ιi,ξj,κk,λl,μm,νn,οo,πp,qq,ρr,σs,τt,θu,ωv,ςw,χx,υy,ζz
 *
 * Example (exchanges meaning of z and y for commands):
 *
 *     :set langmap=zy,yz,ZY,YZ
 *
 * The 'langmap' option is a list of parts, separated with commas.  Each
 * part can be in one of two forms:
 * 1.  A list of pairs.  Each pair is a "from" character immediately
 *     followed by the "to" character.  Examples: "aA", "aAbBcC".
 * 2.  A list of "from" characters, a semi-colon and a list of "to"
 *     characters.  Example: "abc;ABC"
 * Example: "aA,fgh;FGH,cCdDeE"
 * Special characters need to be preceded with a backslash.  These are
 * ";", ',', '"', '|' and backslash itself.
 *
 * This will allow you to activate vim actions without having to switch
 * back and forth between the languages.  Your language characters will
 * be understood as normal vim English characters (according to the
 * langmap mappings) in the following cases:
 *  o Normal/Visual mode (commands, buffer/register names, user mappings)
 *  o Insert/Replace Mode: Register names after CTRL-R
 *  o Insert/Replace Mode: Mappings
 * Characters entered in Command-line mode will NOT be affected by
 * this option.   Note that this option can be changed at any time
 * allowing to switch between mappings for different languages/encodings.
 * Use a mapping to avoid having to type it each time!
 *
 * (default "")
 *
 * *only available when compiled with the `+langmap` feature*
 */
export const langmap: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "langmap");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "langmap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "langmap");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "langmap");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "langmap", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "langmap");
  },
};

/**
 * Language to use for menu translation.  Tells which file is loaded
 * from the "lang" directory in 'runtimepath':
 *
 *     "lang/menu_" .. &langmenu .. ".vim"
 *
 * (without the spaces).  For example, to always use the Dutch menus, no
 * matter what $LANG is set to:
 *
 *     :set langmenu=nl_NL.ISO_8859-1
 *
 * When 'langmenu' is empty, `v:lang` is used.
 * Only normal file name characters can be used, `"/\*?[|<>"` are illegal.
 * If your $LANG is set to a non-English language but you do want to use
 * the English menus:
 *
 *     :set langmenu=none
 *
 * This option must be set before loading menus, switching on filetype
 * detection or syntax highlighting.  Once the menus are defined setting
 * this option has no effect.  But you could do this:
 *
 *     :source $VIMRUNTIME/delmenu.vim
 *     :set langmenu=de_DE.ISO_8859-1
 *     :source $VIMRUNTIME/menu.vim
 *
 * Warning: This deletes all menus that you defined yourself!
 *
 * (default "")
 *
 * *only available when compiled with the `+menu` and `+multi_lang` features*
 */
export const langmenu: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "langmenu");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "langmenu", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "langmenu");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "langmenu");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "langmenu", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "langmenu");
  },
};

/**
 * When off, setting 'langmap' does not apply to characters resulting from
 * a mapping.  This basically means, if you noticed that setting
 * 'langmap' disables some of your mappings, try resetting this option.
 * This option defaults to on for backwards compatibility.  Set it off if
 * that works for you to avoid mappings to break.
 *
 * (default on, set to off in `defaults.vim`)
 *
 * *only available when compiled with the `+langmap` feature*
 */
export const langremap: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "langremap");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "langremap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "langremap");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "langremap");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "langremap", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "langremap");
  },
};

/**
 * The value of this option influences when the last window will have a
 * status line:
 *         0: never
 *         1: only if there are at least two windows
 *         2: always
 * The screen looks nicer with a status line if you have several
 * windows, but it takes another screen line. `status-line`
 *
 * (default 1)
 */
export const laststatus: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "laststatus");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "laststatus", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "laststatus");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "laststatus");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "laststatus", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "laststatus");
  },
};

/**
 * When this option is set, the screen will not be redrawn while
 * executing macros, registers and other commands that have not been
 * typed.  Also, updating the window title is postponed.  To force an
 * update use `:redraw`.
 * This may occasionally cause display errors.  It is only meant to be set
 * temporarily when performing an operation where redrawing may cause
 * flickering or cause a slow down.
 *
 * (default off)
 */
export const lazyredraw: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "lazyredraw");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "lazyredraw", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "lazyredraw");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "lazyredraw");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "lazyredraw", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "lazyredraw");
  },
};

/**
 * If on, Vim will wrap long lines at a character in 'breakat' rather
 * than at the last character that fits on the screen.  Unlike
 * 'wrapmargin' and 'textwidth', this does not insert `<EOL>`s in the file,
 * it only affects the way the file is displayed, not its contents.
 * If 'breakindent' is set, line is visually indented. Then, the value
 * of 'showbreak' is used to put in front of wrapped lines. This option
 * is not used when the 'wrap' option is off.
 * Note that `<Tab>` characters after an `<EOL>` are mostly not displayed
 * with the right amount of white space.
 *
 * (default off)
 *
 * *not available when compiled without the `+linebreak` feature*
 */
export const linebreak: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "linebreak");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "linebreak", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "linebreak");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "linebreak");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "linebreak", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "linebreak");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&linebreak");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&linebreak", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&linebreak");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&linebreak", value);
  },
};

/**
 * Number of lines of the Vim window.
 * Normally you don't need to set this.  It is done automatically by the
 * terminal initialization code.  Also see `posix-screen-size`.
 * When Vim is running in the GUI or in a resizable window, setting this
 * option will cause the window size to be changed.  When you only want
 * to use the size for the GUI, put the command in your `gvimrc` file.
 * Vim limits the number of lines to what fits on the screen.  You can
 * use this command to get the tallest window possible:
 *
 *     :set lines=999
 *
 * Minimum value is 2, maximum value is 1000.
 * If you get fewer lines than expected, check the 'guiheadroom' option.
 * When you set this option and Vim is unable to change the physical
 * number of lines of the display, the display may be messed up.
 *
 * (default 24 or terminal height)
 */
export const lines: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "lines");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "lines", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "lines");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "lines");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "lines", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "lines");
  },
};

/**
 * Number of pixel lines inserted between characters.  Useful if the font
 * uses the full character cell height, making lines touch each other.
 * When non-zero there is room for underlining.
 * With some fonts there can be too much room between lines (to have
 * space for ascents and descents).  Then it makes sense to set
 * 'linespace' to a negative value.  This may cause display problems
 * though!
 *
 * (default 0, 1 for Win32 GUI)
 *
 * *only in the GUI*
 */
export const linespace: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "linespace");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "linespace", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "linespace");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "linespace");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "linespace", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "linespace");
  },
};

/**
 * Lisp mode: When `<Enter>` is typed in insert mode set the indent for
 * the next line to Lisp standards (well, sort of).  Also happens with
 * "cc" or "S".  'autoindent' must also be on for this to work.  The 'p'
 * flag in 'cpoptions' changes the method of indenting: Vi compatible or
 * better.  Also see 'lispwords'.
 * The '-' character is included in keyword characters.  Redefines the
 * "=" operator to use this same indentation algorithm rather than
 * calling an external program if 'equalprg' is empty.
 * This option is not used when 'paste' is set.
 *
 * (default off)
 */
export const lisp: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "lisp");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "lisp", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "lisp");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "lisp");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "lisp", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "lisp");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&lisp");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&lisp", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&lisp");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&lisp", value);
  },
};

/**
 * Comma-separated list of words that influence the Lisp indenting when
 * enabled with the `'lisp'` option.
 *
 * (default is very long)
 */
export const lispwords: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "lispwords");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "lispwords", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "lispwords");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "lispwords");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "lispwords", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "lispwords");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "lispwords");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "lispwords", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "lispwords");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&lispwords");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&lispwords", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&lispwords");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&lispwords", value);
  },
};

/**
 * List mode: By default show tabs as CTRL-I is displayed, display $
 * after end of line.  Useful to see the difference between tabs and
 * spaces and for trailing blanks.  Further changed by the 'listchars'
 * option.
 *
 * The cursor is displayed at the start of the space a Tab character
 * occupies, not at the end as usual in Normal mode.  To get this cursor
 * position while displaying Tabs with spaces, use:
 *
 *     :set list lcs=tab:\ \
 *
 * Note that list mode will also affect formatting (set with 'textwidth'
 * or 'wrapmargin') when 'cpoptions' includes 'L'.  See 'listchars' for
 * changing the way tabs are displayed.
 *
 * (default off)
 */
export const list: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "list");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "list", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "list");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "list");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "list", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "list");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&list");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&list", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&list");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&list", value);
  },
};

/**
 * Strings to use in 'list' mode and for the `:list` command.  It is a
 * comma-separated list of string settings.
 *
 *   eol:c         Character to show at the end of each line.  When
 *                 omitted, there is no extra character at the end of the
 *                 line.
 *
 *   tab:xy[z]     Two or three characters to be used to show a tab.
 *                 The third character is optional.
 *
 *   tab:xy        The 'x' is always used, then 'y' as many times as will
 *                 fit.  Thus "tab:>-" displays:
 *
 *                                           >-
 *                                           >--
 *                                           etc.
 *
 *                     tab:xyz       The 'z' is always used, then 'x' is prepended, and
 *                                   then 'y' is used as many times as will fit.  Thus
 *                                   "tab:<->" displays:
 *                                           >
 *                                           <>
 *                                           <->
 *                                           <-->
 *                                           etc.
 *
 *                                   When "tab:" is omitted, a tab is shown as ^I.
 *                                                                   *lcs-space*
 *                     space:c       Character to show for a space.  When omitted, spaces
 *                                   are left blank.
 *                                                                   *lcs-multispace*
 *                     multispace:c...
 *                                   One or more characters to use cyclically to show for
 *                                   multiple consecutive spaces.  Overrides the "space"
 *                                   setting, except for single spaces.  When omitted, the
 *                                   "space" setting is used.  For example,
 *                                   `:set listchars=multispace:---+` shows ten consecutive
 *                                   spaces as:
 *                                           ---+---+-- ~
 *                                                                   *lcs-lead*
 *                     lead:c        Character to show for leading spaces.  When omitted,
 *                                   leading spaces are blank.  Overrides the "space" and
 *                                   "multispace" settings for leading spaces.  You can
 *                                   combine it with "tab:", for example: >
 *                                           :set listchars+=tab:>-,lead:.
 *
 *   leadmultispace:c...
 *                 Like the `lcs-multispace` value, but for leading
 *                 spaces only.  Also overrides `lcs-lead` for leading
 *                 multiple spaces.
 *                 `:set listchars=leadmultispace:---+` shows ten
 *                 consecutive leading spaces as:
 *                         ---+---+--XXX
 *                 Where "XXX" denotes the first non-blank characters in
 *                 the line.
 *
 *   trail:c       Character to show for trailing spaces.  When omitted,
 *                 trailing spaces are blank.  Overrides the "space" and
 *                 "multispace" settings for trailing spaces.
 *
 *   extends:c     Character to show in the last column, when 'wrap' is
 *                 off and the line continues beyond the right of the
 *                 screen.
 *
 *   precedes:c    Character to show in the first visible column of the
 *                 physical line, when there is text preceding the
 *                 character visible in the first column.
 *
 *   conceal:c     Character to show in place of concealed text, when
 *                 'conceallevel' is set to 1.
 *
 *   nbsp:c        Character to show for a non-breakable space character
 *                 (0xA0 (160 decimal) and U+202F).  Left blank when
 *                 omitted.
 *
 * The characters ':' and ',' should not be used.  UTF-8 characters can
 * be used when 'encoding' is "utf-8", otherwise only printable
 * characters are allowed.  All characters must be single width.
 *
 * Each character can be specified as hex:
 *
 *     set listchars=eol:\\x24
 *     set listchars=eol:\\u21b5
 *     set listchars=eol:\\U000021b5
 *
 * Note that a double backslash is used.  The number of hex characters
 * must be exactly 2 for \\x, 4 for \\u and 8 for \\U.
 *
 * Examples:
 *
 *     :set lcs=tab:>-,trail:-
 *     :set lcs=tab:>-,eol:<,nbsp:%
 *     :set lcs=extends:>,precedes:<
 *
 * The "NonText" highlighting will be used for "eol", "extends" and
 * "precedes".  "SpecialKey" will be used for "tab", "nbsp", "space",
 * "multispace", "lead" and "trail".
 * `hl-NonText` `hl-SpecialKey`
 *
 * (default "eol:$")
 */
export const listchars: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "listchars");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "listchars", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "listchars");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "listchars");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "listchars", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "listchars");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "listchars");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "listchars", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "listchars");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&listchars");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&listchars", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&listchars");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&listchars", value);
  },
};

/**
 * When on the plugin scripts are loaded when starting up `load-plugins`.
 * This option can be reset in your `vimrc` file to disable the loading
 * of plugins.
 * Note that using the "-u NONE", "-u DEFAULTS" and "--noplugin" command
 * line arguments reset this option.  See `-u` and `--noplugin`.
 *
 * (default on)
 */
export const loadplugins: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "loadplugins");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "loadplugins", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "loadplugins");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "loadplugins");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "loadplugins", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "loadplugins");
  },
};

/**
 * Changes the special characters that can be used in search patterns.
 * See `pattern`.
 * WARNING: Switching this option off most likely breaks plugins!  That
 * is because many patterns assume it's on and will fail when it's off.
 * Only switch it off when working with old Vi scripts.  In any other
 * situation write patterns that work when 'magic' is on.  Include "\M"
 * when you want to `/\M`.
 * In `Vim9` script the value of 'magic' is ignored, patterns behave like
 * it is always set.
 *
 * (default on)
 */
export const magic: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "magic");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "magic", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "magic");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "magic");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "magic", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "magic");
  },
};

/**
 * Name of the errorfile for the `:make` command (see `:make_makeprg`)
 * and the `:grep` command.
 * When it is empty, an internally generated temp file will be used.
 * When "##" is included, it is replaced by a number to make the name
 * unique.  This makes sure that the ":make" command doesn't overwrite an
 * existing file.
 * NOT used for the ":cf" command.  See 'errorfile' for that.
 * Environment variables are expanded `:set_env`.
 * See `option-backslash` about including spaces and backslashes.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default: "")
 *
 * *not available when compiled without the `+quickfix` feature*
 */
export const makeef: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "makeef");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "makeef", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "makeef");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "makeef");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "makeef", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "makeef");
  },
};

/**
 * Encoding used for reading the output of external commands.  When empty,
 * encoding is not converted.
 * This is used for `:make`, `:lmake`, `:grep`, `:lgrep`, `:grepadd`,
 * `:lgrepadd`, `:cfile`, `:cgetfile`, `:caddfile`, `:lfile`, `:lgetfile`,
 * and `:laddfile`.
 *
 * This would be mostly useful when you use MS-Windows and set 'encoding'
 * to "utf-8".  If `+iconv` is enabled and GNU libiconv is used, setting
 * 'makeencoding' to "char" has the same effect as setting to the system
 * locale encoding.  Example:
 *
 *     :set encoding=utf-8
 *     :set makeencoding=char  " system locale is used
 *
 * (default "")
 */
export const makeencoding: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "makeencoding");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "makeencoding", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "makeencoding");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "makeencoding");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "makeencoding", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "makeencoding");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "makeencoding");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "makeencoding", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "makeencoding");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&makeencoding");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&makeencoding", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&makeencoding");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&makeencoding", value);
  },
};

/**
 * Program to use for the ":make" command.  See `:make_makeprg`.
 * This option may contain '%' and '#' characters (see  `:_%` and `:_#`),
 * which are expanded to the current and alternate file name.  Use `::S`
 * to escape file names in case they contain special characters.
 * Environment variables are expanded `:set_env`.  See `option-backslash`
 * about including spaces and backslashes.
 * Note that a '|' must be escaped twice: once for ":set" and once for
 * the interpretation of a command.  When you use a filter called
 * "myfilter" do it like this:
 *
 *     :set makeprg=gmake\ \\\|\ myfilter
 *
 * The placeholder "$*" can be given (even multiple times) to specify
 * where the arguments will be included, for example:
 *
 *     :set makeprg=latex\ \\\\nonstopmode\ \\\\input\\{$*}
 *
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "make", VMS: "MMS")
 */
export const makeprg: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "makeprg");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "makeprg", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "makeprg");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "makeprg");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "makeprg", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "makeprg");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "makeprg");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "makeprg", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "makeprg");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&makeprg");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&makeprg", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&makeprg");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&makeprg", value);
  },
};

/**
 * Characters that form pairs.  The `%` command jumps from one to the
 * other.
 * Only character pairs are allowed that are different, thus you cannot
 * jump between two double quotes.
 * The characters must be separated by a colon.
 * The pairs must be separated by a comma.  Example for including `'<'` and
 * '>' (for HTML):
 *
 *     :set mps+=<:>
 *
 * A more exotic example, to jump between the '=' and ';' in an
 * assignment, useful for languages like C and Java:
 *
 *     :au FileType c,cpp,java set mps+==:;
 *
 * For a more advanced way of using "%", see the matchit.vim plugin in
 * the $VIMRUNTIME/pack/dist/opt/matchit directory. `add-local-help`
 *
 * (default "(:),**{:}**,[:]")
 */
export const matchpairs: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "matchpairs");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "matchpairs", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "matchpairs");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "matchpairs");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "matchpairs", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "matchpairs");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&matchpairs");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&matchpairs", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&matchpairs");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&matchpairs", value);
  },
};

/**
 * Tenths of a second to show the matching paren, when 'showmatch' is
 * set.  Note that this is not in milliseconds, like other options that
 * set a time.  This is to be compatible with Nvi.
 *
 * (default 5)
 */
export const matchtime: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "matchtime");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "matchtime", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "matchtime");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "matchtime");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "matchtime", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "matchtime");
  },
};

/**
 * Maximum depth of function calls for user functions.  This normally
 * catches endless recursion.  When using a recursive function with
 * more depth, set 'maxfuncdepth' to a bigger number.  But this will use
 * more memory, there is the danger of failing when memory is exhausted.
 * Increasing this limit above 200 also changes the maximum for Ex
 * command recursion, see `E169`.
 * See also `:function`.
 *
 * (default 100)
 *
 * *not available when compiled without the `+eval` feature*
 */
export const maxfuncdepth: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "maxfuncdepth");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "maxfuncdepth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "maxfuncdepth");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "maxfuncdepth");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "maxfuncdepth", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "maxfuncdepth");
  },
};

/**
 * Maximum number of times a mapping is done without resulting in a
 * character to be used.  This normally catches endless mappings, like
 * ":map x y" with ":map y x".  It still does not catch ":map g wg",
 * because the 'w' is used before the next mapping is done.  See also
 * `key-mapping`.
 *
 * (default 1000)
 */
export const maxmapdepth: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "maxmapdepth");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "maxmapdepth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "maxmapdepth");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "maxmapdepth");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "maxmapdepth", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "maxmapdepth");
  },
};

/**
 * Maximum amount of memory (in Kbyte) to use for pattern matching.
 * The maximum value is about 2000000.  Use this to work without a limit.
 *
 * When Vim runs into the limit it gives an error message and mostly
 * behaves like CTRL-C was typed.
 * Running into the limit often means that the pattern is very
 * inefficient or too complex.  This may already happen with the pattern
 * "\(.\)*" on a very long line.  ".*" works much better.
 * Might also happen on redraw, when syntax rules try to match a complex
 * text structure.
 * Vim may run out of memory before hitting the 'maxmempattern' limit, in
 * which case you get an "Out of memory" error instead.
 *
 * (default 1000)
 */
export const maxmempattern: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "maxmempattern");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "maxmempattern", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "maxmempattern");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "maxmempattern");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "maxmempattern", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "maxmempattern");
  },
};

/**
 * Maximum number of items to use in a menu.  Used for menus that are
 * generated from a list of items, e.g., the Buffers menu.  Changing this
 * option has no direct effect, the menu must be refreshed first.
 *
 * (default 25)
 *
 * *not available when compiled without the `+menu` feature*
 */
export const menuitems: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "menuitems");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "menuitems", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "menuitems");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "menuitems");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "menuitems", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "menuitems");
  },
};

/**
 * Parameters for `:mkspell`.  This tunes when to start compressing the
 * word tree.  Compression can be slow when there are many words, but
 * it's needed to avoid running out of memory.  The amount of memory used
 * per word depends very much on how similar the words are, that's why
 * this tuning is complicated.
 *
 * There are three numbers, separated by commas:
 *         **{start}**,**{inc}**,**{added}**
 *
 * For most languages the uncompressed word tree fits in memory.  **{start}**
 * gives the amount of memory in Kbyte that can be used before any
 * compression is done.  It should be a bit smaller than the amount of
 * memory that is available to Vim.
 *
 * When going over the **{start}** limit the **{inc}** number specifies the
 * amount of memory in Kbyte that can be allocated before another
 * compression is done.  A low number means compression is done after
 * less words are added, which is slow.  A high number means more memory
 * will be allocated.
 *
 * After doing compression, **{added}** times 1024 words can be added before
 * the **{inc}** limit is ignored and compression is done when any extra
 * amount of memory is needed.  A low number means there is a smaller
 * chance of hitting the **{inc}** limit, less memory is used but it's
 * slower.
 *
 * The languages for which these numbers are important are Italian and
 * Hungarian.  The default works for when you have about 512 Mbyte.  If
 * you have 1 Gbyte you could use:
 *
 *     :set mkspellmem=900000,3000,800
 *
 * If you have less than 512 Mbyte `:mkspell` may fail for some
 * languages, no matter what you set 'mkspellmem' to.
 *
 * This option cannot be set from a `modeline` or in the `sandbox`.
 *
 * (default "460000,2000,500")
 *
 * *not available when compiled without the `+syntax` feature*
 */
export const mkspellmem: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "mkspellmem");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "mkspellmem", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mkspellmem");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "mkspellmem");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "mkspellmem", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mkspellmem");
  },
};

/**
 * If 'modeline' is on 'modelines' gives the number of lines that is
 * checked for set commands.  If 'modeline' is off or 'modelines' is zero
 * no lines are checked.  See `modeline`.
 *
 * (Vim default: on (off for root),
 *  Vi default: off)
 */
export const modeline: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "modeline");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "modeline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "modeline");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "modeline");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "modeline", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "modeline");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&modeline");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&modeline", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&modeline");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&modeline", value);
  },
};

/**
 * When on allow some options that are an expression to be set in the
 * modeline.  Check the option for whether it is affected by
 * 'modelineexpr'.  Also see `modeline`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default: off)
 */
export const modelineexpr: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "modelineexpr");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "modelineexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "modelineexpr");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "modelineexpr");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "modelineexpr", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "modelineexpr");
  },
};

/**
 * If 'modeline' is on 'modelines' gives the number of lines that is
 * checked for set commands.  If 'modeline' is off or 'modelines' is zero
 * no lines are checked.  See `modeline`.
 * NOTE: 'modeline' is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (default 5)
 */
export const modelines: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "modelines");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "modelines", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "modelines");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "modelines");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "modelines", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "modelines");
  },
};

/**
 * When off the buffer contents cannot be changed.  The 'fileformat' and
 * 'fileencoding' options also can't be changed.
 * Can be reset on startup with the `-M` command line argument.
 *
 * (default on)
 */
export const modifiable: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "modifiable");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "modifiable", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "modifiable");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "modifiable");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "modifiable", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "modifiable");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&modifiable");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&modifiable", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&modifiable");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&modifiable", value);
  },
};

/**
 * When on, the buffer is considered to be modified.  This option is set
 * when:
 * 1. A change was made to the text since it was last written.  Using the
 *    `undo` command to go back to the original text will reset the
 *    option.  But undoing changes that were made before writing the
 *    buffer will set the option again, since the text is different from
 *    when it was written.
 * 2. 'fileformat' or 'fileencoding' is different from its original
 *    value.  The original value is set when the buffer is read or
 *    written.  A ":set nomodified" command also resets the original
 *    values to the current values and the 'modified' option will be
 *    reset.
 *    Similarly for 'eol' and 'bomb'.
 * This option is not set when a change is made to the buffer as the
 * result of a BufNewFile, BufRead/BufReadPost, BufWritePost,
 * FileAppendPost or VimLeave autocommand event.  See `gzip-example` for
 * an explanation.
 * When 'buftype' is "nowrite" or "nofile" this option may be set, but
 * will be ignored.
 * Note that the text may actually be the same, e.g. 'modified' is set
 * when using "rA" on an "A".
 *
 * (default off)
 */
export const modified: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "modified");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "modified", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "modified");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "modified");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "modified", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "modified");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&modified");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&modified", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&modified");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&modified", value);
  },
};

/**
 * When on, listings pause when the whole screen is filled.  You will get
 * the `more-prompt`.  When this option is off there are no pauses, the
 * listing continues until finished.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (Vim default: on, Vi default: off)
 */
export const more: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "more");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "more", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "more");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "more");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "more", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "more");
  },
};

/**
 * Enable the use of the mouse.  Works for most terminals (xterm, Win32
 * `win32-mouse`, QNX pterm, *BSD console with sysmouse and Linux console
 * with gpm).  For using the mouse in the GUI, see `gui-mouse`.  The
 * mouse can be enabled for different modes:
 *         n       Normal mode and Terminal modes
 *         v       Visual mode
 *         i       Insert mode
 *         c       Command-line mode
 *         h       all previous modes when editing a help file
 *         a       all previous modes
 *         r       for `hit-enter` and `more-prompt` prompt
 * Normally you would enable the mouse in all five modes with:
 *
 *     :set mouse=a
 *
 * If your terminal can't overrule the mouse events going to the
 * application, use:
 *
 *     :set mouse=nvi
 *
 * Then you can press ":", select text for the system, and press Esc to go
 * back to Vim using the mouse events.
 * In `defaults.vim` "nvi" is used if the 'term' option is not matching
 * "xterm".
 *
 * When the mouse is not enabled, the GUI will still use the mouse for
 * modeless selection.  This doesn't move the text cursor.
 *
 * See `mouse-using`.  Also see `'clipboard'`.
 *
 * Note: When enabling the mouse in a terminal, copy/paste will use the
 * "* register if there is access to an X-server.  The xterm handling of
 * the mouse buttons can still be used by keeping the shift key pressed.
 * Also see the 'clipboard' option.
 *
 * (default "", "a" for GUI and Win32,
 *  set to "a" or "nvi" in `defaults.vim`)
 */
export const mouse: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "mouse");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "mouse", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mouse");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "mouse");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "mouse", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mouse");
  },
};

/**
 * The window that the mouse pointer is on is automatically activated.
 * When changing the window layout or window focus in another way, the
 * mouse pointer is moved to the window with keyboard focus.  Off is the
 * default because it makes using the pull down menus a little goofy, as
 * a pointer transit may activate a window unintentionally.
 * MS-Windows: Also see 'scrollfocus' for what window is scrolled when
 * using the mouse scroll wheel.
 *
 * (default off)
 *
 * *only works in the GUI*
 */
export const mousefocus: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "mousefocus");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "mousefocus", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mousefocus");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "mousefocus");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "mousefocus", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mousefocus");
  },
};

/**
 * When on, the mouse pointer is hidden when characters are typed.
 * The mouse pointer is restored when the mouse is moved.
 *
 * (default on)
 *
 * *only works in the GUI*
 */
export const mousehide: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "mousehide");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "mousehide", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mousehide");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "mousehide");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "mousehide", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mousehide");
  },
};

/**
 * Sets the model to use for the mouse.  The name mostly specifies what
 * the right mouse button is used for:
 *    extend       Right mouse button extends a selection.  This works
 *                 like in an xterm.
 *    popup        Right mouse button pops up a menu.  The shifted left
 *                 mouse button extends a selection.  This works like
 *                 with Microsoft Windows.
 *    popup_setpos Like "popup", but the cursor will be moved to the
 *                 position where the mouse was clicked, and thus the
 *                 selected operation will act upon the clicked object.
 *                 If clicking inside a selection, that selection will
 *                 be acted upon, i.e. no cursor move.  This implies of
 *                 course, that right clicking outside a selection will
 *                 end Visual mode.
 * Overview of what button does what for each model:
 * mouse               extend              popup(_setpos)
 * left click          place cursor        place cursor
 * left drag           start selection     start selection
 * shift-left          search word         extend selection
 * right click         extend selection    popup menu (place cursor)
 * right drag          extend selection    -
 * middle click        paste               paste
 *
 * In the "popup" model the right mouse button produces a pop-up menu.
 * You need to define this first, see `popup-menu`.
 *
 * Note that you can further refine the meaning of buttons with mappings.
 * See `gui-mouse-mapping`.  But mappings are NOT used for modeless
 * selection (because that's handled in the GUI code directly).
 *
 * The 'mousemodel' option is set by the `:behave` command.
 *
 * (default "extend", "popup" for Win32)
 */
export const mousemodel: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "mousemodel");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "mousemodel", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mousemodel");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "mousemodel");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "mousemodel", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mousemodel");
  },
};

/**
 * When on, mouse move events are delivered to the input queue and are
 * available for mapping. The default, off, avoids the mouse movement
 * overhead except when needed. See `gui-mouse-mapping`.
 * Warning: Setting this option can make pending mappings to be aborted
 * when the mouse is moved.
 * Currently only works in the GUI, may be made to work in a terminal
 * later.
 *
 * (default off)
 *
 * *only works in the GUI*
 */
export const mousemoveevent: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "mousemoveevent");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "mousemoveevent", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mousemoveevent");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "mousemoveevent");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "mousemoveevent", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mousemoveevent");
  },
};

/**
 * This option tells Vim what the mouse pointer should look like in
 * different modes.  The option is a comma-separated list of parts, much
 * like used for 'guicursor'.  Each part consist of a mode/location-list
 * and an argument-list:
 *         mode-list:shape,mode-list:shape,..
 * The mode-list is a dash separated list of these modes/locations:
 *                 In a normal window:
 *         n       Normal mode
 *         v       Visual mode
 *         ve      Visual mode with 'selection' "exclusive" (same as 'v',
 *                 if not specified)
 *         o       Operator-pending mode
 *         i       Insert mode
 *         r       Replace mode
 *
 *                 Others:
 *         c       appending to the command-line
 *         ci      inserting in the command-line
 *         cr      replacing in the command-line
 *         m       at the 'Hit ENTER' or 'More' prompts
 *         ml      idem, but cursor in the last line
 *         e       any mode, pointer below last window
 *         s       any mode, pointer on a status line
 *         sd      any mode, while dragging a status line
 *         vs      any mode, pointer on a vertical separator line
 *         vd      any mode, while dragging a vertical separator line
 *         a       everywhere
 *
 * The shape is one of the following:
 * avail   name            looks like
 * w x     arrow           Normal mouse pointer
 * w x     blank           no pointer at all (use with care!)
 * w x     beam            I-beam
 * w x     updown          up-down sizing arrows
 * w x     leftright       left-right sizing arrows
 * w x     busy            The system's usual busy pointer
 * w x     no              The system's usual 'no input' pointer
 *   x     udsizing        indicates up-down resizing
 *   x     lrsizing        indicates left-right resizing
 *   x     crosshair       like a big thin +
 *   x     hand1           black hand
 *   x     hand2           white hand
 *   x     pencil          what you write with
 *   x     question        big ?
 *   x     rightup-arrow   arrow pointing right-up
 * w x     up-arrow        arrow pointing up
 *   x     `<number>`        any X11 pointer number (see X11/cursorfont.h)
 *
 * The "avail" column contains a 'w' if the shape is available for Win32,
 * x for X11.
 * Any modes not specified or shapes not available use the normal mouse
 * pointer.
 *
 * Example:
 *
 *     :set mouseshape=s:udsizing,m:no
 *
 * will make the mouse turn to a sizing arrow over the status lines and
 * indicate no input when the hit-enter prompt is displayed (since
 * clicking the mouse has no effect in this state.)
 *
 * (default "i-r:beam,s:updown,sd:udsizing,
 *  vs:leftright,vd:lrsizing,m:no,
 *  ml:up-arrow,v:rightup-arrow")
 *
 * *only available when compiled with the `+mouseshape` feature*
 */
export const mouseshape: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "mouseshape");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "mouseshape", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mouseshape");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "mouseshape");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "mouseshape", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mouseshape");
  },
};

/**
 * Only for GUI, Win32 and Unix with xterm.  Defines the maximum
 * time in msec between two mouse clicks for the second click to be
 * recognized as a multi click.
 *
 * (default 500)
 */
export const mousetime: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "mousetime");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "mousetime", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mousetime");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "mousetime");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "mousetime", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mousetime");
  },
};

/**
 * This defines what bases Vim will consider for numbers when using the
 * CTRL-A and CTRL-X commands for adding to and subtracting from a number
 * respectively; see `CTRL-A` for more info on these commands.
 * alpha   If included, single alphabetical characters will be
 *         incremented or decremented.  This is useful for a list with a
 *         letter index a), b), etc.
 * octal   If included, numbers that start with a zero will be considered
 *         to be octal.  Example: Using CTRL-A on "007" results in "010".
 * hex     If included, numbers starting with "0x" or "0X" will be
 *         considered to be hexadecimal.  Example: Using CTRL-X on
 *         "0x100" results in "0x0ff".
 * bin     If included, numbers starting with "0b" or "0B" will be
 *         considered to be binary.  Example: Using CTRL-X on
 *         "0b1000" subtracts one, resulting in "0b0111".
 * unsigned    If included, numbers are recognized as unsigned. Thus a
 *         leading dash or negative sign won't be considered as part of
 *         the number.  Examples:
 *             Using CTRL-X on "2020" in "9-2020" results in "9-2019"
 *             (without "unsigned" it would become "9-2021").
 *             Using CTRL-A on "2020" in "9-2020" results in "9-2021"
 *             (without "unsigned" it would become "9-2019").
 *             Using CTRL-X on "0" or CTRL-A on "18446744073709551615"
 *             (2^64 - 1) has no effect, overflow is prevented.
 * Numbers which simply begin with a digit in the range 1-9 are always
 * considered decimal.  This also happens for numbers that are not
 * recognized as octal or hex.
 *
 * (default "bin,octal,hex",
 *  set to "bin,hex" in `defaults.vim`)
 */
export const nrformats: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "nrformats");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "nrformats", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "nrformats");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "nrformats");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "nrformats", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "nrformats");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&nrformats");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&nrformats", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&nrformats");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&nrformats", value);
  },
};

/**
 * Print the line number in front of each line.  When the 'n' option is
 * excluded from 'cpoptions' a wrapped line will not use the column of
 * line numbers (this is the default when 'compatible' isn't set).
 * The 'numberwidth' option can be used to set the room used for the line
 * number.
 * When a long, wrapped line doesn't start with the first character, '-'
 * characters are put before the number.
 * For highlighting see `hl-LineNr`, and `hl-CursorLineNr`, and the
 * `:sign-define` "numhl" argument.
 *
 * The 'relativenumber' option changes the displayed number to be
 * relative to the cursor.  Together with 'number' there are these
 * four combinations (cursor in line 3):
 *
 *         'nonu'          'nu'            'nonu'          'nu'
 *         'nornu'         'nornu'         'rnu'           'rnu'
 *
 *     |apple          |  1 apple      |  2 apple      |  2 apple
 *     |pear           |  2 pear       |  1 pear       |  1 pear
 *     |nobody         |  3 nobody     |  0 nobody     |3   nobody
 *     |there          |  4 there      |  1 there      |  1 there
 *
 * (default off)
 */
export const number: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "number");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "number", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "number");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "number");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "number", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "number");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&number");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&number", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&number");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&number", value);
  },
};

/**
 * Minimal number of columns to use for the line number.  Only relevant
 * when the 'number' or 'relativenumber' option is set or printing lines
 * with a line number. Since one space is always between the number and
 * the text, there is one less character for the number itself.
 * The value is the minimum width.  A bigger width is used when needed to
 * fit the highest line number in the buffer respectively the number of
 * rows in the window, depending on whether 'number' or 'relativenumber'
 * is set. Thus with the Vim default of 4 there is room for a line number
 * up to 999. When the buffer has 1000 lines five columns will be used.
 * The minimum value is 1, the maximum value is 20.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (Vim default: 4  Vi default: 8)
 *
 * *only available when compiled with the `+linebreak` feature*
 */
export const numberwidth: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "numberwidth");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "numberwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "numberwidth");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "numberwidth");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "numberwidth", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "numberwidth");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&numberwidth");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&numberwidth", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&numberwidth");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&numberwidth", value);
  },
};

/**
 * This option specifies a function to be used for Insert mode omni
 * completion with CTRL-X CTRL-O. `i_CTRL-X_CTRL-O`
 * See `complete-functions` for an explanation of how the function is
 * invoked and what it should return.  The value can be the name of a
 * function, a `lambda` or a `Funcref`. See `option-value-function` for
 * more information.
 * This option is usually set by a filetype plugin:
 * `:filetype-plugin-on`
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default: empty)
 *
 * *not available when compiled without the `+eval` feature*
 */
export const omnifunc: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "omnifunc");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "omnifunc", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "omnifunc");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "omnifunc");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "omnifunc", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "omnifunc");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&omnifunc");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&omnifunc", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&omnifunc");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&omnifunc", value);
  },
};

/**
 * *only for MS-Windows*
 *         Enable reading and writing from devices.  This may get Vim stuck on a
 *         device that can be opened but doesn't actually do the I/O.  Therefore
 *         it is off by default.
 *         Note that on MS-Windows editing "aux.h", "lpt1.txt" and the like also
 *         result in editing a device.
 *
 * (default off)
 */
export const opendevice: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "opendevice");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "opendevice", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "opendevice");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "opendevice");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "opendevice", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "opendevice");
  },
};

/**
 * This option specifies a function to be called by the `g@` operator.
 * See `:map-operator` for more info and an example.  The value can be
 * the name of a function, a `lambda` or a `Funcref`. See
 * `option-value-function` for more information.
 *
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default: empty)
 */
export const operatorfunc: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "operatorfunc");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "operatorfunc", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "operatorfunc");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "operatorfunc");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "operatorfunc", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "operatorfunc");
  },
};

/**
 * Directories used to find packages.  See `packages`.
 *
 * (default: see 'runtimepath')
 */
export const packpath: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "packpath");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "packpath", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "packpath");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "packpath");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "packpath", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "packpath");
  },
};

/**
 * Specifies the nroff macros that separate paragraphs.  These are pairs
 * of two letters (see `object-motions`).
 *
 * (default "IPLPPPQPP TPHPLIPpLpItpplpipbp")
 */
export const paragraphs: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "paragraphs");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "paragraphs", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "paragraphs");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "paragraphs");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "paragraphs", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "paragraphs");
  },
};

/**
 * Put Vim in Paste mode.  This is useful if you want to cut or copy
 * some text from one window and paste it in Vim.  This will avoid
 * unexpected effects.
 * Setting this option is useful when using Vim in a terminal, where Vim
 * cannot distinguish between typed text and pasted text.  In the GUI, Vim
 * knows about pasting and will mostly do the right thing without 'paste'
 * being set.  The same is true for a terminal where Vim handles the
 * mouse clicks itself.
 * This option is reset when starting the GUI.  Thus if you set it in
 * your .vimrc it will work in a terminal, but not in the GUI.  Setting
 * 'paste' in the GUI has side effects: e.g., the Paste toolbar button
 * will no longer work in Insert mode, because it uses a mapping.
 * When the 'paste' option is switched on (also when it was already on):
 *         - mapping in Insert mode and Command-line mode is disabled
 *         - abbreviations are disabled
 *         - 'autoindent' is reset
 *         - 'expandtab' is reset
 *         - 'hkmap' is reset
 *         - 'revins' is reset
 *         - 'ruler' is reset
 *         - 'showmatch' is reset
 *         - 'smarttab' is reset
 *         - 'softtabstop' is set to 0
 *         - 'textwidth' is set to 0
 *         - 'wrapmargin' is set to 0
 *         - 'varsofttabstop' is made empty
 * These options keep their value, but their effect is disabled:
 *         - 'cindent'
 *         - 'formatoptions' is used like it is empty
 *         - 'indentexpr'
 *         - 'lisp'
 *         - 'smartindent'
 * NOTE: When you start editing another file while the 'paste' option is
 * on, settings from the modelines or autocommands may change the
 * settings again, causing trouble when pasting text.  You might want to
 * set the 'paste' option again.
 * When the 'paste' option is reset the mentioned options are restored to
 * the value before the moment 'paste' was switched from off to on.
 * Resetting 'paste' before ever setting it does not have any effect.
 * Since mapping doesn't work while 'paste' is active, you need to use
 * the 'pastetoggle' option to toggle the 'paste' option with some key.
 *
 * (default off)
 */
export const paste: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "paste");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "paste", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "paste");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "paste");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "paste", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "paste");
  },
};

/**
 * When non-empty, specifies the key sequence that toggles the 'paste'
 * option.  This is like specifying a mapping:
 *
 *     :map {keys} :set invpaste<CR>
 *
 * Where **{keys}** is the value of 'pastetoggle'.
 * The difference is that it will work even when 'paste' is set.
 * 'pastetoggle' works in Insert mode and Normal mode, but not in
 * Command-line mode.
 * Mappings are checked first, thus overrule 'pastetoggle'.  However,
 * when 'paste' is on mappings are ignored in Insert mode, thus you can do
 * this:
 *
 *     :map <F10> :set paste<CR>
 *     :map <F11> :set nopaste<CR>
 *     :imap <F10> <C-O>:set paste<CR>
 *     :imap <F11> <nop>
 *     :set pastetoggle=<F11>
 *
 * This will make `<F10>` start paste mode and `<F11>` stop paste mode.
 * Note that typing `<F10>` in paste mode inserts `"<F10>"`, since in paste
 * mode everything is inserted literally, except the 'pastetoggle' key
 * sequence.
 * When the value has several bytes 'ttimeoutlen' applies.
 *
 * (default "")
 */
export const pastetoggle: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "pastetoggle");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "pastetoggle", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "pastetoggle");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "pastetoggle");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "pastetoggle", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "pastetoggle");
  },
};

/**
 * Expression which is evaluated to apply a patch to a file and generate
 * the resulting new version of the file.  See `diff-patchexpr`.
 *
 * (default "")
 *
 * *not available when compiled without the `+diff` feature*
 */
export const patchexpr: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "patchexpr");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "patchexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "patchexpr");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "patchexpr");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "patchexpr", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "patchexpr");
  },
};

/**
 * When non-empty the oldest version of a file is kept.  This can be used
 * to keep the original version of a file if you are changing files in a
 * source distribution.  Only the first time that a file is written a
 * copy of the original file will be kept.  The name of the copy is the
 * name of the original file with the string in the 'patchmode' option
 * appended.  This option should start with a dot.  Use a string like
 * ".orig" or ".org".  'backupdir' must not be empty for this to work
 * (Detail: The backup file is renamed to the patchmode file after the
 * new file has been successfully written, that's why it must be possible
 * to write a backup file).  If there was no file to be backed up, an
 * empty file is created.
 * When the 'backupskip' pattern matches, a patchmode file is not made.
 * Using 'patchmode' for compressed files appends the extension at the
 * end (e.g., "file.gz.orig"), thus the resulting name isn't always
 * recognized as a compressed file.
 * Only normal file name characters can be used, `"/\*?[|<>"` are illegal.
 *
 * (default "")
 */
export const patchmode: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "patchmode");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "patchmode", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "patchmode");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "patchmode");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "patchmode", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "patchmode");
  },
};

/**
 * This is a list of directories which will be searched when using the
 * `gf`, [f, ]f, ^Wf, `:find`, `:sfind`, `:tabfind` and other commands,
 * provided that the file being searched for has a relative path (not
 * starting with "/", "./" or "../").  The directories in the 'path'
 * option may be relative or absolute.
 * - Use commas to separate directory names:
 *
 *     :set path=.,/usr/local/include,/usr/include
 *
 * - Spaces can also be used to separate directory names (for backwards
 *   compatibility with version 3.0).  To have a space in a directory
 *   name, precede it with an extra backslash, and escape the space:
 *
 *       :set path=.,/dir/with\\\ space
 *
 * - To include a comma in a directory name precede it with an extra
 *   backslash:
 *
 *       :set path=.,/dir/with\\,comma
 *
 * - To search relative to the directory of the current file, use:
 *
 *       :set path=.
 *
 * - To search in the current directory use an empty string between two
 *   commas:
 *
 *       :set path=,,
 *
 * - A directory name may end in a ':' or '/'.
 * - Environment variables are expanded `:set_env`.
 * - When using `netrw.vim` URLs can be used.  For example, adding
 *   "http://www.vim.org" will make ":find index.html" work.
 * - Search upwards and downwards in a directory tree using "*", "**" and
 *   ";".  See `file-searching` for info and syntax.
 * - Careful with '\' characters, type two to get one in the option:
 *
 *     :set path=.,c:\\include
 *
 *   Or just use '/' instead:
 *
 *     :set path=.,c:/include
 *
 * Don't forget "." or files won't even be found in the same directory as
 * the file!
 * The maximum length is limited.  How much depends on the system, mostly
 * it is something like 256 or 1024 characters.
 * You can check if all the include files are found, using the value of
 * 'path', see `:checkpath`.
 * The use of `:set+=` and `:set-=` is preferred when adding or removing
 * directories from the list.  This avoids problems when a future version
 * uses another default.  To remove the current directory use:
 *
 *     :set path-=
 *
 * To add the current directory use:
 *
 *     :set path+=
 *
 * To use an environment variable, you probably need to replace the
 * separator.  Here is an example to append $INCL, in which directory
 * names are separated with a semi-colon:
 *
 *     :let &path = &path .. "," .. substitute($INCL, ';', ',', 'g')
 *
 * Replace the ';' with a ':' or whatever separator is used.  Note that
 * this doesn't work when $INCL contains a comma or white space.
 *
 * (default on Unix: ".,/usr/include,,"
 *  other systems: ".,,")
 */
export const path: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "path");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "path", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "path");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "path");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "path", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "path");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "path");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "path", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "path");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&path");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&path", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&path");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&path", value);
  },
};

/**
 * When changing the indent of the current line, preserve as much of the
 * indent structure as possible.  Normally the indent is replaced by a
 * series of tabs followed by spaces as required (unless `'expandtab'` is
 * enabled, in which case only spaces are used).  Enabling this option
 * means the indent will preserve as many existing characters as possible
 * for indenting, and only add additional tabs or spaces as required.
 * 'expandtab' does not apply to the preserved white space, a Tab remains
 * a Tab.
 * NOTE: When using ">>" multiple times the resulting indent is a mix of
 * tabs and spaces.  You might not like this.
 * NOTE: This option is reset when 'compatible' is set.
 * Also see 'copyindent'.
 * Use `:retab` to clean up white space.
 *
 * (default off)
 */
export const preserveindent: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "preserveindent");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "preserveindent", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "preserveindent");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "preserveindent");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "preserveindent", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "preserveindent");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&preserveindent");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&preserveindent", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&preserveindent");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&preserveindent", value);
  },
};

/**
 * Default height for a preview window.  Used for `:ptag` and associated
 * commands.  Used for `CTRL-W_}` when no count is given.  Not used when
 * 'previewpopup' is set.
 *
 * (default 12)
 *
 * *not available when compiled without the `+quickfix` feature*
 */
export const previewheight: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "previewheight");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "previewheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "previewheight");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "previewheight");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "previewheight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "previewheight");
  },
};

/**
 * Identifies the preview window.  Only one window can have this option
 * set.  It's normally not set directly, but by using one of the commands
 * `:ptag`, `:pedit`, etc.
 *
 * (default off)
 *
 * *not available when compiled without the `+quickfix` feature*
 */
export const previewwindow: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "previewwindow");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "previewwindow", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "previewwindow");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "previewwindow");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "previewwindow", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "previewwindow");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&previewwindow");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&previewwindow", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&previewwindow");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&previewwindow", value);
  },
};

/**
 * The name of the printer to be used for `:hardcopy`.
 * See `pdev-option`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default empty)
 *
 * *only available when compiled with the `+printer` feature*
 */
export const printdevice: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "printdevice");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printdevice", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printdevice");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "printdevice");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printdevice", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printdevice");
  },
};

/**
 * Sets the character encoding used when printing.
 * See `penc-option`.
 *
 * (default empty, except for some systems)
 *
 * *only available when compiled with the `+printer` and `+postscript` features*
 */
export const printencoding: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "printencoding");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printencoding", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printencoding");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "printencoding");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printencoding", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printencoding");
  },
};

/**
 * Expression used to print the PostScript produced with `:hardcopy`.
 * See `pexpr-option`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default: see below)
 *
 * *only available when compiled with the `+printer` and `+postscript` features*
 */
export const printexpr: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "printexpr");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printexpr");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "printexpr");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printexpr", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printexpr");
  },
};

/**
 * The name of the font that will be used for `:hardcopy`.
 * See `pfn-option`.
 *
 * (default "courier")
 *
 * *only available when compiled with the `+printer` feature*
 */
export const printfont: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "printfont");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printfont", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printfont");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "printfont");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printfont", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printfont");
  },
};

/**
 * The format of the header produced in `:hardcopy` output.
 * See `pheader-option`.
 *
 * (default `"%<%f%h%m%=Page %N"`)
 *
 * *only available when compiled with the `+printer` feature*
 */
export const printheader: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "printheader");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printheader", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printheader");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "printheader");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printheader", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printheader");
  },
};

/**
 * The CJK character set to be used for CJK output from `:hardcopy`.
 * See `pmbcs-option`.
 *
 * (default "")
 *
 * *only available when compiled with the `+printer` and `+postscript` features*
 */
export const printmbcharset: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "printmbcharset");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printmbcharset", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printmbcharset");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "printmbcharset");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printmbcharset", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printmbcharset");
  },
};

/**
 * List of font names to be used for CJK output from `:hardcopy`.
 * See `pmbfn-option`.
 *
 * (default "")
 *
 * *only available when compiled with the `+printer` and `+postscript` features*
 */
export const printmbfont: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "printmbfont");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printmbfont", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printmbfont");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "printmbfont");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printmbfont", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printmbfont");
  },
};

/**
 * List of items that control the format of the output of `:hardcopy`.
 * See `popt-option`.
 *
 * (default "")
 *
 * *only available when compiled with `+printer` feature*
 */
export const printoptions: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "printoptions");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printoptions");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "printoptions");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printoptions", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printoptions");
  },
};

/**
 * Determines the maximum number of items to show in the popup menu for
 * Insert mode completion.  When zero as much space as available is used.
 * `ins-completion-menu`.
 *
 * (default 0)
 */
export const pumheight: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "pumheight");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "pumheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "pumheight");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "pumheight");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "pumheight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "pumheight");
  },
};

/**
 * Determines the minimum width to use for the popup menu for Insert mode
 * completion.  `ins-completion-menu`.
 *
 * (default 15)
 */
export const pumwidth: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "pumwidth");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "pumwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "pumwidth");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "pumwidth");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "pumwidth", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "pumwidth");
  },
};

/**
 * Specifies the python version used for pyx* functions and commands
 * `python_x`.  The default value is as follows:
 *
 *         Compiled with                Default
 *         `+python` and `+python3`        0
 *         only `+python`                  2
 *         only `+python3`                 3
 *
 * Available values are 0, 2 and 3.
 * If 'pyxversion' is 0, it is set to 2 or 3 after the first execution of
 * any python2/3 commands or functions.  E.g. `:py` sets to 2, and `:py3`
 * sets to 3. `:pyx` sets it to 3 if Python 3 is available, otherwise sets
 * to 2 if Python 2 is available.
 * See also: `has-pythonx`
 *
 * If Vim is compiled with only `+python` or `+python3` setting
 * 'pyxversion' has no effect.  The pyx* functions and commands are
 * always the same as the compiled version.
 *
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default depends on the build)
 *
 * *only available when compiled with the `+python` or the `+python3` feature*
 */
export const pyxversion: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "pyxversion");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "pyxversion", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "pyxversion");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "pyxversion");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "pyxversion", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "pyxversion");
  },
};

/**
 * This option specifies a function to be used to get the text to display
 * in the quickfix and location list windows.  This can be used to
 * customize the information displayed in the quickfix or location window
 * for each entry in the corresponding quickfix or location list.  See
 * `quickfix-window-function` for an explanation of how to write the
 * function and an example.  The value can be the name of a function, a
 * `lambda` or a `Funcref`. See `option-value-function` for more
 * information.
 *
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "")
 *
 * *only available when compiled with the `+quickfix` feature*
 */
export const quickfixtextfunc: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "quickfixtextfunc");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "quickfixtextfunc", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "quickfixtextfunc");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "quickfixtextfunc");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "quickfixtextfunc", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "quickfixtextfunc");
  },
};

/**
 * The characters that are used to escape quotes in a string.  Used for
 * objects like a', a" and ``a` `` `a'`.
 * When one of the characters in this option is found inside a string,
 * the following character will be skipped.  The default value makes the
 * text "foo\"bar\\" considered to be one string.
 *
 * (default "\")
 */
export const quoteescape: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "quoteescape");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "quoteescape", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "quoteescape");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "quoteescape");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "quoteescape", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "quoteescape");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&quoteescape");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&quoteescape", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&quoteescape");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&quoteescape", value);
  },
};

/**
 * If on, writes fail unless you use a '!'.  Protects you from
 * accidentally overwriting a file.  Default on when Vim is started
 * in read-only mode ("vim -R") or when the executable is called "view".
 * When using ":w!" the 'readonly' option is reset for the current
 * buffer, unless the 'Z' flag is in 'cpoptions'.
 * When using the ":view" command the 'readonly' option is set for the
 * newly edited buffer.
 * See 'modifiable' for disallowing changes to the buffer.
 *
 * (default off)
 */
export const readonly: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "readonly");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "readonly", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "readonly");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "readonly");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "readonly", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "readonly");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&readonly");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&readonly", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&readonly");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&readonly", value);
  },
};

/**
 * The time in milliseconds for redrawing the display.  This applies to
 * searching for patterns for 'hlsearch', `:match` highlighting and syntax
 * highlighting.
 * When redrawing takes more than this many milliseconds no further
 * matches will be highlighted.
 * For syntax highlighting the time applies per window.  When over the
 * limit syntax highlighting is disabled until `CTRL-L` is used.
 * This is used to avoid that Vim hangs when using a very complicated
 * pattern.
 *
 * (default 2000)
 *
 * *only available when compiled with the `+reltime` feature*
 */
export const redrawtime: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "redrawtime");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "redrawtime", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "redrawtime");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "redrawtime");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "redrawtime", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "redrawtime");
  },
};

/**
 * This selects the default regexp engine. `two-engines`
 * The possible values are:
 *         0       automatic selection
 *         1       old engine
 *         2       NFA engine
 * Note that when using the NFA engine and the pattern contains something
 * that is not supported the pattern will not match.  This is only useful
 * for debugging the regexp engine.
 * Using automatic selection enables Vim to switch the engine, if the
 * default engine becomes too costly.  E.g., when the NFA engine uses too
 * many states.  This should prevent Vim from hanging on a combination of
 * a complex pattern with long text.
 *
 * (default 0)
 */
export const regexpengine: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "regexpengine");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "regexpengine", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "regexpengine");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "regexpengine");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "regexpengine", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "regexpengine");
  },
};

/**
 * Show the line number relative to the line with the cursor in front of
 * each line. Relative line numbers help you use the `count` you can
 * precede some vertical motion commands (e.g. j k + -) with, without
 * having to calculate it yourself. Especially useful in combination with
 * other commands (e.g. y d c < > gq gw =).
 * When the 'n' option is excluded from 'cpoptions' a wrapped
 * line will not use the column of line numbers (this is the default when
 * 'compatible' isn't set).
 * The 'numberwidth' option can be used to set the room used for the line
 * number.
 * When a long, wrapped line doesn't start with the first character, '-'
 * characters are put before the number.
 * See `hl-LineNr`  and `hl-CursorLineNr` for the highlighting used for
 * the number.
 *
 * The number in front of the cursor line also depends on the value of
 * 'number', see `number_relativenumber` for all combinations of the two
 * options.
 *
 * (default off)
 */
export const relativenumber: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "relativenumber");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "relativenumber", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "relativenumber");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "relativenumber");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "relativenumber", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "relativenumber");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&relativenumber");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&relativenumber", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&relativenumber");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&relativenumber", value);
  },
};

/**
 * Threshold for reporting number of lines changed.  When the number of
 * changed lines is more than 'report' a message will be given for most
 * ":" commands.  If you want it always, set 'report' to 0.
 * For the ":substitute" command the number of substitutions is used
 * instead of the number of lines.
 *
 * (default 2)
 */
export const report: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "report");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "report", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "report");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "report");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "report", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "report");
  },
};

/**
 * Inserting characters in Insert mode will work backwards.  See "typing
 * backwards" `ins-reverse`.  This option can be toggled with the CTRL-_
 * command in Insert mode, when 'allowrevins' is set.
 * NOTE: This option is reset when 'compatible' is set.
 * This option is reset when 'paste' is set and restored when 'paste' is
 * reset.
 *
 * (default off)
 *
 * *only available when compiled with the `+rightleft` feature*
 */
export const revins: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "revins");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "revins", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "revins");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "revins");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "revins", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "revins");
  },
};

/**
 * When on, display orientation becomes right-to-left, i.e., characters
 * that are stored in the file appear from the right to the left.
 * Using this option, it is possible to edit files for languages that
 * are written from the right to the left such as Hebrew and Arabic.
 * This option is per window, so it is possible to edit mixed files
 * simultaneously, or to view the same file in both ways (this is
 * useful whenever you have a mixed text file with both right-to-left
 * and left-to-right strings so that both sets are displayed properly
 * in different windows).  Also see `rileft.txt`.
 *
 * (default off)
 *
 * *only available when compiled with the `+rightleft` feature*
 */
export const rightleft: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "rightleft");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "rightleft", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "rightleft");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "rightleft");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "rightleft", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "rightleft");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&rightleft");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&rightleft", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&rightleft");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&rightleft", value);
  },
};

/**
 * Each word in this option enables the command line editing to work in
 * right-to-left mode for a group of commands:
 *
 *         search          "/" and "?" commands
 *
 * This is useful for languages such as Hebrew, Arabic and Farsi.
 * The 'rightleft' option must be set for 'rightleftcmd' to take effect.
 *
 * (default "search")
 *
 * *only available when compiled with the `+rightleft` feature*
 */
export const rightleftcmd: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "rightleftcmd");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "rightleftcmd", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "rightleftcmd");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "rightleftcmd");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "rightleftcmd", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "rightleftcmd");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&rightleftcmd");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&rightleftcmd", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&rightleftcmd");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&rightleftcmd", value);
  },
};

/**
 * Show the line and column number of the cursor position, separated by a
 * comma.  When there is room, the relative position of the displayed
 * text in the file is shown on the far right:
 *         Top     first line is visible
 *         Bot     last line is visible
 *         All     first and last line are visible
 *         45%     relative position in the file
 * If 'rulerformat' is set, it will determine the contents of the ruler.
 * Each window has its own ruler.  If a window has a status line, the
 * ruler is shown there.  Otherwise it is shown in the last line of the
 * screen.  If the statusline is given by 'statusline' (i.e. not empty),
 * this option takes precedence over 'ruler' and 'rulerformat'.
 * If the number of characters displayed is different from the number of
 * bytes in the text (e.g., for a TAB or a multibyte character), both
 * the text column (byte number) and the screen column are shown,
 * separated with a dash.
 * For an empty line "0-1" is shown.
 * For an empty buffer the line number will also be zero: "0,0-1".
 * This option is reset when 'paste' is set and restored when 'paste' is
 * reset.
 * If you don't want to see the ruler all the time but want to know where
 * you are, use "g CTRL-G" `g_CTRL-G`.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off, set in `defaults.vim`)
 */
export const ruler: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "ruler");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "ruler", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ruler");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "ruler");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "ruler", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ruler");
  },
};

/**
 * When this option is not empty, it determines the content of the ruler
 * string, as displayed for the 'ruler' option.
 * The format of this option is like that of 'statusline'.
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 *
 * The default ruler width is 17 characters.  To make the ruler 15
 * characters wide, put "%15(" at the start and "%)" at the end.
 * Example:
 *
 *     :set rulerformat=%15(%c%V\ %p%%%)
 *
 * (default empty)
 *
 * *not available when compiled without the `+statusline` feature*
 */
export const rulerformat: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "rulerformat");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "rulerformat", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "rulerformat");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "rulerformat");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "rulerformat", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "rulerformat");
  },
};

/**
 * This is a list of directories which will be searched for runtime
 * files:
 *   filetype.vim  filetypes by file name `new-filetype`
 *   scripts.vim   filetypes by file contents `new-filetype-scripts`
 *   autoload/     automatically loaded scripts `autoload-functions`
 *   colors/       color scheme files `:colorscheme`
 *   compiler/     compiler files `:compiler`
 *   doc/          documentation `write-local-help`
 *   ftplugin/     filetype plugins `write-filetype-plugin`
 *   import/       files that are found by `:import`
 *   indent/       indent scripts `indent-expression`
 *   keymap/       key mapping files `mbyte-keymap`
 *   lang/         menu translations `:menutrans`
 *   menu.vim      GUI menus `menu.vim`
 *   pack/         packages `:packadd`
 *   plugin/       plugin scripts `write-plugin`
 *   print/        files for printing `postscript-print-encoding`
 *   spell/        spell checking files `spell`
 *   syntax/       syntax files `mysyntaxfile`
 *   tutor/        files for vimtutor `tutor`
 *
 * And any other file searched for with the `:runtime` command.
 *
 * The defaults for most systems are setup to search five locations:
 * 1. In your home directory, for your personal preferences.
 * 2. In a system-wide Vim directory, for preferences from the system
 *    administrator.
 * 3. In $VIMRUNTIME, for files distributed with Vim.
 *
 * 4. In the "after" directory in the system-wide Vim directory.  This is
 *    for the system administrator to overrule or add to the distributed
 *    defaults (rarely needed)
 * 5. In the "after" directory in your home directory.  This is for
 *    personal preferences to overrule or add to the distributed defaults
 *    or system-wide settings (rarely needed).
 *
 * More entries are added when using `packages`.  If it gets very long
 * then `:set rtp` will be truncated, use `:echo &rtp` to see the full
 * string.
 *
 * Note that, unlike 'path', no wildcards like "**" are allowed.  Normal
 * wildcards are allowed, but can significantly slow down searching for
 * runtime files.  For speed, use as few items as possible and avoid
 * wildcards.
 * See `:runtime`.
 * Example:
 *
 *     :set runtimepath=~/vimruntime,/mygroup/vim,$VIMRUNTIME
 *
 * This will use the directory `"~/vimruntime"` first (containing your
 * personal Vim runtime files), then "/mygroup/vim" (shared between a
 * group of people) and finally "$VIMRUNTIME" (the distributed runtime
 * files).
 * You probably should always include $VIMRUNTIME somewhere, to use the
 * distributed runtime files.  You can put a directory before $VIMRUNTIME
 * to find files which replace a distributed runtime files.  You can put
 * a directory after $VIMRUNTIME to find files which add to distributed
 * runtime files.
 * When Vim is started with `--clean` the home directory entries are not
 * included.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default:
 *  Unix:  "$HOME/.vim,
 *  $VIM/vimfiles,
 *  $VIMRUNTIME,
 *  $VIM/vimfiles/after,
 *  $HOME/.vim/after"
 *  Amiga: "home:vimfiles,
 *  $VIM/vimfiles,
 *  $VIMRUNTIME,
 *  $VIM/vimfiles/after,
 *  home:vimfiles/after"
 *  MS-Windows: "$HOME/vimfiles,
 *  $VIM/vimfiles,
 *  $VIMRUNTIME,
 *  $VIM/vimfiles/after,
 *  $HOME/vimfiles/after"
 *  macOS: "$VIM:vimfiles,
 *  $VIMRUNTIME,
 *  $VIM:vimfiles:after"
 *  Haiku: "$BE_USER_SETTINGS/vim,
 *  $VIM/vimfiles,
 *  $VIMRUNTIME,
 *  $VIM/vimfiles/after,
 *  $BE_USER_SETTINGS/vim/after"
 *  VMS:   "sys$login:vimfiles,
 *  $VIM/vimfiles,
 *  $VIMRUNTIME,
 *  $VIM/vimfiles/after,
 *  sys$login:vimfiles/after")
 */
export const runtimepath: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "runtimepath");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "runtimepath", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "runtimepath");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "runtimepath");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "runtimepath", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "runtimepath");
  },
};

/**
 * Number of lines to scroll with CTRL-U and CTRL-D commands.  Will be
 * set to half the number of lines in the window when the window size
 * changes.  This may happen when enabling the `status-line` or
 * 'tabline' option after setting the 'scroll' option.
 * If you give a count to the CTRL-U or CTRL-D command it will
 * be used as the new value for 'scroll'.  Reset to half the window
 * height with ":set scroll=0".
 *
 * (default: half the window height)
 */
export const scroll: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "scroll");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "scroll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "scroll");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "scroll");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "scroll", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "scroll");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&scroll");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&scroll", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&scroll");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&scroll", value);
  },
};

/**
 * See also `scroll-binding`.  When this option is set, the current
 * window scrolls as other scrollbind windows (windows that also have
 * this option set) scroll.  This option is useful for viewing the
 * differences between two versions of a file, see 'diff'.
 * See `'scrollopt'` for options that determine how this option should be
 * interpreted.
 * This option is mostly reset when splitting a window to edit another
 * file.  This means that ":split | edit file" results in two windows
 * with scroll-binding, but ":split file" does not.
 *
 * (default off)
 */
export const scrollbind: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "scrollbind");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "scrollbind", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "scrollbind");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "scrollbind");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "scrollbind", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "scrollbind");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&scrollbind");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&scrollbind", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&scrollbind");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&scrollbind", value);
  },
};

/**
 * Minimal number of lines to scroll when the cursor gets off the
 * screen (e.g., with "j").  Not used for scroll commands (e.g., CTRL-E,
 * CTRL-D).  Useful if your terminal scrolls very slowly.
 * When set to a negative number from -1 to -100 this is used as the
 * percentage of the window height.  Thus -50 scrolls half the window
 * height.
 * NOTE: This option is set to 1 when 'compatible' is set.
 *
 * (default 1)
 */
export const scrolljump: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "scrolljump");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "scrolljump", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "scrolljump");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "scrolljump");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "scrolljump", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "scrolljump");
  },
};

/**
 * Minimal number of screen lines to keep above and below the cursor.
 * This will make some context visible around where you are working.  If
 * you set it to a very large value (999) the cursor line will always be
 * in the middle of the window (except at the start or end of the file or
 * when long lines wrap).
 * After using the local value, go back the global value with one of
 * these two:
 *
 *     setlocal scrolloff<
 *     setlocal scrolloff=-1
 *
 * For scrolling horizontally see 'sidescrolloff'.
 * NOTE: This option is set to 0 when 'compatible' is set.
 *
 * (default 0, set to 5 in `defaults.vim`)
 */
export const scrolloff: GlobalOrLocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "scrolloff");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "scrolloff", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "scrolloff");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "scrolloff");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "scrolloff", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "scrolloff");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "scrolloff");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "scrolloff", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "scrolloff");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&scrolloff");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&scrolloff", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&scrolloff");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&scrolloff", value);
  },
};

/**
 * This is a comma-separated list of words that specifies how
 * 'scrollbind' windows should behave.  'sbo' stands for ScrollBind
 * Options.
 * The following words are available:
 *     ver         Bind vertical scrolling for 'scrollbind' windows
 *     hor         Bind horizontal scrolling for 'scrollbind' windows
 *     jump        Applies to the offset between two windows for vertical
 *                 scrolling.  This offset is the difference in the first
 *                 displayed line of the bound windows.  When moving
 *                 around in a window, another 'scrollbind' window may
 *                 reach a position before the start or after the end of
 *                 the buffer.  The offset is not changed though, when
 *                 moving back the 'scrollbind' window will try to scroll
 *                 to the desired position when possible.
 *                 When now making that window the current one, two
 *                 things can be done with the relative offset:
 *                 1. When "jump" is not included, the relative offset is
 *                    adjusted for the scroll position in the new current
 *                    window.  When going back to the other window, the
 *                    new relative offset will be used.
 *                 2. When "jump" is included, the other windows are
 *                    scrolled to keep the same relative offset.  When
 *                    going back to the other window, it still uses the
 *                    same relative offset.
 * Also see `scroll-binding`.
 * When 'diff' mode is active there always is vertical scroll binding,
 * even when "ver" isn't there.
 *
 * (default "ver,jump")
 */
export const scrollopt: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "scrollopt");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "scrollopt", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "scrollopt");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "scrollopt");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "scrollopt", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "scrollopt");
  },
};

/**
 * Specifies the nroff macros that separate sections.  These are pairs of
 * two letters (See `object-motions`).  The default makes a section start
 * at the nroff macros ".SH", ".NH", ".H", ".HU", ".nh" and ".sh".
 *
 * (default "SHNHH HUnhsh")
 */
export const sections: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "sections");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "sections", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "sections");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "sections");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "sections", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "sections");
  },
};

/**
 * When on, ":autocmd", shell and write commands are not allowed in
 * ".vimrc" and ".exrc" in the current directory and map commands are
 * displayed.  Switch it off only if you know that you will not run into
 * problems, or when the 'exrc' option is off.  On Unix this option is
 * only used if the ".vimrc" or ".exrc" is not owned by you.  This can be
 * dangerous if the systems allows users to do a "chown".  You better set
 * 'secure' at the end of your `~/.vimrc` then.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default off)
 */
export const secure: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "secure");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "secure", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "secure");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "secure");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "secure", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "secure");
  },
};

/**
 * This option defines the behavior of the selection.  It is only used
 * in Visual and Select mode.
 * Possible values:
 *    value        past line     inclusive
 *    old             no           yes
 *    inclusive       yes          yes
 *    exclusive       yes          no
 * "past line" means that the cursor is allowed to be positioned one
 * character past the line.
 * "inclusive" means that the last character of the selection is included
 * in an operation.  For example, when "x" is used to delete the
 * selection.
 * When "old" is used and 'virtualedit' allows the cursor to move past
 * the end of line the line break still isn't included.
 * Note that when "exclusive" is used and selecting from the end
 * backwards, you cannot include the last character of a line, when
 * starting in Normal mode and 'virtualedit' empty.
 *
 * The 'selection' option is set by the `:behave` command.
 *
 * (default "inclusive")
 */
export const selection: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "selection");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "selection", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "selection");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "selection");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "selection", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "selection");
  },
};

/**
 * This is a comma-separated list of words, which specifies when to start
 * Select mode instead of Visual mode, when a selection is started.
 * Possible values:
 *    mouse        when using the mouse
 *    key          when using shifted special keys
 *    cmd          when using "v", "V" or CTRL-V
 * See `Select-mode`.
 * The 'selectmode' option is set by the `:behave` command.
 *
 * (default "")
 */
export const selectmode: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "selectmode");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "selectmode", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "selectmode");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "selectmode");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "selectmode", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "selectmode");
  },
};

/**
 * Changes the effect of the `:mksession` command.  It is a comma
 * separated list of words.  Each word enables saving and restoring
 * something:
 *    word         save and restore
 *    blank        empty windows
 *    buffers      hidden and unloaded buffers, not just those in windows
 *    curdir       the current directory
 *    folds        manually created folds, opened/closed folds and local
 *                 fold options
 *    globals      global variables that start with an uppercase letter
 *                 and contain at least one lowercase letter.  Only
 *                 String and Number types are stored.
 *    help         the help window
 *    localoptions options and mappings local to a window or buffer (not
 *                 global values for local options)
 *    options      all options and mappings (also global values for local
 *                 options)
 *    skiprtp      exclude 'runtimepath' and 'packpath' from the options
 *    resize       size of the Vim window: 'lines' and 'columns'
 *    sesdir       the directory in which the session file is located
 *                 will become the current directory (useful with
 *                 projects accessed over a network from different
 *                 systems)
 *    slash        backslashes in file names replaced with forward
 *                 slashes
 *    tabpages     all tab pages; without this only the current tab page
 *                 is restored, so that you can make a session for each
 *                 tab page separately
 *    terminal     include terminal windows where the command can be
 *                 restored
 *    unix         with Unix end-of-line format (single `<NL>`), even when
 *                 on Windows or DOS
 *    winpos       position of the whole Vim window
 *    winsize      window sizes
 *
 * Don't include both "curdir" and "sesdir".
 * When neither "curdir" nor "sesdir" is included, file names are stored
 * with absolute paths.
 * If you leave out "options" many things won't work well after restoring
 * the session.
 * "slash" and "unix" are useful on Windows when sharing session files
 * with Unix.  The Unix version of Vim cannot source dos format scripts,
 * but the Windows version of Vim can source unix format scripts.
 *
 * (default: "blank,buffers,curdir,folds,
 *  help,options,tabpages,winsize,terminal")
 *
 * *not available when compiled without the `+mksession` feature*
 */
export const sessionoptions: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "sessionoptions");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "sessionoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "sessionoptions");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "sessionoptions");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "sessionoptions", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "sessionoptions");
  },
};

/**
 * Name of the shell to use for ! and :! commands.  When changing the
 * value also check these options: 'shelltype', 'shellpipe', 'shellslash'
 * 'shellredir', 'shellquote', 'shellxquote' and 'shellcmdflag'.
 * It is allowed to give an argument to the command, e.g.  "csh -f".
 * See `option-backslash` about including spaces and backslashes.
 * Environment variables are expanded `:set_env`.
 *
 * In `restricted-mode` shell commands will not be possible.  This mode
 * is used if the value of $SHELL ends in "false" or "nologin".
 *
 * If the name of the shell contains a space, you need to enclose it in
 * quotes and escape the space.  Example with quotes:
 *
 *     :set shell=\"c:\program\ files\unix\sh.exe\"\ -f
 *
 * Note the backslash before each quote (to avoid starting a comment) and
 * each space (to avoid ending the option value).  Also note that the
 * "-f" is not inside the quotes, because it is not part of the command
 * name.  Vim automagically recognizes the backslashes that are path
 * separators.
 * Example with escaped space (Vim will do this when initializing the
 * option from $SHELL):
 *
 *     :set shell=/bin/with\\\ space/sh
 *
 * The resulting value of 'shell' is "/bin/with\ space/sh", two
 * backslashes are consumed by `:set`.
 *
 * Under MS-Windows, when the executable ends in ".com" it must be
 * included.  Thus setting the shell to "command.com" or "4dos.com"
 * works, but "command" and "4dos" do not work for all commands (e.g.,
 * filtering).
 * For unknown reasons, when using "4dos.com" the current directory is
 * changed to "C:\".  To avoid this set 'shell' like this:
 *
 *     :set shell=command.com\ /c\ 4dos
 *
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default $SHELL or "sh", Win32: "cmd.exe")
 */
export const shell: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "shell");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shell", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shell");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "shell");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shell", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shell");
  },
};

/**
 * Flag passed to the shell to execute "!" and ":!" commands; e.g.,
 * "bash.exe -c ls", "powershell.exe -Command dir", or "cmd.exe /c dir".
 * For MS-Windows, the default is set according to the value of 'shell',
 * to reduce the need to set this option by the user.
 * On Unix it can have more than one flag.  Each white space separated
 * part is passed as an argument to the shell command.
 * See `option-backslash` about including spaces and backslashes.
 * Also see `dos-shell` and `dos-powershell` for MS-Windows.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default: "-c";
 *  Win32, when 'shell' contains "powershell":
 *  "-Command", or when it does not contain "sh"
 *  somewhere: "/c")
 */
export const shellcmdflag: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "shellcmdflag");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shellcmdflag", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shellcmdflag");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "shellcmdflag");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shellcmdflag", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shellcmdflag");
  },
};

/**
 * String to be used to put the output of the ":make" command in the
 * error file.  See also `:make_makeprg`.  See `option-backslash` about
 * including spaces and backslashes.
 * The name of the temporary file can be represented by "%s" if necessary
 * (the file name is appended automatically if no %s appears in the value
 * of this option).
 * For the Amiga the default is ">".  For MS-Windows using powershell the
 * default is "2>&1 | Out-File -Encoding default", otherwise the default
 * is ">%s 2>&1".  The output is directly saved in a file and not echoed
 * to the screen.
 * For Unix the default is "| tee".  The stdout of the compiler is saved
 * in a file and echoed to the screen.  If the 'shell' option is "csh" or
 * "tcsh" after initializations, the default becomes "|& tee".  If the
 * 'shell' option is "sh", "ksh", "mksh", "pdksh", "zsh", "zsh-beta",
 * "bash", "fish", "ash" or "dash" the default becomes "2>&1| tee".  This
 * means that stderr is also included.  Before using the 'shell' option a
 * path is removed, thus "/bin/sh" uses "sh".
 * For Unix and MS-Windows, when the 'shell' option is "pwsh" the default
 * becomes ">%s 2>&1" and the output is not echoed to the screen.
 * The initialization of this option is done after reading the ".vimrc"
 * and the other initializations, so that when the 'shell' option is set
 * there, the 'shellpipe' option changes automatically, unless it was
 * explicitly set before.
 * When 'shellpipe' is set to an empty string, no redirection of the
 * ":make" output will be done.  This is useful if you use a 'makeprg'
 * that writes to 'makeef' by itself.  If you want no piping, but do
 * want to include the 'makeef', set 'shellpipe' to a single space.
 * Don't forget to precede the space with a backslash: ":set sp=\ ".
 * In the future pipes may be used for filtering and this option will
 * become obsolete (at least for Unix).
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default ">", ">%s 2>&1", "| tee", "|& tee"
 *  "2>&1| tee", or
 *  "2>&1 | Out-File -Encoding default")
 *
 * *not available when compiled without the `+quickfix` feature*
 */
export const shellpipe: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "shellpipe");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shellpipe", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shellpipe");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "shellpipe");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shellpipe", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shellpipe");
  },
};

/**
 * Quoting character(s), put around the command passed to the shell, for
 * the "!" and ":!" commands.  The redirection is kept outside of the
 * quoting.  See 'shellxquote' to include the redirection.  It's
 * probably not useful to set both options.
 * This is an empty string by default.  Only known to be useful for
 * third-party shells on MS-Windows-like systems, such as the MKS Korn
 * Shell or bash, where it should be "\"".  See `dos-shell`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default: "")
 */
export const shellquote: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "shellquote");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shellquote", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shellquote");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "shellquote");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shellquote", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shellquote");
  },
};

/**
 * String to be used to put the output of a filter command in a temporary
 * file.  See also `:!`.  See `option-backslash` about including spaces
 * and backslashes.
 * The name of the temporary file can be represented by "%s" if necessary
 * (the file name is appended automatically if no %s appears in the value
 * of this option).
 * The default is ">".  For Unix, if the 'shell' option is "csh" or
 * "tcsh" during initializations, the default becomes ">&".  If the
 * 'shell' option is "sh", "ksh", "mksh", "pdksh", "zsh", "zsh-beta",
 * "bash", "fish", or "pwsh", the default becomes ">%s 2>&1".  This means
 * that stderr is also included.  For Win32, the Unix checks are done and
 * additionally "cmd" is checked for, which makes the default ">%s 2>&1",
 * and "powershell" is checked for which makes the default
 * "2>&1 | Out-File -Encoding default" (see `dos-powershell`).  Also, the
 * same names with ".exe" appended are checked for.
 * The initialization of this option is done after reading the ".vimrc"
 * and the other initializations, so that when the 'shell' option is set
 * there, the 'shellredir' option changes automatically unless it was
 * explicitly set before.
 * In the future pipes may be used for filtering and this option will
 * become obsolete (at least for Unix).
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default ">", ">&", ">%s 2>&1", or
 *  "2>&1 | Out-File -Encoding default")
 */
export const shellredir: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "shellredir");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shellredir", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shellredir");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "shellredir");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shellredir", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shellredir");
  },
};

/**
 * When set, a forward slash is used when expanding file names.  This is
 * useful when a Unix-like shell is used instead of cmd.exe, pwsh.exe, or
 * powershell.exe.  Backward slashes can still be typed, but they are
 * changed to forward slashes by Vim.
 * Note that setting or resetting this option has no effect for some
 * existing file names, thus this option needs to be set before opening
 * any file for best results.  This might change in the future.
 * 'shellslash' only works when a backslash can be used as a path
 * separator.  To test if this is so use:
 *
 *     if exists('+shellslash')
 *
 * Also see 'completeslash'.
 *
 * (default off)
 *
 * *only for MS-Windows*
 */
export const shellslash: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "shellslash");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "shellslash", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shellslash");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "shellslash");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "shellslash", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shellslash");
  },
};

/**
 * When on, use temp files for shell commands.  When off use a pipe.
 * When using a pipe is not possible temp files are used anyway.
 * Currently a pipe is only supported on Unix and MS-Windows 2K and
 * later.  You can check it with:
 *
 *     :if has("filterpipe")
 *
 * The advantage of using a pipe is that nobody can read the temp file
 * and the 'shell' command does not need to support redirection.
 * The advantage of using a temp file is that the file type and encoding
 * can be detected.
 * The `FilterReadPre`, `FilterReadPost` and `FilterWritePre`,
 * `FilterWritePost` autocommands event are not triggered when
 * 'shelltemp' is off.
 * The `system()` function does not respect this option and always uses
 * temp files.
 * NOTE: This option is set to the Vim default value when 'compatible'
 * is reset.
 *
 * (Vi default off, Vim default on)
 */
export const shelltemp: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "shelltemp");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "shelltemp", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shelltemp");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "shelltemp");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "shelltemp", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shelltemp");
  },
};

/**
 * When 'shellxquote' is set to "(" then the characters listed in this
 * option will be escaped with a '^' character.  This makes it possible
 * to execute most external commands with cmd.exe.
 *
 * (default: "";
 *  for MS-Windows: `"\"&|<>()@^"`)
 */
export const shellxescape: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "shellxescape");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shellxescape", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shellxescape");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "shellxescape");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shellxescape", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shellxescape");
  },
};

/**
 * Quoting character(s), put around the command passed to the shell, for
 * the "!" and ":!" commands.  Includes the redirection.  See
 * 'shellquote' to exclude the redirection.  It's probably not useful
 * to set both options.
 * When the value is '(' then ')' is appended. When the value is '"('
 * then ')"' is appended.
 * When the value is '(' then also see 'shellxescape'.
 * This is an empty string by default on most systems, but is known to be
 * useful for on Win32 version, either for cmd.exe, powershell.exe, or
 * pwsh.exe which automatically strips off the first and last quote on a
 * command, or 3rd-party shells such as the MKS Korn Shell or bash, where
 * it should be "\"".  The default is adjusted according the value of
 * 'shell', to reduce the need to set this option by the user.  See
 * `dos-shell`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default: "";
 *  for Win32, when 'shell' is cmd.exe: "("
 *  for Win32, when 'shell' is
 *  powershell.exe: "\""
 *  for Win32, when 'shell' contains "sh"
 *  somewhere: "\""
 *  for Unix, when using system(): "\"")
 */
export const shellxquote: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "shellxquote");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shellxquote", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shellxquote");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "shellxquote");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shellxquote", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shellxquote");
  },
};

/**
 * Round indent to multiple of 'shiftwidth'.  Applies to > and <
 * commands.  CTRL-T and CTRL-D in Insert mode always round the indent to
 * a multiple of 'shiftwidth' (this is Vi compatible).
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 */
export const shiftround: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "shiftround");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "shiftround", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shiftround");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "shiftround");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "shiftround", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shiftround");
  },
};

/**
 * Number of spaces to use for each step of (auto)indent.  Used for
 * `'cindent'`, `>>`, `<<`, etc.
 * When zero the 'ts' value will be used.  Use the `shiftwidth()`
 * function to get the effective shiftwidth value.
 *
 * (default 8)
 */
export const shiftwidth: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "shiftwidth");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "shiftwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shiftwidth");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "shiftwidth");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "shiftwidth", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "shiftwidth");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&shiftwidth");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&shiftwidth", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&shiftwidth");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&shiftwidth", value);
  },
};

/**
 * This option helps to avoid all the `hit-enter` prompts caused by file
 * messages, for example  with CTRL-G, and to avoid some other messages.
 * It is a list of flags:
 *  flag   meaning when present
 *   f     use "(3 of 5)" instead of "(file 3 of 5)"
 *   i     use "[noeol]" instead of "[Incomplete last line]"
 *   l     use "999L, 888B" instead of "999 lines, 888 bytes"
 *   m     use "[+]" instead of "[Modified]"
 *   n     use "[New]" instead of "[New File]"
 *   r     use "[RO]" instead of "[readonly]"
 *   w     use "[w]" instead of "written" for file write message
 *         and "[a]" instead of "appended" for ':w >> file' command
 *   x     use "[dos]" instead of "[dos format]", "[unix]"
 *         instead of "[unix format]" and "[mac]" instead of "[mac
 *         format]"
 *   a     all of the above abbreviations
 *
 *   o     overwrite message for writing a file with subsequent
 *         message for reading a file (useful for ":wn" or when
 *         'autowrite' on)
 *   O     message for reading a file overwrites any previous
 *         message;  also for quickfix message (e.g., ":cn")
 *   s     don't give "search hit BOTTOM, continuing at TOP" or
 *         "search hit TOP, continuing at BOTTOM" messages; when using
 *         the search count do not show "W" after the count message (see
 *         S below)
 *   t     truncate file message at the start if it is too long
 *         to fit on the command-line, `"<"` will appear in the left most
 *         column; ignored in Ex mode
 *   T     truncate other messages in the middle if they are too
 *         long to fit on the command line; "..." will appear in the
 *         middle; ignored in Ex mode
 *   W     don't give "written" or "[w]" when writing a file
 *   A     don't give the "ATTENTION" message when an existing
 *         swap file is found
 *   I     don't give the intro message when starting Vim,
 *         see `:intro`
 *   c     don't give `ins-completion-menu` messages; for
 *         example, "-- XXX completion (YYY)", "match 1 of 2", "The only
 *         match", "Pattern not found", "Back at original", etc.
 *   C     don't give messages while scanning for ins-completion
 *         items, for instance "scanning tags"
 *   q     use "recording" instead of "recording @a"
 *   F     don't give the file info when editing a file, like
 *         `:silent` was used for the command; note that this also
 *         affects messages from autocommands
 *   S     do not show search count message when searching, e.g.
 *         "[1/5]"
 *
 * This gives you the opportunity to avoid that a change between buffers
 * requires you to hit `<Enter>`, but still gives as useful a message as
 * possible for the space available.  To get the whole message that you
 * would have got with 'shm' empty, use ":file!"
 * Useful values:
 *     shm=        No abbreviation of message.
 *     shm=a       Abbreviation, but no loss of information.
 *     shm=at      Abbreviation, and truncate message when necessary.
 *
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (Vim default "filnxtToOS", Vi default: "S",
 *  POSIX default: "AS")
 */
export const shortmess: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "shortmess");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shortmess", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shortmess");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "shortmess");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shortmess", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shortmess");
  },
};

/**
 * String to put at the start of lines that have been wrapped.  Useful
 * values are "> " or "+++ ":
 *
 *     :set showbreak=>\
 *
 * Note the backslash to escape the trailing space.  It's easier like
 * this:
 *
 *     :let &showbreak = '+++ '
 *
 * Only printable single-cell characters are allowed, excluding `<Tab>` and
 * comma (in a future version the comma might be used to separate the
 * part that is shown at the end and at the start of a line).
 * The characters are highlighted according to the '@' flag in
 * 'highlight'.
 * Note that tabs after the showbreak will be displayed differently.
 * If you want the 'showbreak' to appear in between line numbers, add the
 * "n" flag to 'cpoptions'.
 * A window-local value overrules a global value.  If the global value is
 * set and you want no value in the current window use NONE:
 *
 *     :setlocal showbreak=NONE
 *
 * (default "")
 *
 * *not available when compiled without the `+linebreak` feature*
 */
export const showbreak: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "showbreak");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "showbreak", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "showbreak");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "showbreak");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "showbreak", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "showbreak");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "showbreak");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "showbreak", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "showbreak");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&showbreak");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&showbreak", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&showbreak");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&showbreak", value);
  },
};

/**
 * Show (partial) command in the last line of the screen.  Set this
 * option off if your terminal is slow.
 * In Visual mode the size of the selected area is shown:
 * - When selecting characters within a line, the number of characters.
 *   If the number of bytes is different it is also displayed: "2-6"
 *   means two characters and six bytes.
 * - When selecting more than one line, the number of lines.
 * - When selecting a block, the size in screen characters:
 *   **{lines}**x**{columns}**.
 * This information can be displayed in an alternative location using the
 * 'showcmdloc' option.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (Vim default: on, off for Unix,
 *  Vi default: off, set in `defaults.vim`)
 */
export const showcmd: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "showcmd");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "showcmd", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "showcmd");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "showcmd");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "showcmd", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "showcmd");
  },
};

/**
 * When completing a word in insert mode (see `ins-completion`) from the
 * tags file, show both the tag name and a tidied-up form of the search
 * pattern (if there is one) as possible matches.  Thus, if you have
 * matched a C function, you can see a template for what arguments are
 * required (coding style permitting).
 * Note that this doesn't work well together with having "longest" in
 * 'completeopt', because the completion from the search pattern may not
 * match the typed text.
 *
 * (default off)
 */
export const showfulltag: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "showfulltag");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "showfulltag", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "showfulltag");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "showfulltag");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "showfulltag", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "showfulltag");
  },
};

/**
 * When a bracket is inserted, briefly jump to the matching one.  The
 * jump is only done if the match can be seen on the screen.  The time to
 * show the match can be set with 'matchtime'.
 * A Beep is given if there is no match (no matter if the match can be
 * seen or not).
 * This option is reset when 'paste' is set and restored when 'paste' is
 * reset.
 * When the 'm' flag is not included in 'cpoptions', typing a character
 * will immediately move the cursor back to where it belongs.
 * See the "sm" field in 'guicursor' for setting the cursor shape and
 * blinking when showing the match.
 * The 'matchpairs' option can be used to specify the characters to show
 * matches for.  'rightleft' and 'revins' are used to look for opposite
 * matches.
 * Also see the matchparen plugin for highlighting the match when moving
 * around `pi_paren.txt`.
 * Note: Use of the short form is rated PG.
 *
 * (default off)
 */
export const showmatch: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "showmatch");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "showmatch", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "showmatch");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "showmatch");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "showmatch", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "showmatch");
  },
};

/**
 * If in Insert, Replace or Visual mode put a message on the last line.
 * Use the 'M' flag in 'highlight' to set the type of highlighting for
 * this message.
 * When `XIM` may be used the message will include "XIM".  But this
 * doesn't mean XIM is really active, especially when 'imactivatekey' is
 * not set.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (Vim default: on, Vi default: off)
 */
export const showmode: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "showmode");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "showmode", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "showmode");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "showmode");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "showmode", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "showmode");
  },
};

/**
 * The value of this option specifies when the line with tab page labels
 * will be displayed:
 *         0: never
 *         1: only if there are at least two tab pages
 *         2: always
 * This is both for the GUI and non-GUI implementation of the tab pages
 * line.
 * See `tab-page` for more information about tab pages.
 *
 * (default 1)
 */
export const showtabline: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "showtabline");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "showtabline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "showtabline");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "showtabline");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "showtabline", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "showtabline");
  },
};

/**
 * The minimal number of columns to scroll horizontally.  Used only when
 * the 'wrap' option is off and the cursor is moved off of the screen.
 * When it is zero the cursor will be put in the middle of the screen.
 * When using a slow terminal set it to a large number or 0.  When using
 * a fast terminal use a small number or 1.  Not used for "zh" and "zl"
 * commands.
 *
 * (default 0)
 */
export const sidescroll: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "sidescroll");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "sidescroll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "sidescroll");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "sidescroll");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "sidescroll", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "sidescroll");
  },
};

/**
 * The minimal number of screen columns to keep to the left and to the
 * right of the cursor if 'nowrap' is set.  Setting this option to a
 * value greater than 0 while having `'sidescroll'` also at a non-zero
 * value makes some context visible in the line you are scrolling in
 * horizontally (except at beginning of the line).  Setting this option
 * to a large value (like 999) has the effect of keeping the cursor
 * horizontally centered in the window, as long as one does not come too
 * close to the beginning of the line.
 * After using the local value, go back the global value with one of
 * these two:
 *
 *     setlocal sidescrolloff<
 *     setlocal sidescrolloff=-1
 *
 * NOTE: This option is set to 0 when 'compatible' is set.
 *
 * Example: Try this together with 'sidescroll' and 'listchars' as
 *          in the following example to never allow the cursor to move
 *          onto the "extends" character:
 *
 *              :set nowrap sidescroll=1 listchars=extends:>,precedes:<
 *              :set sidescrolloff=1
 *
 * (default 0)
 */
export const sidescrolloff: GlobalOrLocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "sidescrolloff");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "sidescrolloff", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "sidescrolloff");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "sidescrolloff");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "sidescrolloff", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "sidescrolloff");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "sidescrolloff");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "sidescrolloff", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "sidescrolloff");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&sidescrolloff");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&sidescrolloff", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&sidescrolloff");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&sidescrolloff", value);
  },
};

/**
 * Whether or not to draw the signcolumn. Valid values are:
 *    "auto"       only when there is a sign to display
 *    "no"         never
 *    "yes"        always
 *    "number"     display signs in the 'number' column. If the number
 *                 column is not present, then behaves like "auto".
 *
 * (default "auto")
 *
 * *not available when compiled without the `+signs` feature*
 */
export const signcolumn: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "signcolumn");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "signcolumn", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "signcolumn");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "signcolumn");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "signcolumn", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "signcolumn");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&signcolumn");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&signcolumn", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&signcolumn");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&signcolumn", value);
  },
};

/**
 * Override the 'ignorecase' option if the search pattern contains upper
 * case characters.  Only used when the search pattern is typed and
 * 'ignorecase' option is on.  Used for the commands "/", "?", "n", "N",
 * ":g" and ":s".  Not used for "*", "#", "gd", tag search, etc.  After
 * "*" and "#" you can make 'smartcase' used by doing a "/" command,
 * recalling the search pattern from history and hitting `<Enter>`.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 */
export const smartcase: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "smartcase");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "smartcase", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "smartcase");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "smartcase");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "smartcase", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "smartcase");
  },
};

/**
 * Do smart autoindenting when starting a new line.  Works for C-like
 * programs, but can also be used for other languages.  'cindent' does
 * something like this, works better in most cases, but is more strict,
 * see `C-indenting`.  When 'cindent' is on or 'indentexpr' is set,
 * setting 'si' has no effect.  'indentexpr' is a more advanced
 * alternative.
 * Normally 'autoindent' should also be on when using 'smartindent'.
 * An indent is automatically inserted:
 * - After a line ending in '{'.
 * - After a line starting with a keyword from 'cinwords'.
 * - Before a line starting with '}' (only with the "O" command).
 * When typing '}' as the first character in a new line, that line is
 * given the same indent as the matching '{'.
 * When typing '#' as the first character in a new line, the indent for
 * that line is removed, the '#' is put in the first column.  The indent
 * is restored for the next line.  If you don't want this, use this
 * mapping: ":inoremap # X^H#", where ^H is entered with CTRL-V CTRL-H.
 * When using the ">>" command, lines starting with '#' are not shifted
 * right.
 * NOTE: This option is reset when 'compatible' is set.
 * This option is reset when 'paste' is set and restored when 'paste' is
 * reset.
 *
 * (default off)
 */
export const smartindent: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "smartindent");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "smartindent", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "smartindent");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "smartindent");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "smartindent", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "smartindent");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&smartindent");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&smartindent", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&smartindent");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&smartindent", value);
  },
};

/**
 * When on, a `<Tab>` in front of a line inserts blanks according to
 * 'shiftwidth'.  'tabstop' or 'softtabstop' is used in other places.  A
 * `<BS>` will delete a 'shiftwidth' worth of space at the start of the
 * line.
 * When off, a `<Tab>` always inserts blanks according to 'tabstop' or
 * 'softtabstop'.  'shiftwidth' is only used for shifting text left or
 * right `shift-left-right`.
 * What gets inserted (a `<Tab>` or spaces) depends on the 'expandtab'
 * option.  Also see `ins-expandtab`.  When 'expandtab' is not set, the
 * number of spaces is minimized by using `<Tab>`s.
 * This option is reset when 'paste' is set and restored when 'paste' is
 * reset.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 */
export const smarttab: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "smarttab");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "smarttab", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "smarttab");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "smarttab");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "smarttab", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "smarttab");
  },
};

/**
 * Number of spaces that a `<Tab>` counts for while performing editing
 * operations, like inserting a `<Tab>` or using `<BS>`.  It "feels" like
 * `<Tab>`s are being inserted, while in fact a mix of spaces and `<Tab>`s is
 * used.  This is useful to keep the 'ts' setting at its standard value
 * of 8, while being able to edit like it is set to 'sts'.  However,
 * commands like "x" still work on the actual characters.
 * When 'sts' is zero, this feature is off.
 * When 'sts' is negative, the value of 'shiftwidth' is used.
 * 'softtabstop' is set to 0 when the 'paste' option is set and restored
 * when 'paste' is reset.
 * See also `ins-expandtab`.  When 'expandtab' is not set, the number of
 * spaces is minimized by using `<Tab>`s.
 * The 'L' flag in 'cpoptions' changes how tabs are used when 'list' is
 * set.
 * NOTE: This option is set to 0 when 'compatible' is set.
 *
 * If Vim is compiled with the `+vartabs` feature then the value of
 * 'softtabstop' will be ignored if `'varsofttabstop'` is set to
 * anything other than an empty string.
 *
 * (default 0)
 */
export const softtabstop: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "softtabstop");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "softtabstop", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "softtabstop");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "softtabstop");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "softtabstop", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "softtabstop");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&softtabstop");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&softtabstop", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&softtabstop");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&softtabstop", value);
  },
};

/**
 * When on spell checking will be done.  See `spell`.
 * The languages are specified with 'spelllang'.
 *
 * (default off)
 *
 * *not available when compiled without the `+syntax` feature*
 */
export const spell: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "spell");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "spell", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "spell");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "spell");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "spell", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "spell");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&spell");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&spell", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&spell");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&spell", value);
  },
};

/**
 * Pattern to locate the end of a sentence.  The following word will be
 * checked to start with a capital letter.  If not then it is highlighted
 * with SpellCap `hl-SpellCap` (unless the word is also badly spelled).
 * When this check is not wanted make this option empty.
 * Only used when 'spell' is set.
 * Be careful with special characters, see `option-backslash` about
 * including spaces and backslashes.
 * To set this option automatically depending on the language, see
 * `set-spc-auto`.
 *
 * (default "[.?!]\_[\])'" \t]\+")
 *
 * *not available when compiled without the `+syntax` feature*
 */
export const spellcapcheck: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "spellcapcheck");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "spellcapcheck", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "spellcapcheck");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "spellcapcheck");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "spellcapcheck", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "spellcapcheck");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&spellcapcheck");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&spellcapcheck", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&spellcapcheck");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&spellcapcheck", value);
  },
};

/**
 * Name of the word list file where words are added for the `zg` and `zw`
 * commands.  It must end in ".**{encoding}**.add".  You need to include the
 * path, otherwise the file is placed in the current directory.
 * The path may include characters from 'isfname', space, comma and '@'.
 *
 * It may also be a comma-separated list of names.  A count before the
 * `zg` and `zw` commands can be used to access each.  This allows using
 * a personal word list file and a project word list file.
 * When a word is added while this option is empty Vim will set it for
 * you: Using the first directory in 'runtimepath' that is writable.  If
 * there is no "spell" directory yet it will be created.  For the file
 * name the first language name that appears in 'spelllang' is used,
 * ignoring the region.
 * The resulting ".spl" file will be used for spell checking, it does not
 * have to appear in 'spelllang'.
 * Normally one file is used for all regions, but you can add the region
 * name if you want to.  However, it will then only be used when
 * 'spellfile' is set to it, for entries in 'spelllang' only files
 * without region name will be found.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default empty)
 *
 * *not available when compiled without the `+syntax` feature*
 */
export const spellfile: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "spellfile");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "spellfile", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "spellfile");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "spellfile");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "spellfile", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "spellfile");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&spellfile");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&spellfile", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&spellfile");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&spellfile", value);
  },
};

/**
 * A comma-separated list of word list names.  When the 'spell' option is
 * on spellchecking will be done for these languages.  Example:
 *
 *     set spelllang=en_us,nl,medical
 *
 * This means US English, Dutch and medical words are recognized.  Words
 * that are not recognized will be highlighted.
 * The word list name must consist of alphanumeric characters, a dash or
 * an underscore.  It should not include a comma or dot.  Using a dash is
 * recommended to separate the two letter language name from a
 * specification.  Thus "en-rare" is used for rare English words.
 * A region name must come last and have the form "_xx", where "xx" is
 * the two-letter, lower case region name.  You can use more than one
 * region by listing them: "en_us,en_ca" supports both US and Canadian
 * English, but not words specific for Australia, New Zealand or Great
 * Britain. (Note: currently en_au and en_nz dictionaries are older than
 * en_ca, en_gb and en_us).
 * If the name "cjk" is included East Asian characters are excluded from
 * spell checking.  This is useful when editing text that also has Asian
 * words.
 * Note that the "medical" dictionary does not exist, it is just an
 * example of a longer name.
 *
 * As a special case the name of a .spl file can be given as-is.  The
 * first "_xx" in the name is removed and used as the region name
 * (_xx is an underscore, two letters and followed by a non-letter).
 * This is mainly for testing purposes.  You must make sure the correct
 * encoding is used, Vim doesn't check it.
 * When 'encoding' is set the word lists are reloaded.  Thus it's a good
 * idea to set 'spelllang' after setting 'encoding' to avoid loading the
 * files twice.
 * How the related spell files are found is explained here: `spell-load`.
 *
 * If the `spellfile.vim` plugin is active and you use a language name
 * for which Vim cannot find the .spl file in 'runtimepath' the plugin
 * will ask you if you want to download the file.
 *
 * After this option has been set successfully, Vim will source the files
 * "spell/LANG.vim" in 'runtimepath'.  "LANG" is the value of 'spelllang'
 * up to the first character that is not an ASCII letter or number and
 * not a dash.  Also see `set-spc-auto`.
 *
 * (default "en")
 *
 * *not available when compiled without the `+syntax` feature*
 */
export const spelllang: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "spelllang");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "spelllang", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "spelllang");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "spelllang");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "spelllang", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "spelllang");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&spelllang");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&spelllang", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&spelllang");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&spelllang", value);
  },
};

/**
 * A comma-separated list of options for spell checking:
 *    camel        When a word is CamelCased, assume "Cased" is a
 *                 separate word: every upper-case character in a word
 *                 that comes after a lower case character indicates the
 *                 start of a new word.
 *
 * (default "")
 *
 * *not available when compiled without the `+syntax` feature*
 */
export const spelloptions: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "spelloptions");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "spelloptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "spelloptions");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "spelloptions");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "spelloptions", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "spelloptions");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&spelloptions");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&spelloptions", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&spelloptions");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&spelloptions", value);
  },
};

/**
 * Methods used for spelling suggestions.  Both for the `z=` command and
 * the `spellsuggest()` function.  This is a comma-separated list of
 * items:
 *
 * best            Internal method that works best for English.  Finds
 *                 changes like "fast" and uses a bit of sound-a-like
 *                 scoring to improve the ordering.
 *
 * double          Internal method that uses two methods and mixes the
 *                 results.  The first method is "fast", the other method
 *                 computes how much the suggestion sounds like the bad
 *                 word.  That only works when the language specifies
 *                 sound folding.  Can be slow and doesn't always give
 *                 better results.
 *
 * fast            Internal method that only checks for simple changes:
 *                 character inserts/deletes/swaps.  Works well for
 *                 simple typing mistakes.
 *
 * **{number}**        The maximum number of suggestions listed for `z=`.
 *                 Not used for `spellsuggest()`.  The number of
 *                 suggestions is never more than the value of 'lines'
 *                 minus two.
 *
 * timeout:**{millisec}**   Limit the time searching for suggestions to
 *                 **{millisec}** milli seconds.  Applies to the following
 *                 methods.  When omitted the limit is 5000. When
 *                 negative there is no limit.  *only works when built
 *                 with the `+reltime` feature*
 *
 * file:**{filename}** Read file **{filename}**, which must have two columns,
 *                 separated by a slash.  The first column contains the
 *                 bad word, the second column the suggested good word.
 *                 Example:
 *                         theribal/terrible
 *                 Use this for common mistakes that do not appear at the
 *                 top of the suggestion list with the internal methods.
 *                 Lines without a slash are ignored, use this for
 *                 comments.
 *                 The word in the second column must be correct,
 *                 otherwise it will not be used.  Add the word to an
 *                 ".add" file if it is currently flagged as a spelling
 *                 mistake.
 *                 The file is used for all languages.
 *
 * expr:**{expr}**     Evaluate expression **{expr}**.  Use a function to avoid
 *                 trouble with spaces.  Best is to call a function
 *                 without arguments, see `expr-option-function`.
 *                 `v:val` holds the badly spelled word.  The expression
 *                 must evaluate to a List of Lists, each with a
 *                 suggestion and a score.
 *                 Example:
 *                         [['the', 33], ['that', 44]]
 *                 Set 'verbose' and use `z=` to see the scores that the
 *                 internal methods use.  A lower score is better.
 *                 This may invoke `spellsuggest()` if you temporarily
 *                 set 'spellsuggest' to exclude the "expr:" part.
 *                 Errors are silently ignored, unless you set the
 *                 'verbose' option to a non-zero value.
 *
 * Only one of "best", "double" or "fast" may be used.  The others may
 * appear several times in any order.  Example:
 *
 *     :set sps=file:~/.vim/sugg,best,expr:MySuggest()
 *
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "best")
 *
 * *not available when compiled without the `+syntax` feature*
 */
export const spellsuggest: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "spellsuggest");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "spellsuggest", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "spellsuggest");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "spellsuggest");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "spellsuggest", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "spellsuggest");
  },
};

/**
 * When on, splitting a window will put the new window below the current
 * one. `:split`
 *
 * (default off)
 */
export const splitbelow: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "splitbelow");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "splitbelow", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "splitbelow");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "splitbelow");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "splitbelow", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "splitbelow");
  },
};

/**
 * When on, splitting a window will put the new window right of the
 * current one. `:vsplit`
 *
 * (default off)
 */
export const splitright: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "splitright");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "splitright", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "splitright");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "splitright");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "splitright", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "splitright");
  },
};

/**
 * When "on" the commands listed below move the cursor to the first
 * non-blank of the line.  When off the cursor is kept in the same column
 * (if possible).  This applies to the commands:
 * - CTRL-D, CTRL-U, CTRL-B, CTRL-F, "G", "H", "M", "L", "gg"
 * - "d", `"<<"` and ">>" with a linewise operator
 * - "%" with a count
 * - buffer changing commands (CTRL-^, :bnext, :bNext, etc.)
 * - Ex commands that only has a line number, e.g., ":25" or ":+".
 * In case of buffer changing commands the cursor is placed at the column
 * where it was the last time the buffer was edited.
 * NOTE: This option is set when 'compatible' is set.
 *
 * (default on)
 */
export const startofline: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "startofline");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "startofline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "startofline");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "startofline");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "startofline", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "startofline");
  },
};

/**
 * When non-empty, this option determines the content of the status line.
 * Also see `status-line`.
 *
 * The option consists of printf style '%' items interspersed with
 * normal text.  Each status line item is of the form:
 *   %-0**{minwid}**.**{maxwid}****{item}**
 * All fields except the **{item}** are optional.  A single percent sign can
 * be given as "%%".
 *
 * When the option starts with "%!" then it is used as an expression,
 * evaluated and the result is used as the option value.  Example:
 *
 *     :set statusline=%!MyStatusLine()
 *
 * The *g:statusline_winid* variable will be set to the `window-ID` of the
 * window that the status line belongs to.
 * The result can contain %{} items that will be evaluated too.
 * Note that the "%!" expression is evaluated in the context of the
 * current window and buffer, while %{} items are evaluated in the
 * context of the window that the statusline belongs to.
 *
 * When there is error while evaluating the option then it will be made
 * empty to avoid further errors.  Otherwise screen updating would loop.
 * When the result contains unprintable characters the result is
 * unpredictable.
 *
 * Note that the only effect of 'ruler' when this option is set (and
 * 'laststatus' is 2) is controlling the output of `CTRL-G`.
 *
 * field       meaning
 * -           Left justify the item.  The default is right justified
 *             when minwid is larger than the length of the item.
 * 0           Leading zeroes in numeric items.  Overridden by '-'.
 * minwid      Minimum width of the item, padding as set by '-' & '0'.
 *             Value must be 50 or less.
 * maxwid      Maximum width of the item.  Truncation occurs with a `'<'`
 *             on the left for text items.  Numeric items will be
 *             shifted down to maxwid-2 digits followed by '>'number
 *             where number is the amount of missing digits, much like
 *             an exponential notation.
 * item        A one letter code as described below.
 *
 * Following is a description of the possible statusline items.  The
 * second character in "item" is the type:
 *         N for number
 *         S for string
 *         F for flags as described below
 *         - not applicable
 *
 * item  meaning
 * f S   Path to the file in the buffer, as typed or relative to current
 *       directory.
 * F S   Full path to the file in the buffer.
 * t S   File name (tail) of file in the buffer.
 * m F   Modified flag, text is "[+]"; "[-]" if 'modifiable' is off.
 * M F   Modified flag, text is ",+" or ",-".
 * r F   Readonly flag, text is "[RO]".
 * R F   Readonly flag, text is ",RO".
 * h F   Help buffer flag, text is "[help]".
 * H F   Help buffer flag, text is ",HLP".
 * w F   Preview window flag, text is "[Preview]".
 * W F   Preview window flag, text is ",PRV".
 * y F   Type of file in the buffer, e.g., "[vim]".  See 'filetype'.
 * Y F   Type of file in the buffer, e.g., ",VIM".  See 'filetype'.
 * q S   "[Quickfix List]", "[Location List]" or empty.
 * k S   Value of "b:keymap_name" or 'keymap' when `:lmap` mappings are
 *       being used: `"<keymap>"`
 * n N   Buffer number.
 * b N   Value of character under cursor.
 * B N   As above, in hexadecimal.
 * o N   Byte number in file of byte under cursor, first byte is 1.
 *       Mnemonic: Offset from start of file (with one added)
 *       *not available when compiled without `+byte_offset` feature*
 * O N   As above, in hexadecimal.
 * N N   Printer page number.  (Only works in the 'printheader' option.)
 * l N   Line number.
 * L N   Number of lines in buffer.
 * c N   Column number (byte index).
 * v N   Virtual column number (screen column).
 * V N   Virtual column number as -**{num}**.  Not displayed if equal to 'c'.
 * p N   Percentage through file in lines as in `CTRL-G`.
 * P S   Percentage through file of displayed window.  This is like the
 *       percentage described for 'ruler'.  Always 3 in length, unless
 *       translated.
 * S S   'showcmd' content, see 'showcmdloc'.
 * a S   Argument list status as in default title.  (**{current}** of **{max}**)
 *       Empty if the argument file count is zero or one.
 * { NF  Evaluate expression between '%{' and '}' and substitute result.
 *       Note that there is no '%' before the closing '}'.  The
 *       expression cannot contain a '}' character, call a function to
 *       work around that.  See `stl-%{` below.
 * {% -  This is almost same as { except the result of the expression is
 *       re-evaluated as a statusline format string.  Thus if the
 *       return value of expr contains % items they will get expanded.
 *       The expression can contain the } character, the end of
 *       expression is denoted by %}.
 *       For example:
 *
 *           func! Stl_filename() abort
 *               return "%t"
 *           endfunc
 *
 *         `stl=%{Stl_filename()}`   results in `"%t"`
 *         `stl=%{%Stl_filename()%}` results in `"Name of current file"`
 * %} -  End of `{%` expression
 * ( -   Start of item group.  Can be used for setting the width and
 *       alignment of a section.  Must be followed by %) somewhere.
 * ) -   End of item group.  No width fields allowed.
 * T N   For 'tabline': start of tab page N label.  Use %T after the last
 *       label.  This information is used for mouse clicks.
 * X N   For 'tabline': start of close tab N label.  Use %X after the
 *       label, e.g.: %3Xclose%X.  Use %999X for a "close current tab"
 *       mark.  This information is used for mouse clicks.
 * < -   Where to truncate line if too long.  Default is at the start.
 *       No width fields allowed.
 * = -   Separation point between alignment sections.  Each section will
 *       be separated by an equal number of spaces.  With one %= what
 *       comes after it will be right-aligned.  With two %= there is a
 *       middle part, with white space left and right of it.
 *       No width fields allowed.
 * `#` -   Set highlight group.  The name must follow and then a # again.
 *       Thus use %#HLname# for highlight group HLname.  The same
 *       highlighting is used, also for the statusline of non-current
 *       windows.
 * * -   Set highlight group to User**{N}**, where **{N}** is taken from the
 *       minwid field, e.g. %1*.  Restore normal highlight with %* or %0*.
 *       The difference between User**{N}** and StatusLine will be applied to
 *       StatusLineNC for the statusline of non-current windows.
 *       The number N must be between 1 and 9.  See `hl-User1..9`
 *
 * When displaying a flag, Vim removes the leading comma, if any, when
 * that flag comes right after plaintext.  This will make a nice display
 * when flags are used like in the examples below.
 *
 * When all items in a group becomes an empty string (i.e. flags that are
 * not set) and a minwid is not set for the group, the whole group will
 * become empty.  This will make a group like the following disappear
 * completely from the statusline when none of the flags are set.
 *
 *     :set statusline=...%(\ [%M%R%H]%)...
 *
 * Beware that an expression is evaluated each and every time the status
 * line is displayed.
 *
 * While evaluating %{} the current buffer and current window will be set
 * temporarily to that of the window (and buffer) whose statusline is
 * currently being drawn.  The expression will evaluate in this context.
 * The variable "g:actual_curbuf" is set to the `bufnr()` number of the
 * real current buffer and "g:actual_curwin" to the `window-ID` of the
 * real current window.  These values are strings.
 *
 * The 'statusline' option will be evaluated in the `sandbox` if set from
 * a modeline, see `sandbox-option`.
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 *
 * It is not allowed to change text or jump to another window while
 * evaluating 'statusline' `textlock`.
 *
 * If the statusline is not updated when you want it (e.g., after setting
 * a variable that's used in an expression), you can force an update by
 * using `:redrawstatus`.
 *
 * A result of all digits is regarded a number for display purposes.
 * Otherwise the result is taken as flag text and applied to the rules
 * described above.
 *
 * Watch out for errors in expressions.  They may render Vim unusable!
 * If you are stuck, hold down ':' or 'Q' to get a prompt, then quit and
 * edit your .vimrc or whatever with "vim --clean" to get it right.
 *
 * Examples:
 * Emulate standard status line with 'ruler' set
 *
 *     :set statusline=%<%f\ %h%m%r%=%-14.(%l,%c%V%)\ %P
 *
 * Similar, but add ASCII value of char under the cursor (like "ga")
 *
 *     :set statusline=%<%f%h%m%r%=%b\ 0x%B\ \ %l,%c%V\ %P
 *
 * Display byte count and byte value, modified flag in red.
 *
 *     :set statusline=%<%f%=\ [%1*%M%*%n%R%H]\ %-19(%3l,%02c%03V%)%O'%02b'
 *     :hi User1 term=inverse,bold cterm=inverse,bold ctermfg=red
 *
 * Display a ,GZ flag if a compressed file is loaded
 *
 *     :set statusline=...%r%{VarExists('b:gzflag','\ [GZ]')}%h...
 *
 * In the `:autocmd`'s:
 *
 *     :let b:gzflag = 1
 *
 * And:
 *
 *     :unlet b:gzflag
 *
 * And define this function:
 *
 *     :function VarExists(var, val)
 *     :    if exists(a:var) | return a:val | else | return '' | endif
 *     :endfunction
 *
 * (default empty)
 *
 * *not available when compiled without the `+statusline` feature*
 */
export const statusline: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "statusline");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "statusline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "statusline");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "statusline");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "statusline", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "statusline");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "statusline");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "statusline", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "statusline");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&statusline");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&statusline", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&statusline");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&statusline", value);
  },
};

/**
 * Files with these suffixes get a lower priority when multiple files
 * match a wildcard.  See `suffixes`.  Commas can be used to separate the
 * suffixes.  Spaces after the comma are ignored.  A dot is also seen as
 * the start of a suffix.  To avoid a dot or comma being recognized as a
 * separator, precede it with a backslash (see `option-backslash` about
 * including spaces and backslashes).
 * See 'wildignore' for completely ignoring files.
 * The use of `:set+=` and `:set-=` is preferred when adding or removing
 * suffixes from the list.  This avoids problems when a future version
 * uses another default.
 *
 * (default `".bak,~,.o,.h,.info,.swp,.obj"`)
 */
export const suffixes: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "suffixes");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "suffixes", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "suffixes");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "suffixes");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "suffixes", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "suffixes");
  },
};

/**
 * Comma-separated list of suffixes, which are used when searching for a
 * file for the "gf", "[I", etc. commands.  Example:
 *
 *     :set suffixesadd=.java
 *
 * (default "")
 */
export const suffixesadd: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "suffixesadd");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "suffixesadd", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "suffixesadd");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "suffixesadd");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "suffixesadd", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "suffixesadd");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&suffixesadd");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&suffixesadd", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&suffixesadd");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&suffixesadd", value);
  },
};

/**
 * Use a swapfile for the buffer.  This option can be reset when a
 * swapfile is not wanted for a specific buffer.  For example, with
 * confidential information that even root must not be able to access.
 * Careful: All text will be in memory:
 *         - Don't use this for big files.
 *         - Recovery will be impossible!
 * A swapfile will only be present when `'updatecount'` is non-zero and
 * 'swapfile' is set.
 * When 'swapfile' is reset, the swap file for the current buffer is
 * immediately deleted.  When 'swapfile' is set, and 'updatecount' is
 * non-zero, a swap file is immediately created.
 * Also see `swap-file` and `'swapsync'`.
 * If you want to open a new buffer without creating a swap file for it,
 * use the `:noswapfile` modifier.
 * See 'directory' for where the swap file is created.
 *
 * This option is used together with 'bufhidden' and 'buftype' to
 * specify special kinds of buffers.   See `special-buffers`.
 *
 * (default on)
 */
export const swapfile: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "swapfile");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "swapfile", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "swapfile");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "swapfile");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "swapfile", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "swapfile");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&swapfile");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&swapfile", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&swapfile");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&swapfile", value);
  },
};

/**
 * This option controls the behavior when switching between buffers.
 * Mostly for `quickfix` commands some values are also used for other
 * commands, as mentioned below.
 * Possible values (comma-separated list):
 *    useopen      If included, jump to the first open window that
 *                 contains the specified buffer (if there is one).
 *                 Otherwise: Do not examine other windows.
 *                 This setting is checked with `quickfix` commands, when
 *                 jumping to errors (":cc", ":cn", "cp", etc.).  It is
 *                 also used in all buffer related split commands, for
 *                 example ":sbuffer", ":sbnext", or ":sbrewind".
 *    usetab       Like "useopen", but also consider windows in other tab
 *                 pages.
 *    split        If included, split the current window before loading
 *                 a buffer for a `quickfix` command that display errors.
 *                 Otherwise: do not split, use current window (when used
 *                 in the quickfix window: the previously used window or
 *                 split if there is no other window).
 *    vsplit       Just like "split" but split vertically.
 *    newtab       Like "split", but open a new tab page.  Overrules
 *                 "split" when both are present.
 *    uselast      If included, jump to the previously used window when
 *                 jumping to errors with `quickfix` commands.
 *
 * (default "")
 */
export const switchbuf: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "switchbuf");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "switchbuf", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "switchbuf");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "switchbuf");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "switchbuf", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "switchbuf");
  },
};

/**
 * Maximum column in which to search for syntax items.  In long lines the
 * text after this column is not highlighted and following lines may not
 * be highlighted correctly, because the syntax state is cleared.
 * This helps to avoid very slow redrawing for an XML file that is one
 * long line.
 * Set to zero to remove the limit.
 *
 * (default 3000)
 *
 * *not available when compiled without the `+syntax` feature*
 */
export const synmaxcol: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "synmaxcol");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "synmaxcol", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "synmaxcol");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "synmaxcol");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "synmaxcol", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "synmaxcol");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&synmaxcol");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&synmaxcol", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&synmaxcol");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&synmaxcol", value);
  },
};

/**
 * When this option is set, the syntax with this name is loaded, unless
 * syntax highlighting has been switched off with ":syntax off".
 * Otherwise this option does not always reflect the current syntax (the
 * b:current_syntax variable does).
 * This option is most useful in a modeline, for a file which syntax is
 * not automatically recognized.  Example, in an IDL file:
 *         /* vim: set syntax=idl : * /
 * When a dot appears in the value then this separates two filetype
 * names.  Example:
 *         /* vim: set syntax=c.doxygen : * /
 * This will use the "c" syntax first, then the "doxygen" syntax.
 * Note that the second one must be prepared to be loaded as an addition,
 * otherwise it will be skipped.  More than one dot may appear.
 * To switch off syntax highlighting for the current file, use:
 *
 *     :set syntax=OFF
 *
 * To switch syntax highlighting on according to the current value of the
 * 'filetype' option:
 *
 *     :set syntax=ON
 *
 * What actually happens when setting the 'syntax' option is that the
 * Syntax autocommand event is triggered with the value as argument.
 * This option is not copied to another buffer, independent of the 's' or
 * 'S' flag in 'cpoptions'.
 * Only normal file name characters can be used, `"/\*?[|<>"` are illegal.
 *
 * (default empty)
 *
 * *not available when compiled without the `+syntax` feature*
 */
export const syntax: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "syntax");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "syntax", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "syntax");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "syntax");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "syntax", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "syntax");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&syntax");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&syntax", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&syntax");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&syntax", value);
  },
};

/**
 * When non-empty, this option determines the content of the tab pages
 * line at the top of the Vim window.  When empty Vim will use a default
 * tab pages line.  See `setting-tabline` for more info.
 *
 * The tab pages line only appears as specified with the 'showtabline'
 * option and only when there is no GUI tab line.  When 'e' is in
 * 'guioptions' and the GUI supports a tab line 'guitablabel' is used
 * instead.  Note that the two tab pages lines are very different.
 *
 * The value is evaluated like with 'statusline'.  You can use
 * `tabpagenr()`, `tabpagewinnr()` and `tabpagebuflist()` to figure out
 * the text to be displayed.  Use "%1T" for the first label, "%2T" for
 * the second one, etc.  Use "%X" items for closing labels.
 *
 * When changing something that is used in 'tabline' that does not
 * trigger it to be updated, use `:redrawtabline`.
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 *
 * Keep in mind that only one of the tab pages is the current one, others
 * are invisible and you can't jump to their windows.
 *
 * (default empty)
 */
export const tabline: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "tabline");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "tabline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tabline");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "tabline");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "tabline", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tabline");
  },
};

/**
 * Maximum number of tab pages to be opened by the `-p` command line
 * argument or the ":tab all" command. `tabpage`
 *
 * (default 10)
 */
export const tabpagemax: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "tabpagemax");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "tabpagemax", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tabpagemax");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "tabpagemax");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "tabpagemax", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tabpagemax");
  },
};

/**
 * Number of spaces that a `<Tab>` in the file counts for.  Also see
 * the `:retab` command, and the 'softtabstop' option.
 *
 * Note: Setting 'tabstop' to any other value than 8 can make your file
 * appear wrong in many places, e.g., when printing it.
 * The value must be more than 0 and less than 10000.
 *
 * There are four main ways to use tabs in Vim:
 * 1. Always keep 'tabstop' at 8, set 'softtabstop' and 'shiftwidth' to 4
 *    (or 3 or whatever you prefer) and use 'noexpandtab'.  Then Vim
 *    will use a mix of tabs and spaces, but typing `<Tab>` and `<BS>` will
 *    behave like a tab appears every 4 (or 3) characters.
 * 2. Set 'tabstop' and 'shiftwidth' to whatever you prefer and use
 *    'expandtab'.  This way you will always insert spaces.  The
 *    formatting will never be messed up when 'tabstop' is changed.
 * 3. Set 'tabstop' and 'shiftwidth' to whatever you prefer and use a
 *    `modeline` to set these values when editing the file again.  Only
 *    works when using Vim to edit the file.
 * 4. Always set 'tabstop' and 'shiftwidth' to the same value, and
 *    'noexpandtab'.  This should then work (for initial indents only)
 *    for any tabstop setting that people use.  It might be nice to have
 *    tabs after the first non-blank inserted as spaces if you do this
 *    though.  Otherwise aligned comments will be wrong when 'tabstop' is
 *    changed.
 *
 * If Vim is compiled with the `+vartabs` feature then the value of
 * 'tabstop' will be ignored if `'vartabstop'` is set to anything other
 * than an empty string.
 *
 * (default 8)
 */
export const tabstop: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "tabstop");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "tabstop", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tabstop");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "tabstop");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "tabstop", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "tabstop");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&tabstop");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&tabstop", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&tabstop");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&tabstop", value);
  },
};

/**
 * When searching for a tag (e.g., for the `:ta` command), Vim can either
 * use a binary search or a linear search in a tags file.  Binary
 * searching makes searching for a tag a LOT faster, but a linear search
 * will find more tags if the tags file wasn't properly sorted.
 * Vim normally assumes that your tags files are sorted, or indicate that
 * they are not sorted.  Only when this is not the case does the
 * 'tagbsearch' option need to be switched off.
 *
 * When 'tagbsearch' is on, binary searching is first used in the tags
 * files.  In certain situations, Vim will do a linear search instead for
 * certain files, or retry all files with a linear search.  When
 * 'tagbsearch' is off, only a linear search is done.
 *
 * Linear searching is done anyway, for one file, when Vim finds a line
 * at the start of the file indicating that it's not sorted:
 *
 *     !_TAG_FILE_SORTED    0       /some comment/
 *
 * [The whitespace before and after the '0' must be a single <Tab>]
 *
 * When a binary search was done and no match was found in any of the
 * files listed in 'tags', and case is ignored or a pattern is used
 * instead of a normal tag name, a retry is done with a linear search.
 * Tags in unsorted tags files, and matches with different case will only
 * be found in the retry.
 *
 * If a tag file indicates that it is case-fold sorted, the second,
 * linear search can be avoided when case is ignored.  Use a value of '2'
 * in the "!_TAG_FILE_SORTED" line for this.  A tag file can be case-fold
 * sorted with the -f switch to "sort" in most unices, as in the command:
 * "sort -f -o tags tags".  For Universal ctags and Exuberant ctags
 * version 5.x or higher (at least 5.5) the --sort=foldcase switch can be
 * used for this as well.  Note that case must be folded to uppercase for
 * this to work.
 *
 * By default, tag searches are case-sensitive.  Case is ignored when
 * 'ignorecase' is set and 'tagcase' is "followic", or when 'tagcase' is
 * "ignore".
 * Also when 'tagcase' is "followscs" and 'smartcase' is set, or
 * 'tagcase' is "smart", and the pattern contains only lowercase
 * characters.
 *
 * When 'tagbsearch' is off, tags searching is slower when a full match
 * exists, but faster when no full match exists.  Tags in unsorted tags
 * files may only be found with 'tagbsearch' off.
 * When the tags file is not sorted, or sorted in a wrong way (not on
 * ASCII byte value), 'tagbsearch' should be off, or the line given above
 * must be included in the tags file.
 * This option doesn't affect commands that find all matching tags (e.g.,
 * command-line completion and ":help").
 *
 * (default on)
 */
export const tagbsearch: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "tagbsearch");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "tagbsearch", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tagbsearch");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "tagbsearch");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "tagbsearch", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tagbsearch");
  },
};

/**
 * This option specifies how case is handled when searching the tags
 * file:
 *    followic     Follow the 'ignorecase' option
 *    followscs    Follow the 'smartcase' and 'ignorecase' options
 *    ignore       Ignore case
 *    match        Match case
 *    smart        Ignore case unless an upper case letter is used
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (default "followic")
 */
export const tagcase: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "tagcase");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "tagcase", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tagcase");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "tagcase");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "tagcase", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tagcase");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "tagcase");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "tagcase", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "tagcase");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&tagcase");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&tagcase", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&tagcase");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&tagcase", value);
  },
};

/**
 * This option specifies a function to be used to perform tag searches.
 * The function gets the tag pattern and should return a List of matching
 * tags.  See `tag-function` for an explanation of how to write the
 * function and an example.  The value can be the name of a function, a
 * `lambda` or a `Funcref`. See `option-value-function` for more
 * information.
 *
 * (default: empty)
 *
 * *not available when compiled without the `+eval` feature*
 */
export const tagfunc: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "tagfunc");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "tagfunc", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tagfunc");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "tagfunc");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "tagfunc", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "tagfunc");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&tagfunc");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&tagfunc", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&tagfunc");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&tagfunc", value);
  },
};

/**
 * If non-zero, tags are significant up to this number of characters.
 *
 * (default 0)
 */
export const taglength: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "taglength");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "taglength", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "taglength");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "taglength");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "taglength", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "taglength");
  },
};

/**
 * If on and using a tags file in another directory, file names in that
 * tags file are relative to the directory where the tags file is.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (Vim default: on, Vi default: off)
 */
export const tagrelative: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "tagrelative");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "tagrelative", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tagrelative");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "tagrelative");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "tagrelative", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tagrelative");
  },
};

/**
 * Filenames for the tag command, separated by spaces or commas.  To
 * include a space or comma in a file name, precede it with a backslash
 * (see `option-backslash` about including spaces and backslashes).
 * When a file name starts with "./", the '.' is replaced with the path
 * of the current file.  But only when the 'd' flag is not included in
 * 'cpoptions'.  Environment variables are expanded `:set_env`.  Also see
 * `tags-option`.
 * "*", "**" and other wildcards can be used to search for tags files in
 * a directory tree.  See `file-searching`.  E.g., "/lib/** /tags" will
 * find all files named "tags" below "/lib".  The filename itself cannot
 * contain wildcards, it is used as-is.  E.g., "/lib/** /tags?" will find
 * files called "tags?".
 * The `tagfiles()` function can be used to get a list of the file names
 * actually used.
 * If Vim was compiled with the `+emacs_tags` feature, Emacs-style tag
 * files are also supported.  They are automatically recognized.  The
 * default value becomes "./tags,./TAGS,tags,TAGS", unless case
 * differences are ignored (MS-Windows).  `emacs-tags`
 * The use of `:set+=` and `:set-=` is preferred when adding or removing
 * file names from the list.  This avoids problems when a future version
 * uses another default.
 *
 * (default "./tags,tags", when compiled with
 *  `+emacs_tags`: "./tags,./TAGS,tags,TAGS")
 */
export const tags: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "tags");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "tags", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tags");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "tags");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "tags", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tags");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "tags");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "tags", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "tags");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&tags");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&tags", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&tags");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&tags", value);
  },
};

/**
 * When on, the `tagstack` is used normally.  When off, a ":tag" or
 * ":tselect" command with an argument will not push the tag onto the
 * tagstack.  A following ":tag" without an argument, a ":pop" command or
 * any other command that uses the tagstack will use the unmodified
 * tagstack, but does change the pointer to the active entry.
 * Resetting this option is useful when using a ":tag" command in a
 * mapping which should not change the tagstack.
 *
 * (default on)
 */
export const tagstack: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "tagstack");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "tagstack", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tagstack");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "tagstack");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "tagstack", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tagstack");
  },
};

/**
 * The terminal is in charge of Bi-directionality of text (as specified
 * by Unicode).  The terminal is also expected to do the required shaping
 * that some languages (such as Arabic) require.
 * Setting this option implies that 'rightleft' will not be set when
 * 'arabic' is set and the value of 'arabicshape' will be ignored.
 * Note that setting 'termbidi' has the immediate effect that
 * 'arabicshape' is ignored, but 'rightleft' isn't changed automatically.
 * This option is reset when the GUI is started.
 * For further details see `arabic.txt`.
 *
 * (default off, on for "mlterm")
 *
 * *only available when compiled with the `+arabic` feature*
 */
export const termbidi: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "termbidi");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "termbidi", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "termbidi");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "termbidi");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "termbidi", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "termbidi");
  },
};

/**
 * When on, uses `highlight-guifg` and `highlight-guibg` attributes in
 * the terminal (thus using 24-bit color).
 *
 * Requires a ISO-8613-3 compatible terminal.  If setting this option
 * does not work (produces a colorless UI) reading `xterm-true-color`
 * might help.
 *
 * For Win32 console, Windows 10 version 1703 (Creators Update) or later
 * is required. Use this check to find out:
 *
 *     if has('vcon')
 *
 * This requires Vim to be built with the `+vtp` feature.
 *
 * Note that the "cterm" attributes are still used, not the "gui" ones.
 *
 * When using Vim with Windows Terminal, the background of Windows
 * Terminal is normally filled with the Vim background color.  Setting
 * 'termguicolors' and the guibg of the Normal highlight group to NONE
 * will make the background transparent:
 *
 *     :hi Normal guibg=NONE
 *
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *not available when compiled without the `+termguicolors` feature*
 */
export const termguicolors: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "termguicolors");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "termguicolors", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "termguicolors");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "termguicolors");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "termguicolors", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "termguicolors");
  },
};

/**
 * Maximum width of text that is being inserted.  A longer line will be
 * broken after white space to get this width.  A zero value disables
 * this.
 * 'textwidth' is set to 0 when the 'paste' option is set and restored
 * when 'paste' is reset.
 * When 'textwidth' is zero, 'wrapmargin' may be used.  See also
 * 'formatoptions' and `ins-textwidth`.
 * When 'formatexpr' is set it will be used to break the line.
 * NOTE: This option is set to 0 when 'compatible' is set.
 *
 * (default 0)
 */
export const textwidth: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "textwidth");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "textwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "textwidth");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "textwidth");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "textwidth", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "textwidth");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&textwidth");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&textwidth", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&textwidth");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&textwidth", value);
  },
};

/**
 * List of file names, separated by commas, that are used to lookup words
 * for thesaurus completion commands `i_CTRL-X_CTRL-T`.  See
 * `compl-thesaurus`.
 *
 * This option is not used if 'thesaurusfunc' is set, either for the
 * buffer or globally.
 *
 * To include a comma in a file name precede it with a backslash.  Spaces
 * after a comma are ignored, otherwise spaces are included in the file
 * name.  See `option-backslash` about using backslashes.  The use of
 * `:set+=` and `:set-=` is preferred when adding or removing directories
 * from the list.  This avoids problems when a future version uses
 * another default.  Backticks cannot be used in this option for security
 * reasons.
 *
 * (default "")
 */
export const thesaurus: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "thesaurus");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "thesaurus", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "thesaurus");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "thesaurus");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "thesaurus", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "thesaurus");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "thesaurus");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "thesaurus", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "thesaurus");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&thesaurus");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&thesaurus", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&thesaurus");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&thesaurus", value);
  },
};

/**
 * This option specifies a function to be used for thesaurus completion
 * with CTRL-X CTRL-T. `i_CTRL-X_CTRL-T` See `compl-thesaurusfunc`.
 * The value can be the name of a function, a `lambda` or a `Funcref`.
 * See `option-value-function` for more information.
 *
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default: empty)
 *
 * *not available when compiled without the `+eval` feature*
 */
export const thesaurusfunc: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "thesaurusfunc");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "thesaurusfunc", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "thesaurusfunc");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "thesaurusfunc");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "thesaurusfunc", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "thesaurusfunc");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "thesaurusfunc");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "thesaurusfunc", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "thesaurusfunc");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&thesaurusfunc");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&thesaurusfunc", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&thesaurusfunc");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&thesaurusfunc", value);
  },
};

/**
 * When on: The tilde command `"~"` behaves like an operator.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 */
export const tildeop: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "tildeop");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "tildeop", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tildeop");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "tildeop");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "tildeop", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tildeop");
  },
};

/**
 * (default on)
 */
export const timeout: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "timeout");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "timeout", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "timeout");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "timeout");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "timeout", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "timeout");
  },
};

/**
 * These two options together determine the behavior when part of a
 * mapped key sequence or keyboard code has been received:
 *
 * 'timeout'    'ttimeout'         action
 *    off          off             do not time out
 *    on           on or off       time out on :mappings and key codes
 *    off          on              time out on key codes
 *
 * If both options are off, Vim will wait until either the complete
 * mapping or key sequence has been received, or it is clear that there
 * is no mapping or key sequence for the received characters.  For
 * example: if you have mapped "vl" and Vim has received 'v', the next
 * character is needed to see if the 'v' is followed by an 'l'.
 * When one of the options is on, Vim will wait for about 1 second for
 * the next character to arrive.  After that the already received
 * characters are interpreted as single characters.  The waiting time can
 * be changed with the 'timeoutlen' option.
 * On slow terminals or very busy systems timing out may cause
 * malfunctioning cursor keys.  If both options are off, Vim waits
 * forever after an entered `<Esc>` if there are key codes that start
 * with `<Esc>`.  You will have to type `<Esc>` twice.  If you do not have
 * problems with key codes, but would like to have :mapped key
 * sequences not timing out in 1 second, set the 'ttimeout' option and
 * reset the 'timeout' option.
 *
 * NOTE: 'ttimeout' is reset when 'compatible' is set.
 *
 * (default off, set in `defaults.vim`)
 */
export const ttimeout: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "ttimeout");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "ttimeout", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ttimeout");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "ttimeout");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "ttimeout", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ttimeout");
  },
};

/**
 * (default 1000)
 */
export const timeoutlen: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "timeoutlen");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "timeoutlen", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "timeoutlen");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "timeoutlen");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "timeoutlen", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "timeoutlen");
  },
};

/**
 * The time in milliseconds that is waited for a key code or mapped key
 * sequence to complete.  Also used for CTRL-\ CTRL-N and CTRL-\ CTRL-G
 * when part of a command has been typed.
 * Normally only 'timeoutlen' is used and 'ttimeoutlen' is -1.  When a
 * different timeout value for key codes is desired set 'ttimeoutlen' to
 * a non-negative number.
 *
 *         ttimeoutlen     mapping delay      key code delay
 *            < 0          'timeoutlen'       'timeoutlen'
 *           >= 0          'timeoutlen'       'ttimeoutlen'
 *
 * The timeout only happens when the 'timeout' and 'ttimeout' options
 * tell so.  A useful setting would be
 *
 *     :set timeout timeoutlen=3000 ttimeoutlen=100
 *
 * (time out on mapping after three seconds, time out on key codes after
 * a tenth of a second).
 *
 * (default -1, set to 100 in `defaults.vim`)
 */
export const ttimeoutlen: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "ttimeoutlen");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "ttimeoutlen", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ttimeoutlen");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "ttimeoutlen");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "ttimeoutlen", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ttimeoutlen");
  },
};

/**
 * When on, the title of the window will be set to the value of
 * 'titlestring' (if it is not empty), or to:
 *         filename [+=-] (path) - VIM
 * Where:
 *         filename        the name of the file being edited
 *         -               indicates the file cannot be modified, 'ma' off
 *         +               indicates the file was modified
 *         =               indicates the file is read-only
 *         =+              indicates the file is read-only and modified
 *         (path)          is the path of the file being edited
 *         - VIM           the server name `v:servername` or "VIM"
 * Only works if the terminal supports setting window titles
 * (currently Amiga console, Win32 console, all GUI versions and
 * terminals with a non-empty 't_ts' option - these are Unix xterm and
 * iris-ansi by default, where 't_ts' is taken from the builtin termcap).
 *
 * When Vim was compiled with HAVE_X11 defined, the original title will
 * be restored if possible.  The output of ":version" will include "+X11"
 * when HAVE_X11 was defined, otherwise it will be "-X11".  This also
 * works for the icon name `'icon'`.
 * But: When Vim was started with the `-X` argument, restoring the title
 * will not work (except in the GUI).
 * If the title cannot be restored, it is set to the value of 'titleold'.
 * You might want to restore the title outside of Vim then.
 * When using an xterm from a remote machine you can use this command:
 *     rsh machine_name xterm -display $DISPLAY &
 * then the WINDOWID environment variable should be inherited and the
 * title of the window should change back to what it should be after
 * exiting Vim.
 *
 * (default off, on when title can be restored)
 */
export const title: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "title");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "title", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "title");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "title");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "title", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "title");
  },
};

/**
 * Gives the percentage of 'columns' to use for the length of the window
 * title.  When the title is longer, only the end of the path name is
 * shown.  A `'<'` character before the path name is used to indicate this.
 * Using a percentage makes this adapt to the width of the window.  But
 * it won't work perfectly, because the actual number of characters
 * available also depends on the font used and other things in the title
 * bar.  When 'titlelen' is zero the full path is used.  Otherwise,
 * values from 1 to 30000 percent can be used.
 * 'titlelen' is also used for the 'titlestring' option.
 *
 * (default 85)
 */
export const titlelen: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "titlelen");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "titlelen", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "titlelen");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "titlelen");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "titlelen", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "titlelen");
  },
};

/**
 * This option will be used for the window title when exiting Vim if the
 * original title cannot be restored.  Only happens if 'title' is on or
 * 'titlestring' is not empty.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "Thanks for flying Vim")
 */
export const titleold: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "titleold");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "titleold", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "titleold");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "titleold");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "titleold", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "titleold");
  },
};

/**
 * When this option is not empty, it will be used for the title of the
 * window.  This happens only when the 'title' option is on.
 * Only works if the terminal supports setting window titles (currently
 * Amiga console, Win32 console, all GUI versions and terminals with a
 * non-empty 't_ts' option).
 * When Vim was compiled with HAVE_X11 defined, the original title will
 * be restored if possible, see `X11`.
 *
 * When this option contains printf-style '%' items, they will be
 * expanded according to the rules used for 'statusline'.
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 *
 * Example:
 *
 *     :auto BufEnter * let &titlestring = hostname() .. "/" .. expand("%:p")
 *     :set title titlestring=%<%F%=%l/%L-%P titlelen=70
 *
 * The value of 'titlelen' is used to align items in the middle or right
 * of the available space.
 * Some people prefer to have the file name first:
 *
 *     :set titlestring=%t%(\ %M%)%(\ (%{expand(\"%:~:.:h\")})%)%(\ %a%)
 *
 * Note the use of "%{ }" and an expression to get the path of the file,
 * without the file name.  The "%( %)" constructs are used to add a
 * separating space only when needed.
 * NOTE: Use of special characters in 'titlestring' may cause the display
 * to be garbled (e.g., when it contains a CR or NL character).
 * *not available when compiled without the `+statusline` feature*
 *
 * (default "")
 */
export const titlestring: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "titlestring");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "titlestring", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "titlestring");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "titlestring");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "titlestring", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "titlestring");
  },
};

/**
 * List of directory names for undo files, separated with commas.
 * See `'backupdir'` for details of the format.
 * "." means using the directory of the file.  The undo file name for
 * "file.txt" is `".file.txt.un~"`.
 * For other directories the file name is the full path of the edited
 * file, with path separators replaced with "%".
 * When writing: The first directory that exists is used. "." always
 * works, no directories after "." will be used for writing.
 * When reading all entries are tried to find an undo file.  The first
 * undo file that exists is used.  When it cannot be read an error is
 * given, no further entry is used.
 * See `undo-persistence`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default ".")
 *
 * *only when compiled with the `+persistent_undo` feature*
 */
export const undodir: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "undodir");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "undodir", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "undodir");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "undodir");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "undodir", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "undodir");
  },
};

/**
 * When on, Vim automatically saves undo history to an undo file when
 * writing a buffer to a file, and restores undo history from the same
 * file on buffer read.
 * The directory where the undo file is stored is specified by 'undodir'.
 * For more information about this feature see `undo-persistence`.
 * The undo file is not read when 'undoreload' causes the buffer from
 * before a reload to be saved for undo.
 * When 'undofile' is turned off the undo file is NOT deleted.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *only when compiled with the `+persistent_undo` feature*
 */
export const undofile: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "undofile");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "undofile", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "undofile");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "undofile");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "undofile", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "undofile");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&undofile");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&undofile", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&undofile");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&undofile", value);
  },
};

/**
 * Maximum number of changes that can be undone.  Since undo information
 * is kept in memory, higher numbers will cause more memory to be used.
 * Nevertheless, a single change can already use a large amount of memory.
 * Set to 0 for Vi compatibility: One level of undo and "u" undoes
 * itself:
 *
 *     set ul=0
 *
 * But you can also get Vi compatibility by including the 'u' flag in
 * 'cpoptions', and still be able to use CTRL-R to repeat undo.
 * Also see `undo-two-ways`.
 * Set to -1 for no undo at all.  You might want to do this only for the
 * current buffer:
 *
 *     setlocal ul=-1
 *
 * This helps when you run out of memory for a single change.
 *
 * The local value is set to -123456 when the global value is to be used.
 *
 * Also see `clear-undo`.
 *
 * (default 100, 1000 for Unix, VMS and Win32)
 */
export const undolevels: GlobalOrLocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "undolevels");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "undolevels", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "undolevels");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "undolevels");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "undolevels", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "undolevels");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "undolevels");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "undolevels", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "undolevels");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&undolevels");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&undolevels", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&undolevels");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&undolevels", value);
  },
};

/**
 * Save the whole buffer for undo when reloading it.  This applies to the
 * ":e!" command and reloading for when the buffer changed outside of
 * Vim. `FileChangedShell`
 * The save only happens when this option is negative or when the number
 * of lines is smaller than the value of this option.
 * Set this option to zero to disable undo for a reload.
 *
 * When saving undo for a reload, any undo file is not read.
 *
 * Note that this causes the whole buffer to be stored in memory.  Set
 * this option to a lower value if you run out of memory.
 *
 * (default 10000)
 */
export const undoreload: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "undoreload");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "undoreload", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "undoreload");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "undoreload");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "undoreload", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "undoreload");
  },
};

/**
 * After typing this many characters the swap file will be written to
 * disk.  When zero, no swap file will be created at all (see chapter on
 * recovery `crash-recovery`).  'updatecount' is set to zero by starting
 * Vim with the "-n" option, see `startup`.  When editing in readonly
 * mode this option will be initialized to 10000.
 * The swapfile can be disabled per buffer with `'swapfile'`.
 * When 'updatecount' is set from zero to non-zero, swap files are
 * created for all buffers that have 'swapfile' set.  When 'updatecount'
 * is set to zero, existing swap files are not deleted.
 * Also see `'swapsync'`.
 * This option has no meaning in buffers where `'buftype'` is "nofile"
 * or "nowrite".
 *
 * (default: 200)
 */
export const updatecount: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "updatecount");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "updatecount", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "updatecount");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "updatecount");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "updatecount", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "updatecount");
  },
};

/**
 * If this many milliseconds nothing is typed the swap file will be
 * written to disk (see `crash-recovery`).  Also used for the
 * `CursorHold` autocommand event.
 *
 * (default 4000)
 */
export const updatetime: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "updatetime");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "updatetime", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "updatetime");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "updatetime");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "updatetime", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "updatetime");
  },
};

/**
 * A list of the number of spaces that a `<Tab>` counts for while editing,
 * such as inserting a `<Tab>` or using `<BS>`.  It "feels" like variable-
 * width `<Tab>`s are being inserted, while in fact a mixture of spaces
 * and `<Tab>`s is used.  Tab widths are separated with commas, with the
 * final value applying to all subsequent tabs.
 *
 * For example, when editing assembly language files where statements
 * start in the 9th column and comments in the 41st, it may be useful
 * to use the following:
 *
 *     :set varsofttabstop=8,32,8
 *
 * This will set soft tabstops with 8 and 8 + 32 spaces, and 8 more
 * for every column thereafter.
 *
 * Note that the value of `'softtabstop'` will be ignored while
 * 'varsofttabstop' is set.
 *
 * (default "")
 *
 * *only available when compiled with the `+vartabs` feature*
 */
export const varsofttabstop: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "varsofttabstop");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "varsofttabstop", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "varsofttabstop");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "varsofttabstop");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "varsofttabstop", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "varsofttabstop");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&varsofttabstop");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&varsofttabstop", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&varsofttabstop");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&varsofttabstop", value);
  },
};

/**
 * A list of the number of spaces that a `<Tab>` in the file counts for,
 * separated by commas.  Each value corresponds to one tab, with the
 * final value applying to all subsequent tabs. For example:
 *
 *     :set vartabstop=4,20,10,8
 *
 * This will make the first tab 4 spaces wide, the second 20 spaces,
 * the third 10 spaces, and all following tabs 8 spaces.
 *
 * Note that the value of `'tabstop'` will be ignored while 'vartabstop'
 * is set.
 *
 * (default "")
 *
 * *only available when compiled with the `+vartabs` feature*
 */
export const vartabstop: LocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "vartabstop");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "vartabstop", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "vartabstop");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "vartabstop");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "vartabstop", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "vartabstop");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&vartabstop");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&vartabstop", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&vartabstop");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&vartabstop", value);
  },
};

/**
 * When bigger than zero, Vim will give messages about what it is doing.
 * Currently, these messages are given:
 * >= 1    When the viminfo file is read or written.
 * >= 2    When a file is ":source"'ed.
 * >= 4    Shell commands.
 * >= 5    Every searched tags file and include file.
 * >= 8    Files for which a group of autocommands is executed.
 * >= 9    Every executed autocommand.
 * >= 11   Finding items in a path
 * >= 12   Every executed function.
 * >= 13   When an exception is thrown, caught, finished, or discarded.
 * >= 14   Anything pending in a ":finally" clause.
 * >= 15   Every executed Ex command from a script (truncated at 200
 *         characters).
 * >= 16   Every executed Ex command.
 *
 * This option can also be set with the "-V" argument.  See `-V`.
 * This option is also set by the `:verbose` command.
 *
 * When the 'verbosefile' option is set then the verbose messages are not
 * displayed.
 *
 * (default 0)
 */
export const verbose: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "verbose");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "verbose", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "verbose");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "verbose");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "verbose", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "verbose");
  },
};

/**
 * When not empty all messages are written in a file with this name.
 * When the file exists messages are appended.
 * Writing to the file ends when Vim exits or when 'verbosefile' is made
 * empty.  Writes are buffered, thus may not show up for some time.
 * Setting 'verbosefile' to a new value is like making it empty first.
 * The difference with `:redir` is that verbose messages are not
 * displayed when 'verbosefile' is set.
 *
 * (default empty)
 */
export const verbosefile: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "verbosefile");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "verbosefile", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "verbosefile");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "verbosefile");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "verbosefile", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "verbosefile");
  },
};

/**
 * Name of the directory where to store files for `:mkview`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default for Amiga and Win32:
 *  "$VIM/vimfiles/view",
 *  for Unix: `"~/.vim/view"`,
 *  for macOS: "$VIM:vimfiles:view"
 *  for VMS: "sys$login:vimfiles/view")
 *
 * *not available when compiled without the `+mksession` feature*
 */
export const viewdir: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "viewdir");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "viewdir", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "viewdir");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "viewdir");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "viewdir", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "viewdir");
  },
};

/**
 * Changes the effect of the `:mkview` command.  It is a comma-separated
 * list of words.  Each word enables saving and restoring something:
 *    word         save and restore
 *    cursor       cursor position in file and in window
 *    folds        manually created folds, opened/closed folds and local
 *                 fold options
 *    options      options and mappings local to a window or buffer (not
 *                 global values for local options)
 *    localoptions same as "options"
 *    slash        backslashes in file names replaced with forward
 *                 slashes
 *    unix         with Unix end-of-line format (single `<NL>`), even when
 *                 on MS-Windows
 *    curdir       the window-local directory, if set with `:lcd`
 *
 * "slash" and "unix" are useful on MS-Windows when sharing view files
 * with Unix.  The Unix version of Vim cannot source dos format scripts,
 * but the MS-Windows version of Vim can source unix format scripts.
 *
 * (default: "folds,options,cursor,curdir")
 *
 * *not available when compiled without the `+mksession` feature*
 */
export const viewoptions: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "viewoptions");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "viewoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "viewoptions");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "viewoptions");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "viewoptions", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "viewoptions");
  },
};

/**
 * A comma-separated list of these words:
 *     block       Allow virtual editing in Visual block mode.
 *     insert      Allow virtual editing in Insert mode.
 *     all         Allow virtual editing in all modes.
 *     onemore     Allow the cursor to move just past the end of the line
 *     none        When used as the local value, do not allow virtual
 *                 editing even when the global value is set.  When used
 *                 as the global value, "none" is the same as "".
 *     NONE        Alternative spelling of "none".
 *
 * Virtual editing means that the cursor can be positioned where there is
 * no actual character.  This can be halfway into a tab or beyond the end
 * of the line.  Useful for selecting a rectangle in Visual mode and
 * editing a table.
 * "onemore" is not the same, it will only allow moving the cursor just
 * after the last character of the line.  This makes some commands more
 * consistent.  Previously the cursor was always past the end of the line
 * if the line was empty.  But it is far from Vi compatible.  It may also
 * break some plugins or Vim scripts.  For example because `l` can move
 * the cursor after the last character.  Use with care!
 * Using the `$` command will move to the last character in the line, not
 * past it.  This may actually move the cursor to the left!
 * The `g$` command will move to the end of the screen line.
 * It doesn't make sense to combine "all" with "onemore", but you will
 * not get a warning for it.
 * When combined with other words, "none" is ignored.
 * NOTE: This option is set to "" when 'compatible' is set.
 *
 * (default "")
 */
export const virtualedit: GlobalOrLocalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "virtualedit");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "virtualedit", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "virtualedit");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "virtualedit");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "virtualedit", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "virtualedit");
  },
  async getLocal(denops: Denops): Promise<string> {
    const result = await localOptions.get(denops, "virtualedit");
    return (result ?? "") as string;
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "virtualedit", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "virtualedit");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<string> {
    const result = await getbufvar(denops, bufnr, "&virtualedit");
    return (result ?? "") as string;
  },
  setBuffer(denops: Denops, bufnr: number, value: string): Promise<void> {
    return setbufvar(denops, bufnr, "&virtualedit", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<string> {
    const result = await getwinvar(denops, winnr, "&virtualedit");
    return (result ?? "") as string;
  },
  setWindow(denops: Denops, winnr: number, value: string): Promise<void> {
    return setwinvar(denops, winnr, "&virtualedit", value);
  },
};

/**
 * Use a visual bell instead of beeping.  The terminal code to display the
 * visual bell is given with 't_vb'.  When no beep or flash is wanted,
 * use:
 *
 *     :set vb t_vb=
 *
 * If you want a short flash, you can use this on many terminals:
 *
 *     :set vb t_vb=[?5h$<100>[?5l
 *
 * Here $<100> specifies the time, you can use a smaller or bigger value
 * to get a shorter or longer flash.
 *
 * Note: Vim will limit the bell to once per half a second.  This avoids
 * having to wait for the flashing to finish when there are lots of
 * bells, e.g. on key repeat.  This also happens without 'visualbell'
 * set.
 *
 * In the GUI, 't_vb' defaults to `"<Esc>|f"`, which inverts the display
 * for 20 msec.  If you want to use a different time, use `"<Esc>|40f"`,
 * where 40 is the time in msec.
 *
 * Note: When the GUI starts, 't_vb' is reset to its default value.  You
 * might want to set it again in your `gvimrc`.
 *
 * Does not work on the Amiga, you always get a screen flash.
 * Also see 'errorbells'.
 *
 * (default off)
 */
export const visualbell: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "visualbell");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "visualbell", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "visualbell");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "visualbell");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "visualbell", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "visualbell");
  },
};

/**
 * Give a warning message when a shell command is used while the buffer
 * has been changed.
 *
 * (default on)
 */
export const warn: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "warn");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "warn", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "warn");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "warn");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "warn", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "warn");
  },
};

/**
 * Allow specified keys that move the cursor left/right to move to the
 * previous/next line when the cursor is on the first/last character in
 * the line.  Concatenate characters to allow this for these keys:
 *         char   key        mode
 *          b    `<BS>`       Normal and Visual
 *          s    `<Space>`    Normal and Visual
 *          h    "h"        Normal and Visual (not recommended)
 *          l    "l"        Normal and Visual (not recommended)
 *          <    `<Left>`     Normal and Visual
 *          >    `<Right>`    Normal and Visual
 *          `~`    `"~"`        Normal
 *          [    `<Left>`     Insert and Replace
 *          ]    `<Right>`    Insert and Replace
 * For example:
 *
 *     :set ww=<,>,[,]
 *
 * allows wrap only when cursor keys are used.
 * When the movement keys are used in combination with a delete or change
 * operator, the `<EOL>` also counts for a character.  This makes "3h"
 * different from "3dh" when the cursor crosses the end of a line.  This
 * is also true for "x" and "X", because they do the same as "dl" and
 * "dh".  If you use this, you may also want to use the mapping
 * `":map <BS> X"` to make backspace delete the character in front of the
 * cursor.
 * When 'l' is included and it is used after an operator at the end of a
 * line (not an empty line) then it will not move to the next line.  This
 * makes "dl", "cl", "yl" etc. work normally.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (Vim default: "b,s", Vi default: "")
 */
export const whichwrap: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "whichwrap");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "whichwrap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "whichwrap");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "whichwrap");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "whichwrap", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "whichwrap");
  },
};

/**
 * Character you have to type to start wildcard expansion in the
 * command-line, as specified with 'wildmode'.
 * More info here: `cmdline-completion`.
 * The character is not recognized when used inside a macro.  See
 * 'wildcharm' for that.
 * Some keys will not work, such as CTRL-C, `<CR>` and Enter.
 * Although 'wc' is a number option, you can set it to a special key:
 *
 *     :set wc=<Tab>
 *
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (Vim default: `<Tab>`, Vi default: CTRL-E)
 */
export const wildchar: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "wildchar");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "wildchar", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wildchar");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "wildchar");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "wildchar", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wildchar");
  },
};

/**
 * 'wildcharm' works exactly like 'wildchar', except that it is
 * recognized when used inside a macro.  You can find "spare" command-line
 * keys suitable for this option by looking at `ex-edit-index`.  Normally
 * you'll never actually type 'wildcharm', just use it in mappings that
 * automatically invoke completion mode, e.g.:
 *
 *     :set wcm=<C-Z>
 *     :cnoremap ss so $vim/sessions/*.vim<C-Z>
 *
 * Then after typing :ss you can use CTRL-P & CTRL-N.
 *
 * (default: none (0))
 */
export const wildcharm: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "wildcharm");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "wildcharm", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wildcharm");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "wildcharm");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "wildcharm", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wildcharm");
  },
};

/**
 * A list of file patterns.  A file that matches with one of these
 * patterns is ignored when expanding `wildcards`, completing file or
 * directory names, and influences the result of `expand()`, `glob()` and
 * `globpath()` unless a flag is passed to disable this.
 * The pattern is used like with `:autocmd`, see `autocmd-patterns`.
 * Also see 'suffixes'.
 * Example:
 *
 *     :set wildignore=*.o,*.obj
 *
 * The use of `:set+=` and `:set-=` is preferred when adding or removing
 * a pattern from the list.  This avoids problems when a future version
 * uses another default.
 *
 * (default "")
 */
export const wildignore: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "wildignore");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "wildignore", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wildignore");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "wildignore");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "wildignore", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wildignore");
  },
};

/**
 * When set case is ignored when completing file names and directories.
 * Has no effect when 'fileignorecase' is set.
 * Does not apply when the shell is used to expand wildcards, which
 * happens when there are special characters.
 *
 * (default off)
 */
export const wildignorecase: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "wildignorecase");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "wildignorecase", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wildignorecase");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "wildignorecase");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "wildignorecase", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wildignorecase");
  },
};

/**
 * When 'wildmenu' is on, command-line completion operates in an enhanced
 * mode.  On pressing 'wildchar' (usually `<Tab>`) to invoke completion,
 * the possible matches are shown.
 * When 'wildoptions' contains "pum", then the completion matches are
 * shown in a popup menu.  Otherwise they are displayed just above the
 * command line, with the first match highlighted (overwriting the status
 * line, if there is one).
 * Keys that show the previous/next match, such as `<Tab>` or
 * CTRL-P/CTRL-N, cause the highlight to move to the appropriate match.
 * When 'wildmode' is used, "wildmenu" mode is used where "full" is
 * specified.  "longest" and "list" do not start "wildmenu" mode.
 * You can check the current mode with `wildmenumode()`.
 * If there are more matches than can fit in the line, a ">" is shown on
 * the right and/or a `"<"` is shown on the left.  The status line scrolls
 * as needed.
 * The "wildmenu" mode is abandoned when a key is hit that is not used
 * for selecting a completion.
 * While the "wildmenu" is active, not using the popup menu, the
 * following keys have special meanings:
 *
 * `<Left>` `<Right>`  - select previous/next match (like CTRL-P/CTRL-N)
 * `<Down>`          - in filename/menu name completion: move into a
 *                   subdirectory or submenu.
 * `<CR>`            - in menu completion, when the cursor is just after a
 *                   dot: move into a submenu.
 * `<Up>`            - in filename/menu name completion: move up into
 *                   parent directory or parent menu.
 *
 * When using the popup menu for command line completion, the following
 * keys have special meanings:
 * `<Down>`          - select next match (like CTRL-N)
 * `<Left>`          - in filename/menu name completion: move up into
 *                   parent directory or parent menu.
 * `<Right>`         - in filename/menu name completion: move into a
 *                   subdirectory or submenu.
 * `<Up>`            - select previous match (like CTRL-P)
 * CTRL-E          - end completion, go back to what was there before
 *                   selecting a match.
 * CTRL-N          - go to the next entry
 * CTRL-P          - go to the previous entry
 * CTRL-Y          - accept the currently selected match and stop
 *                   completion.
 *
 * This makes the menus accessible from the console `console-menus`.
 *
 * If you prefer the `<Left>` and `<Right>` keys to move the cursor instead
 * of selecting a different match, use this:
 *
 *     :cnoremap <Left> <Space><BS><Left>
 *     :cnoremap <Right> <Space><BS><Right>
 *
 * The "WildMenu" highlighting is used for displaying the current match
 * `hl-WildMenu`.
 *
 * (default off, set in `defaults.vim`)
 */
export const wildmenu: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "wildmenu");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "wildmenu", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wildmenu");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "wildmenu");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "wildmenu", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wildmenu");
  },
};

/**
 * Completion mode that is used for the character specified with
 * 'wildchar'.  It is a comma-separated list of up to four parts.  Each
 * part specifies what to do for each consecutive use of 'wildchar'.  The
 * first part specifies the behavior for the first use of 'wildchar',
 * The second part for the second use, etc.
 *
 * Each part consists of a colon separated list consisting of the
 * following possible values:
 * ""              Complete only the first match.
 * "full"          Complete the next full match.  After the last match,
 *                 the original string is used and then the first match
 *                 again.  Will also start 'wildmenu' if it is enabled.
 * "longest"       Complete till longest common string.  If this doesn't
 *                 result in a longer string, use the next part.
 * "list"          When more than one match, list all matches.
 * "lastused"      When completing buffer names and more than one buffer
 *                 matches, sort buffers by time last used (other than
 *                 the current buffer).
 * When there is only a single match, it is fully completed in all cases.
 *
 * Examples of useful colon-separated values:
 * "longest:full"  Like "longest", but also start 'wildmenu' if it is
 *                 enabled.  Will not complete to the next full match.
 * "list:full"     When more than one match, list all matches and
 *                 complete first match.
 * "list:longest"  When more than one match, list all matches and
 *                 complete till longest common string.
 * "list:lastused" When more than one buffer matches, list all matches
 *                 and sort buffers by time last used (other than the
 *                 current buffer).
 *
 * Examples:
 *
 *     :set wildmode=full
 *
 * Complete first full match, next match, etc.  (the default)
 *
 *     :set wildmode=longest,full
 *
 * Complete longest common string, then each full match
 *
 *     :set wildmode=list:full
 *
 * List all matches and complete each full match
 *
 *     :set wildmode=list,full
 *
 * List all matches without completing, then each full match
 *
 *     :set wildmode=longest,list
 *
 * Complete longest common string, then list alternatives.
 * More info here: `cmdline-completion`.
 *
 * (Vim default: "full")
 */
export const wildmode: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "wildmode");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "wildmode", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wildmode");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "wildmode");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "wildmode", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wildmode");
  },
};

/**
 * A list of words that change how `cmdline-completion` is done.
 * The following values are supported:
 *   fuzzy         Use `fuzzy-matching` to find completion matches. When
 *                 this value is specified, wildcard expansion will not
 *                 be used for completion.  The matches will be sorted by
 *                 the "best match" rather than alphabetically sorted.
 *                 This will find more matches than the wildcard
 *                 expansion. Currently fuzzy matching based completion
 *                 is not supported for file and directory names and
 *                 instead wildcard expansion is used.
 *   pum           Display the completion matches using the popup menu
 *                 in the same style as the `ins-completion-menu`.
 *   tagfile       When using CTRL-D to list matching tags, the kind of
 *                 tag and the file of the tag is listed.  Only one match
 *                 is displayed per line.  Often used tag kinds are:
 *                         d       #define
 *                         f       function
 *
 * (default "")
 */
export const wildoptions: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "wildoptions");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "wildoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wildoptions");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "wildoptions");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "wildoptions", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wildoptions");
  },
};

/**
 * Some GUI versions allow the access to menu entries by using the ALT
 * key in combination with a character that appears underlined in the
 * menu.  This conflicts with the use of the ALT key for mappings and
 * entering special characters.  This option tells what to do:
 *   no    Don't use ALT keys for menus.  ALT key combinations can be
 *         mapped, but there is no automatic handling.  This can then be
 *         done with the `:simalt` command.
 *   yes   ALT key handling is done by the windowing system.  ALT key
 *         combinations cannot be mapped.
 *   menu  Using ALT in combination with a character that is a menu
 *         shortcut key, will be handled by the windowing system.  Other
 *         keys can be mapped.
 * If the menu is disabled by excluding 'm' from 'guioptions', the ALT
 * key is never used for the menu.
 * This option is not used for `<F10>`; on Win32 and with GTK `<F10>` will
 * select the menu, unless it has been mapped.
 *
 * (default "menu")
 *
 * *only used in Win32, Motif, GTK and Photon GUI*
 */
export const winaltkeys: GlobalOption<string> = {
  async get(denops: Denops): Promise<string> {
    const result = await options.get(denops, "winaltkeys");
    return (result ?? "") as string;
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "winaltkeys", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winaltkeys");
  },
  async getGlobal(denops: Denops): Promise<string> {
    const result = await globalOptions.get(denops, "winaltkeys");
    return (result ?? "") as string;
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "winaltkeys", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "winaltkeys");
  },
};

/**
 * Window height used for `CTRL-F` and `CTRL-B` when there is only one
 * window and the value is smaller than 'lines' minus one.  The screen
 * will scroll 'window' minus two lines, with a minimum of one.
 * When 'window' is equal to 'lines' minus one CTRL-F and CTRL-B scroll
 * in a much smarter way, taking care of wrapping lines.
 * When resizing the Vim window, the value is smaller than 1 or more than
 * or equal to 'lines' it will be set to 'lines' minus 1.
 * Note: Do not confuse this with the height of the Vim window, use
 * 'lines' for that.
 *
 * (default screen height - 1)
 */
export const window: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "window");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "window", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "window");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "window");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "window", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "window");
  },
};

/**
 * Minimal number of lines for the current window.  This is not a hard
 * minimum, Vim will use fewer lines if there is not enough room.  If the
 * focus goes to a window that is smaller, its size is increased, at the
 * cost of the height of other windows.
 * Set 'winheight' to a small number for normal editing.
 * Set it to 999 to make the current window fill most of the screen.
 * Other windows will be only 'winminheight' high.  This has the drawback
 * that ":all" will create only two windows.  To avoid "vim -o 1 2 3 4"
 * to create only two windows, set the option after startup is done,
 * using the `VimEnter` event:
 *
 *     au VimEnter * set winheight=999
 *
 * Minimum value is 1.
 * The height is not adjusted after one of the commands that change the
 * height of the current window.
 * 'winheight' applies to the current window.  Use 'winminheight' to set
 * the minimal height for other windows.
 *
 * (default 1)
 */
export const winheight: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "winheight");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "winheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winheight");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "winheight");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "winheight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "winheight");
  },
};

/**
 * Keep the window height when windows are opened or closed and
 * 'equalalways' is set.  Also for `CTRL-W_=`.  Set by default for the
 * `preview-window` and `quickfix-window`.
 * The height may be changed anyway when running out of room.
 *
 * (default off)
 */
export const winfixheight: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "winfixheight");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "winfixheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winfixheight");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "winfixheight");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "winfixheight", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "winfixheight");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&winfixheight");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&winfixheight", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&winfixheight");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&winfixheight", value);
  },
};

/**
 * Keep the window width when windows are opened or closed and
 * 'equalalways' is set.  Also for `CTRL-W_=`.
 * The width may be changed anyway when running out of room.
 *
 * (default off)
 */
export const winfixwidth: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "winfixwidth");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "winfixwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winfixwidth");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "winfixwidth");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "winfixwidth", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "winfixwidth");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&winfixwidth");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&winfixwidth", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&winfixwidth");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&winfixwidth", value);
  },
};

/**
 * The minimal height of a window, when it's not the current window.
 * This is a hard minimum, windows will never become smaller.
 * When set to zero, windows may be "squashed" to zero lines (i.e. just a
 * status bar) if necessary.  They will return to at least one line when
 * they become active (since the cursor has to have somewhere to go.)
 * Use 'winheight' to set the minimal height of the current window.
 * This option is only checked when making a window smaller.  Don't use a
 * large number, it will cause errors when opening more than a few
 * windows.  A value of 0 to 3 is reasonable.
 *
 * (default 1)
 */
export const winminheight: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "winminheight");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "winminheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winminheight");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "winminheight");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "winminheight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "winminheight");
  },
};

/**
 * The minimal width of a window, when it's not the current window.
 * This is a hard minimum, windows will never become smaller.
 * When set to zero, windows may be "squashed" to zero columns (i.e. just
 * a vertical separator) if necessary.  They will return to at least one
 * line when they become active (since the cursor has to have somewhere
 * to go.)
 * Use 'winwidth' to set the minimal width of the current window.
 * This option is only checked when making a window smaller.  Don't use a
 * large number, it will cause errors when opening more than a few
 * windows.  A value of 0 to 12 is reasonable.
 *
 * (default 1)
 */
export const winminwidth: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "winminwidth");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "winminwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winminwidth");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "winminwidth");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "winminwidth", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "winminwidth");
  },
};

/**
 * Minimal number of columns for the current window.  This is not a hard
 * minimum, Vim will use fewer columns if there is not enough room.  If
 * the current window is smaller, its size is increased, at the cost of
 * the width of other windows.  Set it to 999 to make the current window
 * always fill the screen.  Set it to a small number for normal editing.
 * The width is not adjusted after one of the commands to change the
 * width of the current window.
 * 'winwidth' applies to the current window.  Use 'winminwidth' to set
 * the minimal width for other windows.
 *
 * (default 20)
 */
export const winwidth: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "winwidth");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "winwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winwidth");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "winwidth");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "winwidth", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "winwidth");
  },
};

/**
 * This option changes how text is displayed.  It doesn't change the text
 * in the buffer, see 'textwidth' for that.
 * When on, lines longer than the width of the window will wrap and
 * displaying continues on the next line.  When off lines will not wrap
 * and only part of long lines will be displayed.  When the cursor is
 * moved to a part that is not shown, the screen will scroll
 * horizontally.
 * The line will be broken in the middle of a word if necessary.  See
 * 'linebreak' to get the break at a word boundary.
 * To make scrolling horizontally a bit more useful, try this:
 *
 *     :set sidescroll=5
 *     :set listchars+=precedes:<,extends:>
 *
 * See 'sidescroll', 'listchars' and `wrap-off`.
 * This option can't be set from a `modeline` when the 'diff' option is
 * on.
 *
 * (default on)
 */
export const wrap: LocalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "wrap");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "wrap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wrap");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    const result = await localOptions.get(denops, "wrap");
    return Boolean(result ?? false);
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "wrap", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "wrap");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<boolean> {
    const result = await getbufvar(denops, bufnr, "&wrap");
    return Boolean(result ?? false);
  },
  setBuffer(denops: Denops, bufnr: number, value: boolean): Promise<void> {
    return setbufvar(denops, bufnr, "&wrap", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<boolean> {
    const result = await getwinvar(denops, winnr, "&wrap");
    return Boolean(result ?? false);
  },
  setWindow(denops: Denops, winnr: number, value: boolean): Promise<void> {
    return setwinvar(denops, winnr, "&wrap", value);
  },
};

/**
 * Number of characters from the right window border where wrapping
 * starts.  When typing text beyond this limit, an `<EOL>` will be inserted
 * and inserting continues on the next line.
 * Options that add a margin, such as 'number' and 'foldcolumn', cause
 * the text width to be further reduced.  This is Vi compatible.
 * When 'textwidth' is non-zero, this option is not used.
 * This option is set to 0 when 'paste' is set and restored when 'paste'
 * is reset.
 * See also 'formatoptions' and `ins-textwidth`.
 *
 * (default 0)
 */
export const wrapmargin: LocalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "wrapmargin");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "wrapmargin", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wrapmargin");
  },
  async getLocal(denops: Denops): Promise<number> {
    const result = await localOptions.get(denops, "wrapmargin");
    return (result ?? 0) as number;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "wrapmargin", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "wrapmargin");
  },
  async getBuffer(denops: Denops, bufnr: number): Promise<number> {
    const result = await getbufvar(denops, bufnr, "&wrapmargin");
    return (result ?? 0) as number;
  },
  setBuffer(denops: Denops, bufnr: number, value: number): Promise<void> {
    return setbufvar(denops, bufnr, "&wrapmargin", value);
  },
  async getWindow(denops: Denops, winnr: number): Promise<number> {
    const result = await getwinvar(denops, winnr, "&wrapmargin");
    return (result ?? 0) as number;
  },
  setWindow(denops: Denops, winnr: number, value: number): Promise<void> {
    return setwinvar(denops, winnr, "&wrapmargin", value);
  },
};

/**
 * Searches wrap around the end of the file.  Also applies to `]s` and
 * `[s`, searching for spelling mistakes.
 *
 * (default on)
 */
export const wrapscan: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "wrapscan");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "wrapscan", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wrapscan");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "wrapscan");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "wrapscan", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wrapscan");
  },
};

/**
 * Allows writing files.  When not set, writing a file is not allowed.
 * Can be used for a view-only mode, where modifications to the text are
 * still allowed.  Can be reset with the `-m` or `-M` command line
 * argument.  Filtering text is still possible, even though this requires
 * writing a temporary file.
 *
 * (default on)
 */
export const write: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "write");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "write", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "write");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "write");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "write", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "write");
  },
};

/**
 * Allows writing to any file with no need for "!" override.
 *
 * (default off)
 */
export const writeany: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "writeany");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "writeany", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "writeany");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "writeany");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "writeany", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "writeany");
  },
};

/**
 * Make a backup before overwriting a file.  The backup is removed after
 * the file was successfully written, unless the 'backup' option is
 * also on.
 * WARNING: Switching this option off means that when Vim fails to write
 * your buffer correctly and then, for whatever reason, Vim exits, you
 * lose both the original file and what you were writing.  Only reset
 * this option if your file system is almost full and it makes the write
 * fail (and make sure not to exit Vim until the write was successful).
 * See `backup-table` for another explanation.
 * When the 'backupskip' pattern matches, a backup is not made anyway.
 * Depending on 'backupcopy' the backup is a new file or the original
 * file renamed (and a new file is written).
 * NOTE: This option is set to the default value when 'compatible' is
 * set.
 *
 * (default on with `+writebackup` feature, off
 *  otherwise)
 */
export const writebackup: GlobalOption<boolean> = {
  async get(denops: Denops): Promise<boolean> {
    const result = await options.get(denops, "writebackup");
    return Boolean(result ?? false);
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "writebackup", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "writebackup");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    const result = await globalOptions.get(denops, "writebackup");
    return Boolean(result ?? false);
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "writebackup", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "writebackup");
  },
};

/**
 * The number of milliseconds to wait for each character sent to the
 * screen.  When non-zero, characters are sent to the terminal one by
 * one.  For debugging purposes.
 *
 * (default 0)
 */
export const writedelay: GlobalOption<number> = {
  async get(denops: Denops): Promise<number> {
    const result = await options.get(denops, "writedelay");
    return (result ?? 0) as number;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "writedelay", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "writedelay");
  },
  async getGlobal(denops: Denops): Promise<number> {
    const result = await globalOptions.get(denops, "writedelay");
    return (result ?? 0) as number;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "writedelay", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "writedelay");
  },
};
