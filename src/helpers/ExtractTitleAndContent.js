export function ExtractTitleAndContent(md) {
    const startDelimiter = '---';
    const endDelimiter = '---';

    const startDelimiterIndex = md.indexOf(startDelimiter);
    const endDelimiterIndex = md.indexOf(endDelimiter, startDelimiterIndex + startDelimiter.length);

    const frontMatter = md.substring(startDelimiterIndex + startDelimiter.length, endDelimiterIndex).trim();
    const content = md.substring(endDelimiterIndex + endDelimiter.length).trim();

    const titleMatch = frontMatter.match(/title: (.+?)$/);

    let title = titleMatch ? titleMatch[1].trim().replace(/^['"](.*)['"]$/, '$1') : "";

    return { title, content };
}
