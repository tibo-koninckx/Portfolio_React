export function ExtractTitleAndContent (md)  {
    const delimiterIndex = md.indexOf('---', 4);
    const title = md.substring(4, delimiterIndex).trim();
    const content = md.substring(delimiterIndex + 4).trim();
    return { title, content };
};