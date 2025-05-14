import { useState, useEffect } from 'react';
import { FiSave } from 'react-icons/fi';

const EditModal = ({ item, onClose, onSave }) => {
  const [editedItem, setEditedItem] = useState(item || {});

  useEffect(() => {
    if (item) {
      setEditedItem(item);
    }
  }, [item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem(prev => ({ ...prev, [name]: value }));
  };

  if (!item) return null;

  return (
    <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Item</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {/* Existing Name and Email fields */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                name="name"
                value={editedItem?.name || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email"
                value={editedItem?.email || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            {/* New Role Dropdown */}
            <div className="mb-3">
              <label className="form-label">Role</label>
              <select
                name="role"
                value={editedItem?.role || 'User'}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Manager">Manager</option>
              </select>
            </div>

            {/* New Status Dropdown */}
            <div className="mb-3">
              <label className="form-label">Status</label>
              <select
                name="status"
                value={editedItem?.status || 'Active'}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button
              onClick={() => onSave(editedItem)}
              className="btn btn-primary"
            >
              <FiSave className="me-2" /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditModal;