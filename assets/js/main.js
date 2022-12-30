

function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name
    
    const name = document.getElementById('profile.name');
    name.innerHTML = profileData.name
    const job = document.getElementById('profile.job');
    job.innerHTML = profileData.job
    const location = document.getElementById('profile.location');
    location.innerHTML = profileData.location
    const phone = document.getElementById('profile.phone');
    phone.innerHTML = profileData.phone
    phone.href = `tel: ${profileData.phone}`
    const email = document.getElementById('profile.email');
    email.innerHTML = profileData.email
    email.href = `mailto: ${profileData.email}`
    
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData){
    const languages = document.getElementById('profile.languages')

    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')

    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `<li>
            <h3 ${project.github ? "class = 'github'": ''}>${project.name}</h3>
            <a href="${project.url}" target="_blank">${project.url}</a>
        </li>`
    }).join('')
}

function updateExperiences(profileData){
    const experiences = document.getElementById('profile.experiences')
    experiences.innerHTML = profileData.experiences.map(experience => {
        return `<li>
                    <h3 class="title">${experience.name}</h3>
                    <p class="period">${experience.period}</p>
                    <p >${experience.description}</p>
               </li>`
    }).join('')
}

function updateEducation(profileData){
    const education = document.getElementById('profile.education');
    
    education.innerHTML = profileData.education.map(education => {
        return `<li>
                    <h3 class="title">${education.name}</h3>
                    <p class="period">${education.period}</p>
                    <p class="graduation">${education.instituition}</p>
                    <p >${education.description}</p>
               </li>`
    }).join('')
}

function updateCertificates(profileData){
    const certificates = document.getElementById('profile.certificates');

    certificates.innerHTML = profileData.certificates.map(certificate => {
        return `<li>
                    <h3 class="title">${certificate.name}</h3>
                    <a class="certificate" href="${certificate.link}" target="_blank">${certificate.link}</a>
                </li>`
    }).join('')
}

(async () => { 

    const profileData = await fetchProfileData();
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperiences(profileData)
    updateEducation(profileData)
    updateCertificates(profileData)
})()