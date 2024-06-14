class Github {
    constructor() {
        this.client_id = 'f7ee95d13ec3d66e060f';
        this.client_secret = '1fdbd1f9afb51960b2b1851a12ef62ab8eac8c89';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }


    // Example github user api:  https://api.github.com/users/bradtraversy
    // Example github user repos api: https://api.github.com/users/bradtraversy/repos

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }

    }
}