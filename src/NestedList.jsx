import React, { useState } from 'react';
import {
  FaAngleRight,
  FaAngleDown,
  FaFolder,
  FaFolderOpen,
  FaFile,
} from 'react-icons/fa';
import { transformDataToNestedList } from './utils';

const NestedList = ({ data }) => {
  const nestedListData = transformDataToNestedList(data);
  const [expandedNodes, setExpandedNodes] = useState(
    nestedListData.reduce((acc, node) => {
      acc[node.id] = true;
      return acc;
    }, {})
  );

  const toggleNode = (nodeId) => {
    setExpandedNodes((prevState) => ({
      ...prevState,
      [nodeId]: !prevState[nodeId],
    }));
  };

  const GetIcon = ({ isDir, expanded }) => {
    if (!isDir) {
      return (
        <span className="icons file">
          <FaFile />
        </span>
      );
    }

    return expanded ? (
      <span className="icons">
        <FaAngleDown />
        <FaFolderOpen />
      </span>
    ) : (
      <span className="icons">
        <FaAngleRight />
        <FaFolder />
      </span>
    );
  };

  const renderNode = (node) => (
    <ul key={node.id} className="list">
      <li onClick={() => toggleNode(node.id)}>
        <span className="flex">
          <GetIcon isDir={node.isDir} expanded={expandedNodes[node.id]} />
          {node.name}
        </span>
      </li>
      {expandedNodes[node.id] && node.children && node.children.length > 0 && (
        <ul className="list">
          {node.children.map((childNode) => (
            <li key={childNode.id}>{renderNode(childNode)}</li>
          ))}
        </ul>
      )}
    </ul>
  );

  return <div>{nestedListData.map((rootNode) => renderNode(rootNode))}</div>;
};

export default NestedList;
