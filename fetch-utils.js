const SUPABASE_URL = 'https://bywoedxznswuqviiwaqh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTk0Mzk2MCwiZXhwIjoxOTU3NTE5OTYwfQ.wO1HkYCrauUHzt1Z35G739A9zQJwq8a67muhkdxD_QQ';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session();
}


export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./workshops');
    }
}

export async function signupUser(email, password){
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

export async function getWorkshops() {
    const response = await client
        .from('workshops')
        .select(`*, participants (*)`);
    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
