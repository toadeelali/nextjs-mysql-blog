import executeQuery from '../lib/db';

export async function getSortedPostsData() {
  try {
    const result = await executeQuery({
      query: 'SELECT * FROM posts',
      values: [],
    });

    return result.map(({ id, link, date, title }) => {
      return { id, link, date: date.toString(), title };
    });

  } catch (error) {
    console.log(error);
  }
};

export async function getAllPostIds() {
  try {
    const result = await executeQuery({
      query: 'SELECT link FROM posts',
      values: [],
    });

    return result.map(({ link }) => {
      return {
        params: {
          link
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export async function getPostData(link) {

  try {
    const result = await executeQuery({
      query: `SELECT * FROM posts WHERE link='${link}'`,
      values: [],
    });

    return {
      ...result[0],
      date: result[0].date.toString()
    }
  } catch (error) {
    console.log(error);
  }
}
