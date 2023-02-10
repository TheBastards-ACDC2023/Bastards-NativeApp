import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from "react-native"
import { NativeRouter, Route, Routes } from "react-router-native";
import Header from './components/Header';
import FkaToast from './components/Toast';
import AnalyzerStore from './contexts/AnalyzerContext';
import IssueStore from './contexts/IssueContext';
import SensorStore from './contexts/SensorContext';
import ToastStore from './contexts/ToastContext';
import WeatherStore from './contexts/WeatherContext';
import CameraPage from './pages/Camera';
import Cownter from './pages/Cownter';
import Dashboard from './pages/Dashboard';
import Fields from './pages/Fields';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Subscription from './pages/Subscription';
import Weather from './pages/Weather';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <NativeRouter>
        <ToastStore>
          <AnalyzerStore>
            <WeatherStore>
              <Header />
              <Routes>
                <Route path="/camera" element={<CameraPage />} />
                <Route path="/" element={<Subscription />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/cownter" element={<Cownter />} />
                <Route path="/menu" element={<Menu />} />    
                <Route path="/dashboard" element={<Dashboard />} />           
              </Routes>
            </WeatherStore>
            <FkaToast />
          </AnalyzerStore>
        </ToastStore>
      </NativeRouter>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242c40',
    color: '#d0d0c0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
