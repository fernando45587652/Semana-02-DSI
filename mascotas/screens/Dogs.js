import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

export default function Dogs() {
  const dogImages = [
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Bulldog74.jpg',
      description: 'Bulldog Inglés relajado',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/3/34/German_Shepherd_Dog_head_Lamia_2005.jpg',
      description: 'Pastor Alemán vigilante',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/MiloSmet.JPG',
      description: 'Beagle curioso',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Le%C3%AFko_au_bois_de_la_Cambre.jpg',
      description: 'Golden Retriever en el parque',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Rottweiler_kopf_2.jpg',
      description: 'Rottweiler fuerte y fiel',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/6/66/BostonTerrierBrindleStand_w.jpg',
      description: 'Boston Terrier elegante',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Bullterier_089_LM.jpg',
      description: 'Bull Terrier en alerta',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Bearb_josh04_07.JPG',
      description: 'Labrador Retriever amigable',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/000_American_Pit_Bull_Terrier.jpg',
      description: 'Pitbull con energía',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/8/83/American_Bully..jpg',
      description: 'American Bully musculoso',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Bullmastiff_edited.JPG',
      description: 'Bullmastiff protector',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Galería de Perros 🐶</Text>
      {dogImages.map((dog, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: dog.uri }} style={styles.image} />
          <Text style={styles.description}>{dog.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    alignItems: 'center',
    backgroundColor: '#66CDAA',
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  card: {
    alignItems: 'center',
    marginBottom: 25,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 12,
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: '#000',
    fontStyle: 'italic',
  },
});