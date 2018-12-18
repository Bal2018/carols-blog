/* eslint-disable */
/** @jsx jsx */
import { Link, Timestamp, ReadTime } from '../../components/Misc';
import Box from '../../components/Box';
import PageLayout from '../../components/PageLayout';
import { jsx, css } from '@emotion/core';
import { graphql } from 'gatsby';

const linkStyles = css`
  box-shadow: none;
`;

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <PageLayout title="Blog">
      <Box
        width={[1, 1, 720]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
      >
        <h1>Blog</h1>
        <Box>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              return (
                <Box key={post.id}>
                  <Link to={post.fields.slug} css={linkStyles}>
                    <Timestamp>{post.frontmatter.date}</Timestamp>
                    {' · '}
                    <ReadTime time={post.frontmatter.readingTime} />
                    <h3>{post.frontmatter.title}</h3>
                    <p>{post.excerpt}</p>
                  </Link>
                </Box>
              );
            })}
        </Box>
      </Box>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            readingTime
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
/* eslint-enable */

export default BlogIndex;
