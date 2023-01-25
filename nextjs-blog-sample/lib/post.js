import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルデータを取り出す
export function getPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");

        // マークダウンファイルを文字列で読みとる
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        }
    });
    return allPostsData;
}