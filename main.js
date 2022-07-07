import './style.css'


const BASE_URL = `https://picsum.photos/v2/list?page=2&limit=100`;

const getImages = async function () {
  // eslint-disable-next-line no-undef
  await axios
    .get(BASE_URL)
    .then((res) => {
      //
      const images = res.data;

      const contentSection = document.getElementById('app');

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < images.length; i++) {
        //Tags creation
        const imgContainer = document.createElement('div');
        const imgTag = document.createElement('img');
        const authorName = document.createElement('p');
        const imageId = document.createElement('p');

        //Add image href value to the src attribute for image
        //Add style attribute and include width value to image
        imgTag.src = images[i].download_url;
        imgTag.setAttribute('style', 'width: 670px');

        
        //Add id value and author name to to the p elements created above
        imageId.innerHTML = images[i].id;
        authorName.innerHTML = images[i].author;

        //Grab the div element created and add the corresponding elements to the div
        imgContainer.appendChild(imgTag);
        imgContainer.appendChild(authorName);
        imgContainer.appendChild(imageId);

        //Grap the div with the id "app" and add the div with the image components 
        contentSection.appendChild(imgContainer);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

//Call the getImages function to retrieve all 100 images.
getImages();
