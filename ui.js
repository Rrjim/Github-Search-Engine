class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Display profile
    showProfile(user) {
        //  console.log(user);

        this.profile.innerHTML = `
          <div class="card card-body mb-3">
            <div class="row">
              <div class="col-md-4">
                <img class="img-fuild mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn 
                btn-primary btn-block mb-4">View Profile</a>
              </div>
              <div class="col-md-9">
                <span class="btn" color="black">Public Repos: ${user.public_repos}</span>
                <span class="btn">Public Gists: ${user.public_gists}</span>
                <span class="btn">Public Followers: ${user.followers}</span>
                <span class="btn">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/Blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
              </div>
            </div>
          </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;

    }

    // Show user repos
    showRepos(repos) {
        let output = '';

        repos.forEach(function(repo) {
            output += `
          <div class="card card-body mb-2">
            <div class="row">
              <div class="col-md-6">
                <a href="${repo.html_url}" target="blank">${repo.name}</a>
              </div>
              <div class="col-md-6">
              <span class="btn" color="black">Stars: ${repo.stargazers_count}</span>
              <span class="btn">Watchers: ${repo.watchers_count}</span>
              <span class="btn">Forks: ${repo.forms_count}</span>
              </div>
            </div>
          </div>
          `;

        })

        // Output repos
        document.getElementById('repos').innerHTML = output;

    }

    // Show alert message if no profile was found
    showAlert(message, className) {
        //Clear any remaining alerts
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);
        // Timeout after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        // if there is an alert
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear Profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}