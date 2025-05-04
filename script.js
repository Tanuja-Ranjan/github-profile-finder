

const url = "https://api.github.com/users";
const searchInputEl = document.getElementById("searchInput");
const searchButtonEl = document.getElementById("searchButton");
const profileContainerEl = document.getElementById("profileContainer")
const loadingEl = document.getElementById("loading");
const generateProfile = (profile) => {
    return ` <div class="profile-card">
        <div class="top-section">
          <div class="profile-intro">
            <img src="${profile.avatar_url}" alt="avatar" />
            <div class="user-name">
              <h1>${profile.name}</h1>
              <h1>@${profile.login}</h1>
            </div>
    
          </div>
          <div class="check-profile">
           <a href="${profile.html_url}">
            <button class="primary-button" id="checkProfileButton">Check Profile</button>
           </a>
               </div>
        </div>
    
        <div class="about-section">
          <h1>About</h1>
          <p>${profile.bio}</p>
        </div>
    
        <div class="bottom-section">
          <div class="follow-section">
            <h1>Followers</h1>
            <p>${profile.followers} </p>
          </div>
          <div class="follow-section">
            <h1>Followings</h1>
            <p>${profile.followings}</p>
          </div>
          <div class="follow-section">
            <h1>Repos</h1>
            <p>${profile.public_repos}</p>
          </div>
        </div>
        </div>  `
}


const fetchProfile = async () => {

    const username = searchInputEl.value;

    loadingEl.innerText = "loading....";
    loadingEl.style.color = "black";
try {
    const response = await fetch(`${url}/${username}`);
    const data = await response.json();
    if(data.bio){
        loadingEl.innerText="";
        profileContainerEl.innerHTML= generateProfile(data);
    }else{
loadingEl.innerHTML=data.message;
loadingEl.style.color="red";
profileContainerEl.innerText=""; 
    }
    
} catch (error) {
    console.log({error});
loadingEl.innerText="";
}
};

searchButtonEl.addEventListener("click", fetchProfile );



