import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Image as PDFImage } from '@react-pdf/renderer';
import './Report.css';

// Import images
import logoImage from "../../Images/genpdf/CMTILogo.jpeg";
import SpinCurrImage from "../../Images/genpdf/amp.jpeg";
import SpinVolImage from "../../Images/genpdf/vol.jpeg";
import SpinPowImage from "../../Images/genpdf/wat.jpeg";
import SpinEngImage from "../../Images/genpdf/ener.jpeg";
import SpinFreqImage from "../../Images/genpdf/freq.jpeg";
import tempImg1 from "../../Images/genpdf/t.jpeg";
import tempImg2 from "../../Images/genpdf/tmp.jpeg";

// Define your styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: '1px solid #ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  center: {
    textAlign: 'center',
    padding: '5px',
  },
  image: {
    width: 140,
    height: 100,
    margin: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #0077b6',
    paddingBottom: 10,
    textAlign: 'center',
    marginBottom: 10,
    color: '#0077b6',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: '#666',
  },
  text: {
    fontSize: 12,
    color: '#333',
    marginBottom: 10,
  },
  footer: {
    fontSize: 10,
    textAlign: 'center',
    color: 'gray',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  table: {
    display: 'flex',
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    border: '1px solid #ccc',
    padding: 5,
    fontSize: 10,
    textAlign: 'center',
  },
  tableHeader: {
    backgroundColor: '#0077b6',
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    backgroundColor: "#0077b6",
    color: "#fff",
    padding: "8px",
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
  }
});

const PDFGenerator = () => {
  const [data, setData] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    preloadImages();
    fetchData();
  }, []);

  const preloadImages = async () => {
    const images = [
      logoImage,
      SpinCurrImage,
      SpinVolImage,
      SpinPowImage,
      SpinEngImage,
      SpinFreqImage,
      tempImg1,
      tempImg2
    ];
  
    try {
      await Promise.all(images.map(src => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      }));
      setImagesLoaded(true);
    } catch (error) {
      console.error('Error preloading images:', error);
    }
  };
  

  const fetchData = async () => {
    try {
      const response = await axios.get("https://cmti-edge.online/smddc/AMSINDIA.php");
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const generatePDF = () => {
    if (!data || !imagesLoaded) return null;

    const sensorDataEntries = Object.entries(data);

    const spindleData = [
      { key: 'Spindle current', value: data['Em1_current'], img: SpinCurrImage },
      { key: 'Spindle voltage', value: data['Em1_voltage'], img: SpinVolImage },
      { key: 'Spindle power', value: data['Em1_power'], img: SpinPowImage },
      { key: 'Spindle energy', value: data['Em1_Energy'], img: SpinEngImage },
      { key: 'Spindle frequency', value: data['freq'], img: SpinFreqImage },
    ];

    const machineData = [
      { key: 'Machine current', value: data['Em2_current'], img: SpinCurrImage },
      { key: 'Machine voltage', value: data['Em2_voltage'], img: SpinVolImage },
      { key: 'Machine power', value: data['Em2_power'], img: SpinPowImage },
      { key: 'Machine energy', value: data['Em2_Energy'], img: SpinEngImage },
      { key: 'Machine frequency', value: data['freq'], img: SpinFreqImage },
    ];

    const vibrationData = [
      { key: 'Frequency', value: data['freq'] },
      { key: 'RPM', value: (parseFloat(data['freq']) * 60).toFixed(2) },
    ];

    const temperatureData = [
      { key: 'RTD1', value: data['rtd1'], img : tempImg1 },
      { key: 'RTD2', value: data['rtd2'], img : tempImg1 },
      { key: 'RTD3', value: data['rtd3'], img : tempImg1 },
      { key: 'RTD4', value: data['rtd4'], img : tempImg1 }
    ];

    const temperatureTCData = [
      { key: 'TC1', value: data['tc1'], img : tempImg2 },
      { key: 'TC2', value: data['tc2'], img : tempImg2 },
      { key: 'TC3', value: data['tc3'], img : tempImg2 },
      { key: 'TC4', value: data['tc4'], img : tempImg2 }
    ];

    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={{ display: "flex", justifyContent: "space-between" }}>
              <Text style={{ ...styles.text, fontSize: "12px" }}>Machine: Machine Name</Text>
              <Text style={{ ...styles.text, fontSize: "12px" }}>Location: SMDDC Workshop</Text>
            </View>

            <PDFImage alt='logo' src={logoImage} style={{ ...styles.image, alignSelf: 'center', marginTop:'-5px' }} />

            <Text style={styles.header}>Real Time Machine Tool Condition Monitoring Report</Text>
            <Text style={styles.subheader}>Report Generated Date: {new Date().toLocaleDateString()}</Text>

            <Text style={styles.sectionTitle}>Sensor Data</Text>

            <Text style={{ ...styles.text, fontSize: 14, backgroundColor: "#f77f00", color: "black", padding: "5px", borderRadius: 5 }}>Voltage Input (V)</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                {sensorDataEntries
                  .filter(([key]) => key.startsWith('vin'))
                  .map(([key]) => (
                    <Text key={key} style={{ ...styles.tableCell, ...styles.tableHeader }}>{key.replace('vin', 'Voltage Input ')}</Text>
                  ))}
              </View>
              <View style={styles.tableRow}>
                {sensorDataEntries
                  .filter(([key]) => key.startsWith('vin'))
                  .map(([, value]) => (
                    <Text key={value} style={styles.tableCell}>{value}</Text>
                  ))}
              </View>
            </View>

            <Text style={{ ...styles.text, fontSize: 14, backgroundColor: "#f77f00", color: "black", padding: "5px", borderRadius: 5 }}>Current Input (A)</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                {sensorDataEntries
                  .filter(([key]) => key.startsWith('Iin'))
                  .map(([key]) => (
                    <Text key={key} style={{ ...styles.tableCell, ...styles.tableHeader }}>{key.replace('Iin', 'Current Input ')}</Text>
                  ))}
              </View>
              <View style={styles.tableRow}>
                {sensorDataEntries
                  .filter(([key]) => key.startsWith('Iin'))
                  .map(([, value]) => (
                    <Text key={value} style={styles.tableCell}>{value}</Text>
                  ))}
              </View>
            </View>

            <Text style={styles.sectionTitle}>Spindle Information</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom:'5px' }}>
              {spindleData.map(({ key, value, img }) => (
                <View key={key} style={styles.imageContainer}>
                  <PDFImage alt='spinfo' src={img} style={{...styles.image, height:'85px', width:'85px', marginLeft:'-10px'}} />
                  <Text style={{ fontSize: 10 }}>{key}: {value}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.sectionTitle}>Machine Information</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
              {machineData.map(({ key, value, img }) => (
                <View key={key} style={styles.imageContainer}>
                  <PDFImage alt='machinfo' src={img} style={{...styles.image, height:'80px', width:'80px',marginLeft:'-10px'}}  />
                  <Text style={{ fontSize: 10 }}>{key}: {value}</Text>
                </View>
              ))}
            </View>

            <Text style={{...styles.sectionTitle, marginTop:'10px'}}>Vibration Details</Text>
            {vibrationData.map(({ key, value }) => (
              <Text key={key} style={{ fontSize: 12, padding: "5px" }}>{key}: {value}</Text>
            ))}

            <Text style={styles.sectionTitle}>Temperature Information</Text>
            <Text style={{ fontWeight: 'extrabold', fontSize: 14, color: "black", padding: '10px' }}>PT 100 RTD</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
              {temperatureData.map(({ key, value , img }) => (
                <View key={key} style={styles.imageContainer}>
                  <PDFImage alt='tempinfo' src={img} style={{ ...styles.image, width: '100px', height: '100px' }} /> 
                  <Text style={{ fontSize: 10 }}>{key}: {value}°C</Text>
                </View>
              ))}
            </View>

            <Text style={{ fontWeight: 'extrabold', fontSize: 14, color: "black", padding: '10px' }}>Thermo Couple</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
              {temperatureTCData.map(({ key, value, img }) => (
                <View key={key} style={styles.imageContainer}>
                  <PDFImage alt='thermoinfo' src={img} style={{ ...styles.image, width: '110px', height: '90px' }} /> 
                  <Text style={{ fontSize: 10 }}>{key}: {value}°C</Text>
                </View>
              ))}
            </View>

            <Text style={styles.footer} render={({ pageNumber, totalPages }) => (
              `${pageNumber} / ${totalPages}`
            )} fixed />
          </View>
        </Page>
      </Document>
    );
  };

  return (
    <div className='pdf-gen'>
      <p className='fs-2 fw-bold'>Report Generator</p>
      <p className='pdf-gen-subtitle fs-4 fw-medium pt-5'>Real Time Machine Tool Condition Monitoring Dashboard Report</p>
      {data && imagesLoaded && (
        <button className='pdf-download-btn ' onClick={() => { }}>
          <PDFDownloadLink document={generatePDF()} fileName="report.pdf" className='text-white text-decoration-none '>
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download PDF'
            }
          </PDFDownloadLink>
        </button>
      )}
    </div>
  );
};
export default PDFGenerator;
