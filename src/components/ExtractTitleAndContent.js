export function ExtractTitleAndContent (md)  {
    const delimiterIndex = md.indexOf('---', 11);
    const title = md.substring(11, delimiterIndex).trim();
    const content = md.substring(delimiterIndex + 11).trim();
    return { title, content };
};