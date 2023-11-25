// import { getDataEntryById } from 'astro:content';

// const defaultResources = getDataEntryById("examples", "default_resources")

export interface IResource {
  url: string;
  title: string;
  summary: string;
}

// Store resources in memory
const RESOURCES = new Map<string, IResource>();

export function addResource(resource: IResource): Promise<IResource> {
  return new Promise((resolve, _reject) => {
    RESOURCES.set(resource.title, resource);
    return resolve(resource);
  });
}

export function listResources(): Promise<IResource[]> {
  return new Promise((resolve, _reject) => {
    const resources = [];
    for (const res of RESOURCES.values()) resources.push(res);
    resources.sort((a, b) => {
      const textA = a.title.toUpperCase();
      const textB = b.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    return resolve(resources);
  });
}

export function deleteResource(title: string) {
  return new Promise((resolve, _reject) => {
    RESOURCES.delete(title);
    return resolve(null);
  });
}

// Bootstrap the database with the default resources
// defaultResources.forEach((resource) => {
//   addResource(resource);
// });
