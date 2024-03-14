import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

interface CompanySummaryProps {
  companyName: string;
  companySymbol: string;
}

const CompanySummary: React.FC<CompanySummaryProps> = ({ companyName, companySymbol }) => {
  const [summary, setSummary] = useState<string>('Loading summary...');

  useEffect(() => {
    const fetchCompanySummary = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/company-summary', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            companySymbol,
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setSummary(data.summary);
      } catch (error) {
        console.error('Error fetching company summary:', error);
        setSummary('Failed to load summary.');
      }
    };

    fetchCompanySummary();
  }, [companySymbol]);

  return (
    <Card style={{ width: '18rem', margin: '20px auto' }}>
      <Card.Body>
        <Card.Title>AI Summary of {companyName}</Card.Title>
        <Card.Text>
          {summary}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CompanySummary;
