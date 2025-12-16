import React from 'react';

export interface ChartData {
  month: string;
  amount: number;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  receipt?: boolean;
}

export interface PlanItem {
  name: string;
  price: string;
  period: string;
  details: string;
  highlight?: boolean;
}