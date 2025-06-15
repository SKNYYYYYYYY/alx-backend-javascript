export default function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

(uploadPhoto().then((res) => {console.log(res.body)} ));