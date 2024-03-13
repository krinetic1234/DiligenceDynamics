import styles from '../styles/Settings.module.css';

export default function SettingsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Account Information</h2>
        <p><strong>Email:</strong> user@example.com</p>
        <p><strong>Password:</strong> *********</p>
        <button className={styles.button}>Edit</button>
      </div>
      <hr/>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Notifications</h2>
        <div className={styles.inputGroup}>
          <input type="checkbox" id="email_notifications" name="email_notifications"/>
          <label htmlFor="email_notifications" className={styles.label}>Email Notifications</label>
        </div>
        <div className={styles.inputGroup}>
          <input type="checkbox" id="sms_notifications" name="sms_notifications"/>
          <label htmlFor="sms_notifications" className={styles.label}>SMS Notifications</label>
        </div>
        <button className={styles.button}>Save Changes</button>
      </div>
      <hr/>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Privacy Settings</h2>
        <div className={styles.inputGroup}>
          <input type="checkbox" id="profile_public" name="profile_public"/>
          <label htmlFor="profile_public" className={styles.label}>Make my profile public</label>
        </div>
        <div className={styles.inputGroup}>
          <input type="checkbox" id="search_engines" name="search_engines"/>
          <label htmlFor="search_engines" className={styles.label}>Allow search engines to index my profile</label>
        </div>
        <button className={styles.button}>Update Privacy</button>
      </div>
    </div>
  );
}
