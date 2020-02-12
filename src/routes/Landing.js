import React from 'react';
import Slider from "react-slick";
import { Banner, Announce, Contact, Map, Preview } from '../components/';
import { filterPosts } from '../utils/content'

try {
  var SUMMARY_JSON = require('../assets/posts/summary.json');
} catch (e) {
  var SUMMARY_JSON = {fileMap: []};
}

export default () => {
  const posts = filterPosts(SUMMARY_JSON);

  return (
    <span>
      <Banner/>
      <Announce/>
      <Map/>
      <Contact />
      <Slider infinite={true} slidesToShow={posts.length > 3 ? 3 : posts.length} dots={true}>
        {posts.map(post => <Preview {...post}/>)}
      </Slider>
    </span>
  );
}
