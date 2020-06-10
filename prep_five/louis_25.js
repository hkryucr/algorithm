/*
721. Accounts Merge

Given a list accounts, each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some email that is common to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

Example 1:
Input: 
accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
Output: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
Explanation: 
The first and third John's are the same person as they have the common email "johnsmith@mail.com".
The second John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
Note:

The length of accounts will be in the range [1, 1000].
The length of accounts[i] will be in the range [1, 10].
The length of accounts[i][j] will be in the range [1, 30].
*/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

function UF(acc) {
    this.parent = this
    this.name = acc[0]
    this.emails = new Set(acc.slice(1))
}


function accountsMerge(accounts) {
    let accountUfs = []
    for (let i = 0; i < accounts.length; i++) {
        const currentAcc = accounts[i]
        // for each email, if the email is included in a UF, then all emails from this account are added to the uf
        const emails = currentAcc.slice(1)
        let foundUf = null
        let idx = 0
        
        while (!foundUf && idx < accountUfs.length) {
            let currentUf = accountUfs[idx]
            for (let j = 0; j < emails.length; j++) {
                let currEmail = emails[j]
                if (currentUf.name === currentAcc[0] && currentUf.emails.has(currEmail)) {
                    foundUf = currentUf
                }
            }
            idx++
        }

        if (foundUf) {
            // add emails to this uf
            for (let j = 0; j < emails.length; j++) {
                foundUf.add(emails[j])
            }
        }
        else {
            let uf = new UF(currentAcc)
            accountUfs.push(uf)
        }

    }
    let result = []
    for (let i = 0; i < accountUfs.length; i++) {
        let currentUf = accountUfs[i]
        let temp = []
        temp.push(currentUf.name)
        currentUf.emails.forEach(email => {
            temp.push(email)
        })
        result.push(temp)
    }
    return result
}

/*
[["David","David0@m.co","David1@m.co"],["David","David3@m.co","David4@m.co"],["David","David4@m.co","David5@m.co"],["David","David2@m.co","David3@m.co"],["David","David1@m.co","David2@m.co"]]

[["David","David0@m.co","David1@m.co","David2@m.co","David3@m.co","David4@m.co","David5@m.co"]]
*/

