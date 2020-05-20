import ajax from './ajax';

export const reqRegister = (user) => ajax('/register', user, 'POST');

export const reqLogin = (user) => ajax('/login', user, 'POST');

export const reqUpload = (file) => ajax('/upload', file, 'POST');

export const reqRequirements = (file) => ajax('/requirements', file, 'POST');
