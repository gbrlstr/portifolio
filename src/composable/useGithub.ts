import axios from 'axios';
const token = import.meta.env.VITE_GIT_TOKEN;
const headers = {
    Authorization: `Bearer ${token}`
};

export function useGithub() {
    
    async function getProjects(){
        return axios.get('https://api.github.com/users/gbrlstr/repos', { headers })
            .then(res => res.data)
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    async function getProjectTags(project: string){
        return axios.get(`https://api.github.com/repos/gbrlstr/${project}/tags`, { headers })
            .then(res => res.data)
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    async function getProjectLanguages(project: string){
        return axios.get(`https://api.github.com/repos/gbrlstr/${project}/languages`, { headers })
            .then(res => res.data)
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    async function getProjectDetails(project: string){
        return axios.get(`https://api.github.com/repos/gbrlstr/${project}`, { headers })
            .then(res => res.data)
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    return {
        getProjects,
        getProjectTags,
        getProjectLanguages,
        getProjectDetails
    }
}
