import { makeStyles } from '@material-ui/core';
import SideMenue from "../components/sideMenue/sideMenue";
import { client } from '../lib/graphql/client';
import { QUESTIONS } from '../lib/graphql/query';
import { NextSeo } from 'next-seo';
import { BLOGS } from '../lib/graphql/query';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'around',
    paddingLeft: '10rem',
    paddingRight: '10rem',
    marginTop: '5rem',
    [theme.breakpoints.down('1000')]: {
      paddingLeft: '5rem',
      paddingRight: '5rem',
    },
    [theme.breakpoints.down('800')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
  leftArea: {
    width: "25%"
  },
  rightArea: {
    width: "25%",
    margin: '1rem',
    [theme.breakpoints.down("1049")]: {
      display: 'none',
      width: "0%",
    },
  },
  blogContainer: {
    width: '100%',
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    overflow: 'hidden',
  },
  faqTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold"
  },
  faqDesc: {
    fontWeight: "500",
    color: "grey",
  },
}));

const Question = (props) => {
  const classes = useStyles();
  const { questions } = props;
  return (
    <>
      <NextSeo
        title="faqs"
        description="FAQ's of myhomely"
      />
      <div className={classes.root}>
        <div className={classes.leftArea}></div>
        <div className={classes.faqSection}>
          {questions.map((i, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classes.faqTitle}>{i.question}</div>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.faqDesc}>{i.answer}</div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div className={classes.rightArea}>
          <SideMenue />
        </div>
      </div>
    </>
  );
};

export default Question;
export const getStaticProps = async () => {
  try {
    const {
      data: { questions },
      error,
    } = await client.query({
      query: QUESTIONS
    });
    if (error || !questions.length) {
      throw error;
    }

    const trimmedQuestion = questions.map((question) => {
      return {
        ...question,
        body: question.answer.substring(0, 100 + ((Math.random() * 1000) % 100)),
      };
    });

    return {
      props: { questions: trimmedQuestion },
    };
  } catch (error) {
    return {
      props: {
        questions: [],
      },
    };
  }
};
