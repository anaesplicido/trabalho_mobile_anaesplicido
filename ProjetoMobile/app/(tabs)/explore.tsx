import { StyleSheet, Image, Platform } from 'react-native';


import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FF0000', dark: '#FF0000' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#FF0000"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">O que veremos neste site?</ThemedText>
      </ThemedView>
      <ThemedText>Este site irá descrever um pouco sobre o que são, como são e como funcionam os famosos Filmes, Séries, Desenhos animados, alguns de seus personagens e sobre a indústria cinematográfica! </ThemedText>
      <Collapsible title="Filmes">
        <ThemedText>
        Chamamos de filme um espetáculo de imagens em movimento (mais tarde acompanhadas por som), são formados por uma ou mais cenas, que tem começo, meio e fim, e {' '}
          <ThemedText type="defaultSemiBold">“mostra"</ThemedText> alguma coisa acontecendo numa sucessão temporal{' '}
          <ThemedText type="defaultSemiBold">.</ThemedText>
        </ThemedText>
        <ThemedText>
          Entre os filmes há diversas categorias: <ThemedText type="defaultSemiBold">romance, ficção científica, terror, suspense,</ThemedText>{' '}
          entre outros, todos eles constorem o que chamamos de filme.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Séries">
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">Série </ThemedText>de televisão é um programa de TV ou online com capítulos, chamados episódios, que são agrupados por temporadas. Já as plataformas digitais são soluções tecnológicas que permitem o acesso a serviços e conteúdo online.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Animações">
        <ThemedText>
           <ThemedText type="defaultSemiBold">Animação </ThemedText> é uma arte que dá vida a imagens, objetos ou desenhos inanimados, fazendo-os parecerem se mover, ou seja, animação é o ato de “dar vida” a objetos estáticos e inanimados através de diferentes métodos. {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
         
        </ThemedText>
        <Image source={require('@/assets/images/camera.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Personagens">
        <ThemedText>
           <ThemedText type="defaultSemiBold">Personagens</ThemedText> são figuras que atuam em uma narrativa, podendo ser pessoas, animais, objetos ou humanóides. Eles podem ser reais ou fictícios. {' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
          Os personagens são uma parte fundamental da narrativa e desempenham um papel crucial na trama. São definidos pelas ações que tomam, pelas coisas que falam ou pela relevância que têm.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Indústria Cinematográfica">
        <ThemedText>
          A {' '}
          <ThemedText type="defaultSemiBold">Indústria Cinematrográfica ()</ThemedText>
          é o conjunto de empresas que se envolvem na produção de filmes, séries, vídeos e outros meios audiovisuais. A indústria cinematográfica é uma atividade artístico-industrial que se caracteriza por transformações frequentes. O seu impacto social, econômico e cultural é cada vez mais complexo.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Atores">
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">Atores </ThemedText>são artistas que interpretam personagens em obras de teatro, cinema, televisão e publicidade. Eles estudam roteiros, trabalham com diretores e outros atores, e se dedicam à psicologia de seus personagens.
          São referência no ramso os atores  <ThemedText type="defaultSemiBold">Leonardo DiCaprio, Johnny Depp, Robert Downey Jr, Tom Cruise, Brad Pitt, Will Smith, Jennifer Aniston, Adam Sandler, Margot Robbie, Ryan Gosling, </ThemedText>{' '}
          entre outros famosos de Hollywood.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
               <ThemedText type="defaultSemiBold"></ThemedText>{' '}
             
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}


const styles = StyleSheet.create({
  headerImage: {
    color: '#8B0000',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
