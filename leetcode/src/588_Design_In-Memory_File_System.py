'''
588. Design In-Memory File System

Design an in-memory file system to simulate the following functions:

ls: Given a path in string format. If it is a file path, return a list that only contains this file's name. If it is a directory path, return the list of file and directory names in this directory. Your output (file and directory names together) should in lexicographic order.

mkdir: Given a directory path that does not exist, you should make a new directory according to the path. If the middle directories in the path don't exist either, you should create them as well. This function has void return type.

addContentToFile: Given a file path and file content in string format. If the file doesn't exist, you need to create that file containing given content. If the file already exists, you need to append given content to original content. This function has void return type.

readContentFromFile: Given a file path, return its content in string format.

Example:

Input: 
["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]
[[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]

Output:
[null,[],null,null,["a"],"hello"]

Explanation:
filesystem
 

Note:

You can assume all file or directory paths are absolute paths which begin with / and do not end with / except that the path is just "/".
You can assume that all operations will be passed valid parameters and users will not attempt to retrieve file content or list a directory or file that does not exist.
You can assume that all directory names and file names only contain lower-case letters, and same names won't exist in the same directory.


'''

class FileSystem:
    def __init__(self):
        self.directories = {}
        
    def ls(self, path: str) -> List[str]:
        node = self.directories
        if path != "/":
            path_arr = path.split("/")
            for i, directory in enumerate(path_arr):
                if i == 0: continue
                if not directory in node:
                    return []
                if type(node[directory]) == str:
                    return [directory]
                node = node[directory]
        res = [ key for key, value in node.items()]
        return sorted(res)

    def mkdir(self, path: str) -> None:
        path_arr = path.split("/")
        node = self.directories
        for i, directory in enumerate(path_arr):
            if i == 0: continue
            if not directory in node:
                node[directory] = {}
            node = node[directory]
        return None

    def addContentToFile(self, filePath: str, content: str) -> None:
        path_arr = filePath.split("/")
        directory_path = path_arr[1:-1]
        file_name = path_arr[-1]

        node = self.directories
        for i, directory in enumerate(directory_path):
            if not directory in node:
                node[directory] = {}
            node = node[directory]
        if file_name in node:
            node[file_name] += content
        else:
            node[file_name] = content
        return None

    def readContentFromFile(self, filePath: str) -> str:
        path_arr = filePath.split("/")
        node = self.directories
        for i, directory in enumerate(path_arr):
            if i == 0: continue
            if not directory in node:
                node[directory] = {}
            node = node[directory]
        return node


# Your FileSystem object will be instantiated and called as such:
# obj = FileSystem()
# param_1 = obj.ls(path)
# obj.mkdir(path)
# obj.addContentToFile(filePath,content)
# param_4 = obj.readContentFromFile(filePath)