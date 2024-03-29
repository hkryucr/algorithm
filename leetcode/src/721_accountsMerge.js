/*
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
var accountsMerge = function(accounts) {
    
};

/*
class AccountsMergeSol {
    public List<List<String>> accountsMerge(List<List<String>> accounts){
        Map<String, Integer> emailsToAccountNum = new HashMap<>();
        List<List<String>> res = new ArrayList<>();
        if(accounts == null||accounts.size() == 0) 
            return res;
        TreeSet<String> set = new TreeSet<>();
        int n = accounts.size();
        UnionFind uf = new UnionFind(n);
        String email;

        for(int i = 0 ; i < n ; i++){
            for(int j = 1; j < accounts.get(i).size(); j++){
                email = accounts.get(i).get(j);
                if(!emailsToAccountNum.containsKey(email)){
                    emailsToAccountNum.put(email, i);
                } else{
                    uf.union(emailsToAccountNum.get(email), i);
                }
            }
        }

        Map<Integer, TreeSet<String>> accountNumToClusteredEmails = new HashMap<>();

        for(int i = 0; i < n ; i++){
            int root = uf.find(i);
            if(!accountNumToClusteredEmails.containsKey(root)){
                accountNumToClusteredEmails.put(root, new TreeSet<>());
            }
            List<String> emails = accounts.get(i).subList(1, accounts.get(i).size());
            TreeSet<String> rootEmails = accountNumToClusteredEmails.get(root);
            rootEmails.addAll(emails);
            //accountNumToClusteredEmails.put(root, rootEmails);
        }

        for(int i : accountNumToClusteredEmails.keySet()){
            set = accountNumToClusteredEmails.get(i);
            List<String> l = new LinkedList<>();
            for(String s : set){
                l.add(s);
            }
            String name = accounts.get(i).get(0);
            l.add(0, name);
            res.add(l);
        }
        return res;

    }

    class UnionFind {
        int[] parent;
        //int n;
        public UnionFind(int n){
            //this.n = n;
            this.parent = new int[n];
            for(int i = 0 ; i < n ;i++)
                parent[i] = i;
        }

        public void union(int i, int j){
            int iroot = find(i);
            int jroot = find(j);
            if(iroot==jroot)
                return;
            parent[iroot]= jroot;
        }

        public int find(int i){
            while(i!=parent[i]){
                parent[i] = parent[parent[i]];
                i = parent[i];
            }
            return i;
        }
    }
}


*/