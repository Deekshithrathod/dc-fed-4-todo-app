import "./Tabs.css";
import { useRecoilState } from "recoil";
import { tabIdState } from "../../state/atoms/tabs";

const Tabs = () => {
  const [activeTabId, setActiveTabId] = useRecoilState(tabIdState);
  const tabsList = ["All", "Active", "Completed"];

  const Tab = ({ text, id }: { text: string; id: number }) => {
    return (
      <div
        className={`tab ${id === activeTabId ? `selected` : ""}`}
        data-id={id}
        onClick={() => setActiveTabId(id)}>
        {text}
      </div>
    );
  };

  return (
    <>
      <nav className="tabs-container">
        {tabsList.map((tab, index) => {
          return <Tab text={tab} id={index + 1} key={index} />;
        })}
      </nav>
    </>
  );
};

export default Tabs;
