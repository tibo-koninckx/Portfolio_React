export function ExtractFrontmatter(md) {
    const startDelimiter = '---';
    const endDelimiter = '---';

    const startDelimiterIndex = md.indexOf(startDelimiter);
    const endDelimiterIndex = md.indexOf(endDelimiter, startDelimiterIndex + startDelimiter.length);

    const frontMatter = md.substring(startDelimiterIndex + startDelimiter.length, endDelimiterIndex).trim();
    const content = md.substring(endDelimiterIndex + endDelimiter.length).trim();

    const titleMatch = frontMatter.match(/title: (.+?)$/);
    const descriptionMatch = frontMatter.match(/description: (.+?)$/);
    const dateMatch = frontMatter.match(/date: (.+?)$/);

    let title = titleMatch ? titleMatch[1].trim().replace(/^['"](.*)['"]$/, '$1') : "";
    let description = descriptionMatch ? descriptionMatch[1].trim().replace(/^['"](.*)['"]$/, '$1') : "";
    let date = dateMatch ? dateMatch[1].trim().replace(/^['"](.*)['"]$/, '$1') : "";

    return { title, description, date, content };
}
