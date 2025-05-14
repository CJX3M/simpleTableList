import { useState, useEffect, useMemo } from 'react';
import { FiEdit } from 'react-icons/fi';
import DataTable from './components/datatable';
import EditModal from './components/editmodal';
import { generateMockData } from './utils/mockData';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [recentlyUpdatedIds, setRecentlyUpdatedIds] = useState([]);

    // Load mock data on mount
    useEffect(() => {
      setData(generateMockData());
    }, []);
  
    // Add this useEffect for cleanup
    useEffect(() => {
      const timer = setTimeout(() => {
        setRecentlyUpdatedIds([]);
      }, 2000);
      return () => clearTimeout(timer);
    }, [recentlyUpdatedIds]);
    
  
    // Memoize the data table to prevent unnecessary re-renders
    const memoizedDataTable = useMemo(
      () => <DataTable data={data} onRowSelect={setSelectedItem} highlightedRows={recentlyUpdatedIds} />,
      [data, recentlyUpdatedIds]
    );
  
    const handleSave = (updatedItem) => {
      setData(prev =>
        prev.map(item => (item.id === updatedItem.id ? updatedItem : item))
      );
      setSelectedItem(null);
      setRecentlyUpdatedIds(prev => [...prev, updatedItem.id]);
    };
  
    return (
      <div className="container-fluid min-vh-100 bg-light p-4">
        <div className="container-lg">
          <header className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h3 mb-0">User Management</h1>
            <button className="btn btn-primary">
              <FiEdit className="me-2" /> New Item
            </button>
          </header>
          {memoizedDataTable}
          <EditModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            onSave={handleSave}
          />
        </div>
      </div>
    );
  }