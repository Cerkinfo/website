import React, { useEffect, useState } from 'react';
import {
  Container,
  Spinner
} from "reactstrap";
import { H3, Subtitle } from '../components/Titles';
import { formatDate } from '../utils/date';
import {
  withRouter
} from 'react-router-dom';

export default withRouter((props) => {
  const [page, setPage] = useState(null);
  useEffect(() => {
    if (props.match.params && props.match.params.article) {
      try {
        setPage(require(`../assets/posts/${props.match.params.article}.json`))
      } catch (e) {
        props.history.replace("/404")
      }
    }
  });

  if (page) {
    return (
      <Container>
        <H3>{page.title}</H3>
        <Subtitle>{formatDate(page.date)}</Subtitle>
        <div dangerouslySetInnerHTML={{ __html: page.bodyHtml }}></div>
      </Container>
    );
  } else {
    return (
      <Container className="text-center">
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      </Container>
    );
  }
});
