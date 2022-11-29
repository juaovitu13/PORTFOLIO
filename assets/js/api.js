
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/juaovitu13/PORTFOLIO/master/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
