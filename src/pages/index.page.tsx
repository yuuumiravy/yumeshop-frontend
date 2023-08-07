import useAspidaSWR from '@aspida/swr';
import type { NextPage } from 'next';
import Head from 'next/head';
import { SimpleCard, WideCard } from 'src/components/Card';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { Container } from 'src/components/Layout';
import { List } from 'src/components/List/List';
import { apiClient } from 'src/libs/apiClient';

import { Main, Section, SectionTitle } from 'src/styles/home';

const Home: NextPage = () => {
  const { data: campaigns } = useAspidaSWR(apiClient.campaigns);
  const { data: categories } = useAspidaSWR(apiClient.categories);
  const { data: informations } = useAspidaSWR(apiClient.informations);

  return (
    <>
      <Head>
        <title>Yumeshop</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />
        <Container>
          <Section>
            <SectionTitle>キャンペーン</SectionTitle>
            <List direction="row" wrap="nowrap">
              {campaigns?.map((campaign) => (
                <SimpleCard
                  key={campaign.id}
                  content={campaign.name}
                  thumbnail={campaign.thumbnail}
                  link="/"
                />
              ))}
            </List>
          </Section>
          <Section>
            <SectionTitle>お知らせ</SectionTitle>
            <List direction="column">
              {informations?.map((information) => (
                <WideCard
                  key={information.id}
                  content={information.title}
                  tags={information.tags}
                  date={information.announced_at}
                  link="/"
                />
              ))}
            </List>
          </Section>
          <Section>
            <SectionTitle>カテゴリー</SectionTitle>
            <List direction="row" wrap="nowrap">
              {categories?.map((category) => (
                <SimpleCard
                  key={category.id}
                  content={category.name}
                  thumbnail={category.thumbnail}
                  link="/"
                />
              ))}
            </List>
          </Section>
        </Container>
        <Footer />
      </Main>
    </>
  );
};

export default Home;
