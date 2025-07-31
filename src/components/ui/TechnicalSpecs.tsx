import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDownIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

interface SpecItem {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  description?: string;
  importance?: 'high' | 'medium' | 'low';
  status?: 'compliant' | 'warning' | 'info';
}

interface SpecCategory {
  id: string;
  title: string;
  description?: string;
  items: SpecItem[];
  isExpandedByDefault?: boolean;
}

interface TechnicalSpecsProps {
  categories: SpecCategory[];
  title?: string;
  className?: string;
}

const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({
  categories,
  title = "Technical Specifications",
  className = ''
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(categories.filter(cat => cat.isExpandedByDefault).map(cat => cat.id))
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'compliant':
        return <CheckCircleIcon className="w-5 h-5 text-green-600" />;
      case 'warning':
        return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600" />;
      case 'info':
        return <InformationCircleIcon className="w-5 h-5 text-blue-600" />;
      default:
        return null;
    }
  };

  const getImportanceBadge = (importance?: string) => {
    switch (importance) {
      case 'high':
        return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Critical</span>;
      case 'medium':
        return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Important</span>;
      case 'low':
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Standard</span>;
      default:
        return null;
    }
  };

  return (
    <div className={`bg-white ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">
          Detailed engineering specifications and compliance standards for your project
        </p>
      </div>

      <div className="space-y-4">
        {categories.map((category) => {
          const isExpanded = expandedCategories.has(category.id);
          
          return (
            <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{category.title}</h4>
                  {category.description && (
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {category.items.length} specs
                  </span>
                  {isExpanded ? (
                    <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? 'auto' : 0,
                  opacity: isExpanded ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-white">
                  <div className="grid grid-cols-1 gap-4">
                    {category.items.map((item) => (
                      <motion.div
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h5 className="font-medium text-gray-900">{item.title}</h5>
                            {getStatusIcon(item.status)}
                            {getImportanceBadge(item.importance)}
                          </div>
                          {item.description && (
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          )}
                        </div>
                        <div className="text-right ml-4">
                          <div className="font-semibold text-gray-900">
                            {item.value}
                            {item.unit && <span className="text-sm text-gray-600 ml-1">{item.unit}</span>}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Quick Summary */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-3">Compliance Summary</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {categories.reduce((acc, cat) => 
                acc + cat.items.filter(item => item.status === 'compliant').length, 0
              )}
            </div>
            <div className="text-sm text-gray-600">Compliant Specs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {categories.reduce((acc, cat) => 
                acc + cat.items.filter(item => item.status === 'warning').length, 0
              )}
            </div>
            <div className="text-sm text-gray-600">Requires Attention</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {categories.reduce((acc, cat) => 
                acc + cat.items.filter(item => item.importance === 'high').length, 0
              )}
            </div>
            <div className="text-sm text-gray-600">Critical Specs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs; 
import { motion } from 'framer-motion';
import { 
  ChevronDownIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

interface SpecItem {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  description?: string;
  importance?: 'high' | 'medium' | 'low';
  status?: 'compliant' | 'warning' | 'info';
}

interface SpecCategory {
  id: string;
  title: string;
  description?: string;
  items: SpecItem[];
  isExpandedByDefault?: boolean;
}

interface TechnicalSpecsProps {
  categories: SpecCategory[];
  title?: string;
  className?: string;
}

const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({
  categories,
  title = "Technical Specifications",
  className = ''
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(categories.filter(cat => cat.isExpandedByDefault).map(cat => cat.id))
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'compliant':
        return <CheckCircleIcon className="w-5 h-5 text-green-600" />;
      case 'warning':
        return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600" />;
      case 'info':
        return <InformationCircleIcon className="w-5 h-5 text-blue-600" />;
      default:
        return null;
    }
  };

  const getImportanceBadge = (importance?: string) => {
    switch (importance) {
      case 'high':
        return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Critical</span>;
      case 'medium':
        return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Important</span>;
      case 'low':
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Standard</span>;
      default:
        return null;
    }
  };

  return (
    <div className={`bg-white ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">
          Detailed engineering specifications and compliance standards for your project
        </p>
      </div>

      <div className="space-y-4">
        {categories.map((category) => {
          const isExpanded = expandedCategories.has(category.id);
          
          return (
            <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{category.title}</h4>
                  {category.description && (
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {category.items.length} specs
                  </span>
                  {isExpanded ? (
                    <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? 'auto' : 0,
                  opacity: isExpanded ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-white">
                  <div className="grid grid-cols-1 gap-4">
                    {category.items.map((item) => (
                      <motion.div
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h5 className="font-medium text-gray-900">{item.title}</h5>
                            {getStatusIcon(item.status)}
                            {getImportanceBadge(item.importance)}
                          </div>
                          {item.description && (
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          )}
                        </div>
                        <div className="text-right ml-4">
                          <div className="font-semibold text-gray-900">
                            {item.value}
                            {item.unit && <span className="text-sm text-gray-600 ml-1">{item.unit}</span>}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Quick Summary */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-3">Compliance Summary</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {categories.reduce((acc, cat) => 
                acc + cat.items.filter(item => item.status === 'compliant').length, 0
              )}
            </div>
            <div className="text-sm text-gray-600">Compliant Specs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {categories.reduce((acc, cat) => 
                acc + cat.items.filter(item => item.status === 'warning').length, 0
              )}
            </div>
            <div className="text-sm text-gray-600">Requires Attention</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {categories.reduce((acc, cat) => 
                acc + cat.items.filter(item => item.importance === 'high').length, 0
              )}
            </div>
            <div className="text-sm text-gray-600">Critical Specs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs; 
import { motion } from 'framer-motion';
import { 
  ChevronDownIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

interface SpecItem {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  description?: string;
  importance?: 'high' | 'medium' | 'low';
  status?: 'compliant' | 'warning' | 'info';
}

interface SpecCategory {
  id: string;
  title: string;
  description?: string;
  items: SpecItem[];
  isExpandedByDefault?: boolean;
}

interface TechnicalSpecsProps {
  categories: SpecCategory[];
  title?: string;
  className?: string;
}

const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({
  categories,
  title = "Technical Specifications",
  className = ''
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(categories.filter(cat => cat.isExpandedByDefault).map(cat => cat.id))
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'compliant':
        return <CheckCircleIcon className="w-5 h-5 text-green-600" />;
      case 'warning':
        return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600" />;
      case 'info':
        return <InformationCircleIcon className="w-5 h-5 text-blue-600" />;
      default:
        return null;
    }
  };

  const getImportanceBadge = (importance?: string) => {
    switch (importance) {
      case 'high':
        return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Critical</span>;
      case 'medium':
        return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Important</span>;
      case 'low':
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Standard</span>;
      default:
        return null;
    }
  };

  return (
    <div className={`bg-white ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">
          Detailed engineering specifications and compliance standards for your project
        </p>
      </div>

      <div className="space-y-4">
        {categories.map((category) => {
          const isExpanded = expandedCategories.has(category.id);
          
          return (
            <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{category.title}</h4>
                  {category.description && (
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {category.items.length} specs
                  </span>
                  {isExpanded ? (
                    <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? 'auto' : 0,
                  opacity: isExpanded ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-white">
                  <div className="grid grid-cols-1 gap-4">
                    {category.items.map((item) => (
                      <motion.div
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h5 className="font-medium text-gray-900">{item.title}</h5>
                            {getStatusIcon(item.status)}
                            {getImportanceBadge(item.importance)}
                          </div>
                          {item.description && (
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          )}
                        </div>
                        <div className="text-right ml-4">
                          <div className="font-semibold text-gray-900">
                            {item.value}
                            {item.unit && <span className="text-sm text-gray-600 ml-1">{item.unit}</span>}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Quick Summary */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-3">Compliance Summary</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {categories.reduce((acc, cat) => 
                acc + cat.items.filter(item => item.status === 'compliant').length, 0
              )}
            </div>
            <div className="text-sm text-gray-600">Compliant Specs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {categories.reduce((acc, cat) => 
                acc + cat.items.filter(item => item.status === 'warning').length, 0
              )}
            </div>
            <div className="text-sm text-gray-600">Requires Attention</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {categories.reduce((acc, cat) => 
                acc + cat.items.filter(item => item.importance === 'high').length, 0
              )}
            </div>
            <div className="text-sm text-gray-600">Critical Specs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs; 